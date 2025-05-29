const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const hooksDir = path.join(__dirname, 'src', 'hooks');
const providersDir = path.join(__dirname, 'src', 'providers');
const outputFile = path.join(__dirname, 'src', 'index.tsx');

// Clear or recreate `index.tsx`
if (fs.existsSync(outputFile)) {
  fs.unlinkSync(outputFile);
}
fs.writeFileSync(outputFile, '', 'utf8');

function isExcluded(fileName) {
  return fileName.includes('.stories.') || fileName.includes('.test.');
}

function getDirectoryContents(dir) {
  let files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const itemPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files = files.concat(getDirectoryContents(itemPath));
    } else {
      if (!isExcluded(item.name)) {
        files.push(itemPath);
      }
    }
  }
  return files;
}

const componentFiles = getDirectoryContents(componentsDir);
const hooksFiles = getDirectoryContents(hooksDir);
const providersFiles = getDirectoryContents(providersDir);
const allFiles = [...componentFiles, ...hooksFiles, ...providersFiles];

const importMap = new Map();
const reactNamedImports = new Set();
let hasDefaultReactImport = false;
let codeLines = [];
let rechartsImports = new Set();

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('import')) {
      // Extract the import portion and the source
      const importRegex = /^import\s+(.*)\s+from\s+['"](.*)['"];?$/;
      const match = trimmed.match(importRegex);
      if (!match) {
        codeLines.push(line);
        continue;
      }
      const importSpec = match[1];
      const importSource = match[2];

      // Ignore local imports
      if (
        importSource.startsWith('.') ||
        importSource.includes('/components') ||
        importSource.startsWith('@components/') ||
        importSource.includes('/hooks') ||
        importSource.startsWith('@hooks/') ||
        importSource.includes('/providers') ||
        importSource.startsWith('@providers/')
      ) {
        continue;
      }

      if (importSource === 'react') {
        let lineSpec = importSpec;
        let outsideBraces = lineSpec.split('{')[0];
        if (outsideBraces.includes('React')) {
          hasDefaultReactImport = true;
          lineSpec = lineSpec.replace('React', '').trim();
          lineSpec = lineSpec.replace(/^,|,$/g, '').trim();
        }

        const bracePattern = /\{([^}]+)\}/g;
        let braceMatch;
        while ((braceMatch = bracePattern.exec(lineSpec)) !== null) {
          const inside = braceMatch[1]
            .split(',')
            .map((x) => x.trim())
            .filter(Boolean);
          for (const i of inside) {
            reactNamedImports.add(i);
          }
        }
      } else {
        // Other imports
        let defImport = null;
        let namedImports = new Set();

        const bracePattern = /\{([^}]+)\}/;
        const braceMatch = importSpec.match(bracePattern);

        if (braceMatch) {
          const namedContent = braceMatch[1];
          const namedParts = namedContent
            .split(',')
            .map((x) => x.trim())
            .filter(Boolean);
          for (const np of namedParts) {
            namedImports.add(np);
          }

          let remaining = importSpec.replace(bracePattern, '').trim();
          remaining = remaining.replace(/,+/g, ',').replace(/^,|,$/g, '').trim();
          if (remaining) {
            defImport = remaining;
          }
        } else {
          defImport = importSpec.trim();
        }

        if (!importMap.has(importSource)) {
          importMap.set(importSource, { default: null, named: new Set() });
        }
        const entry = importMap.get(importSource);
        if (defImport && !entry.default) {
          entry.default = defImport;
        }
        for (const ni of namedImports) {
          entry.named.add(ni);
        }
      }
    } else {
      codeLines.push(line);
    }
  }
}

// Construct the React import line
const finalImports = [];
if (hasDefaultReactImport || reactNamedImports.size > 0) {
  let reactImportLine = 'import ';
  if (hasDefaultReactImport) {
    reactImportLine += 'React';
  }
  if (reactNamedImports.size > 0) {
    if (hasDefaultReactImport) {
      reactImportLine += ', ';
    }
    reactImportLine += '{ ' + Array.from(reactNamedImports).sort().join(', ') + ' }';
  }
  reactImportLine += " from 'react';";
  finalImports.push(reactImportLine);
}

// Construct other imports (deduplicated)
for (const [src, { default: defImport, named }] of importMap.entries()) {
  let parts = [];
  if (defImport) parts.push(defImport);
  if (named.size > 0) {
    parts.push('{ ' + Array.from(named).sort().join(', ') + ' }');
  }
  if (parts.length > 0) {
    finalImports.push(`import ${parts.join(', ')} from '${src}';`);
  }
}

// Combine everything
let finalContent = "import './config/global.css';\n\n";
finalContent += finalImports.join('\n') + '\n\n' + codeLines.join('\n');

// Remove any non-printable characters
finalContent = finalContent.replace(/[^\x09\x0A\x0D\x20-\x7E]/g, '');

// Remove any lines containing 'Bud1'
finalContent = finalContent
  .split('\n')
  .filter((line) => !line.includes('Bud1'))
  .join('\n');

fs.writeFileSync(outputFile, finalContent.trim() + '\n', 'utf8');

console.log('Successfully combined all files into src/index.tsx');
