# Claude Code Guidelines for react-spindle

## Project Overview

React Spindle is a component library built on Radix UI primitives with Tailwind CSS styling. All components use CSS variables for theming and support dark/light modes.

## Project Structure

```
src/
├── components/     # Individual component files (source of truth)
├── stories/        # Storybook stories
│   ├── components/ # Component stories
│   └── hooks/      # Hook stories
├── hooks/          # Custom React hooks
├── config/         # Configuration files (global.css)
└── index.tsx       # Auto-generated exports (DO NOT EDIT DIRECTLY)
```

## Important Rules

### File Editing

- **NEVER edit `src/index.tsx` directly** - it is auto-generated from component files
- Always edit components in `src/components/` directory
- Always edit hooks in `src/hooks/` directory

### Component Patterns

- Use `forwardRef` for components that need ref forwarding
- Use `clsx` for className composition
- Use Radix UI primitives where applicable
- Default size should typically be `'md'`
- Include `type="button"` on button elements

### Styling

- Use Tailwind CSS classes
- Use CSS variables for theming (e.g., `bg-primary`, `text-foreground`)
- Size variants: `xs`, `sm`, `md`, `lg`, `xl` (not all components need all sizes)
- Variant patterns: `primary`, `secondary`, `destructive`, `outline`, `ghost`

### Stories

- Place in `src/stories/components/` for components
- Place in `src/stories/hooks/` for hooks
- Follow existing naming pattern: `ComponentName.stories.tsx`
- Export a `Default` or `Story` function
- Set `storyName` and default export with `{ title: 'Components/Name' }`

### Documentation

- Update `SPINDLE.md` when adding/modifying components
- Include: description, code example, and props table
- **IMPORTANT: Update the Quick Lookup table** at the top of `SPINDLE.md` when adding new components/hooks:
  - Add new entries to the appropriate lookup table (Component, Hook, or Section)
  - Line numbers are approximate (~) - update when adding content that shifts existing sections significantly
  - Keep tables alphabetically sorted within categories

## Commands

```bash
yarn build      # Build storybook
yarn storybook  # Run storybook dev server
yarn tsc        # Type check
```

## Component Size Reference

| Size | Height    | Use Case                        |
| ---- | --------- | ------------------------------- |
| xs   | h-4/h-7   | Compact UI, inline elements     |
| sm   | h-6/h-9   | Secondary actions, tight spaces |
| md   | h-8/h-10  | Default, most use cases         |
| lg   | h-10/h-11 | Primary actions, emphasis       |
| xl   | h-14/h-20 | Hero sections, large displays   |
