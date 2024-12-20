> [!IMPORTANT]
> This package is built for personal use, whilst it's available to use by others its primary goal is to combine some personal project code into one repository for reusability purposes.

### 👋🏽 About

`react-otio` provides a collection of React components and hooks styled with Tailwind and heavily based on [Shadcn](https://github.com/shadcn-ui/ui).

### 🔗 Peer Dependencies

Make sure these are installed in your project:

```json
"peerDependencies": {
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "tailwindcss": "^3.4.16",
  "tailwindcss-animate": "^1.0.7"
}
```

### 🔽 Installation

```bash
npm install @olafkotur/react-otio
```

```bash
yarn add @olafkotur/react-otio
```

### 🔨 Setup

#### Add the required Tailwind layers and variables in your global CSS file (imported at the root of your app):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
    --radius: 0.5rem;
    --scale: 0.01;
  }
}

@layer base {
  body {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
  }
}
```

#### Update your Tailwind config file:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/@olafkotur/react-otio/**/*.js'],
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
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
```

### 📦 Usage

#### After installing and configuring Tailwind, simply import and use the components:

```tsx
import { Button } from 'react-otio';

const Example: React.FC = () => {
  return <Button>Click me</Button>;
};
```

#### If you plan to use `Toast` and `useToast` you must also use an `OtioProvider`

```tsx
import { OtioProvider } from 'react-otio';

const App: React.FC = ({ children }) => {
  return <OtioProvider options={{ toast: { position: 'bottom-left' } }}>{children}</OtioProvider>;
};
```
