[![publish](https://github.com/spindle-studios/react-spindle/actions/workflows/publish.yml/badge.svg)](https://github.com/spindle-studios/react-spindle/actions/workflows/publish.yml)

> [!NOTE]
> This package is maintained by Spindle Studios and is used across our projects. While it's publicly available, it's primarily designed for our internal use cases.

### About

`react-spindle` is a collection of React components and hooks styled with Tailwind and heavily based on [Shadcn](https://github.com/shadcn-ui/ui). It's maintained by Spindle Studios and used across our projects.

### Peer Dependencies

Make sure these are installed in your project:

```json
"peerDependencies": {
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "tailwindcss": "^3.4.16",
  "tailwindcss-animate": "^1.0.7"
}
```

### Installation

```bash
npm install @spindle-studios/react-spindle
```

```bash
yarn add @spindle-studios/react-spindle
```

### Setup

#### 1. Import the CSS at the root of your app

Import the package CSS **first**, then your local CSS so your overrides take precedence:

```tsx
// _app.tsx or main entry file
import '@spindle-studios/react-spindle/global.css';
import './your-global.css'; // Your local CSS with theme overrides
```

> [!IMPORTANT]
> The import order matters. The package CSS must come first so your local styles can override the defaults.

#### 2. Set up your local CSS with theme support

Create your global CSS file with Tailwind directives and theme variables. Theme classes (`.light`, `.dark`) must be defined **outside** of `@layer` to properly override the package defaults:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Theme overrides - must be outside @layer to override package defaults */
.light {
  --background: 0 0% 98%;
  --foreground: 222.2 47.4% 11.2%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 47.4% 11.2%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 47.4% 11.2%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 240 4.8% 95.9%;
  --accent-foreground: 240 5.9% 10%;
  --destructive: 355 65% 48%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 221.2 83.2% 53.3%;
  --radius: 0.5rem;
  --scale: 0.01;
}

.dark {
  --background: 240 10% 13%;
  --foreground: 0 0% 98%;
  --card: 240 10% 19%;
  --card-foreground: 0 0% 98%;
  --popover: 240 10% 19%;
  --popover-foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --primary-foreground: 240 5.9% 10%;
  --secondary: 240 4% 28%;
  --secondary-foreground: 0 0% 98%;
  --muted: 240 3.7% 20%;
  --muted-foreground: 240 5% 64.9%;
  --accent: 240 3.7% 25%;
  --accent-foreground: 0 0% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 3.7% 20%;
  --input: 240 3.7% 27%;
  --ring: 240 4.9% 83.9%;
  --radius: 0.5rem;
  --scale: 0.01;
}

@layer base {
  body {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
  }
}
```

#### 3. Toggle themes by adding classes to the document

Add `.light` or `.dark` class to the `<html>` element to switch themes:

```tsx
// Example theme provider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  return <>{children}</>;
};
```

#### 4. Update your Tailwind config

Add the package to your content paths so Tailwind can scan the component classes:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@spindle-studios/react-spindle/**/*.js',
  ],
  theme: {
    extend: {
      scale: {
        default: 1,
        smaller: 'calc(1 - var(--scale))',
        bigger: 'calc(1 + var(--scale))',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
```

### Usage

After setup, import and use the components:

```tsx
import { Button } from '@spindle-studios/react-spindle';

const Example: React.FC = () => {
  return <Button>Click me</Button>;
};
```

#### Toast and useToast

If you plan to use `Toast` and `useToast`, wrap your app with `SpindleProvider`:

```tsx
import { SpindleProvider } from '@spindle-studios/react-spindle';

const App: React.FC = ({ children }) => {
  return (
    <SpindleProvider options={{ toast: { position: 'bottom-left' } }}>
      {children}
    </SpindleProvider>
  );
};
```

Then use the hook anywhere in your app:

```tsx
import { useToast } from '@spindle-studios/react-spindle';

const MyComponent = () => {
  const createToast = useToast();

  return (
    <button onClick={() => createToast({ message: 'Hello!', variant: 'positive' })}>
      Show Toast
    </button>
  );
};
```
