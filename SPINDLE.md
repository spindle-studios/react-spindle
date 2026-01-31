# React Spindle - Component Reference

> LLM-optimized documentation for @spindle-studios/react-spindle

## Overview

React Spindle is a component library built on Radix UI primitives with Tailwind CSS styling. All components use CSS variables for theming and support dark/light modes.

**Import pattern:** `import { ComponentName, useHookName } from '@spindle-studios/react-spindle'`

---

## Components by Category

### Form Inputs

#### Input
Text input field with optional label and icon slots.

```tsx
<Input
  label="Email"
  type="email"
  placeholder="Enter email"
  left={<Icon name="Mail" />}
  right={<Icon name="Check" />}
  size="md"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | ReactNode | - | Label above input |
| size | 'lg' \| 'md' \| 'sm' | 'md' | Input height |
| left | ReactNode | - | Left slot (icon/prefix) |
| right | ReactNode | - | Right slot (icon/suffix) |
| + all native input props |

#### Textarea
Multi-line text input with fixed height.

```tsx
<Textarea
  label="Description"
  placeholder="Enter description..."
  containerClassName="w-full"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | ReactNode | - | Label above textarea |
| containerClassName | string | - | Wrapper div className |
| + all native textarea props |

#### Checkbox
Binary selection with optional label.

```tsx
<Checkbox
  label="Accept terms"
  labelPosition="right"
  checked={checked}
  onCheckedChange={setChecked}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | ReactNode | - | Clickable label text |
| labelPosition | 'left' \| 'right' | 'right' | Label placement |
| containerClassName | string | - | Wrapper div className |
| + Radix Checkbox props (checked, onCheckedChange, disabled) |

#### Switch
Toggle switch with label support.

```tsx
<Switch
  label="Enable notifications"
  labelPosition="left"
  checked={enabled}
  onCheckedChange={setEnabled}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | ReactNode | - | Label text |
| labelPosition | 'left' \| 'right' | 'right' | Label placement |
| containerClassName | string | - | Wrapper div className |
| + Radix Switch props (checked, onCheckedChange, disabled) |

#### Slider
Range slider for numeric values.

```tsx
<Slider
  label="Volume"
  value={[50]}
  onValueChange={setValue}
  min={0}
  max={100}
  step={1}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | ReactNode | - | Label above slider |
| containerClassName | string | - | Wrapper div className |
| + Radix Slider props (value, onValueChange, min, max, step, disabled) |

#### Select
Dropdown select with generic type support.

```tsx
<Select
  label="Country"
  options={countries}
  value={selected}
  onSelect={setSelected}
  getOptionKey={(c) => c.id}
  render={(c) => c.name}
  placeholder="Choose country"
  clearable
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| options | T[] | required | Array of options |
| value | T \| null | required | Selected value |
| onSelect | (value: T \| null) => void | required | Selection handler |
| label | string | - | Label above select |
| render | (option: T) => ReactNode | - | Custom option renderer |
| getOptionKey | (option: T) => string \| number | - | Unique key extractor |
| placeholder | string | 'Select an option' | Placeholder text |
| clearable | boolean | true | Show clear button |
| disabled | boolean | false | Disable interaction |

#### File
File upload input with preview.

```tsx
<File
  label="Avatar"
  title="Upload Image"
  maxFileSize={2 * 1024 * 1024}
  onFileChange={(files) => setFiles(files)}
  onError={(error) => console.error(error)}
  multiple={false}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | ReactNode | - | Label above input |
| title | string | - | Button text |
| maxFileSize | number | 2MB | Max file size in bytes |
| initialFile | string | - | Initial preview (base64) |
| onFileChange | (files: string[]) => void | - | Returns base64 files |
| onError | (error: string) => void | - | Error callback |
| multiple | boolean | false | Allow multiple files |

#### Calendar
Date picker component.

```tsx
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  showOutsideDays
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| mode | 'single' \| 'range' \| 'multiple' | - | Selection mode |
| selected | Date \| DateRange | - | Selected date(s) |
| onSelect | (date) => void | - | Selection handler |
| showOutsideDays | boolean | true | Show adjacent month days |
| + react-day-picker props |

#### ColorPicker
Color selection with predefined palette and hex input.

```tsx
<ColorPicker
  value={color}
  onChange={setColor}
  predefinedColors={['#3B82F6', '#10B981', '#EF4444']}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | Current hex color |
| onChange | (color: string) => void | - | Color change handler |
| predefinedColors | string[] | 8 default colors | Palette options |
| disableDefaultColors | boolean | false | Hide default palette |

**Default colors:** #FFFFFF, #94A3B8, #000000, #3B82F6, #10B981, #8B5CF6, #EF4444, #14B8A6

---

### Buttons & Actions

#### Button
Primary interactive element with variants.

```tsx
<Button variant="primary" size="md" onClick={handleClick}>
  Save Changes
</Button>

<Button variant="icon" onClick={toggleMenu}>
  <Icon name="Menu" />
</Button>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' \| 'destructive' \| 'outline' \| 'ghost' \| 'icon' | 'primary' | Visual style |
| size | 'lg' \| 'md' \| 'sm' | 'md' | Button size |
| + all native button props |

**Variant colors:**
- `primary`: bg-primary text-primary-foreground (white on dark)
- `secondary`: bg-secondary text-secondary-foreground (muted gray)
- `destructive`: bg-destructive text-destructive-foreground (red)
- `outline`: border only, transparent background
- `ghost`: no border, transparent background
- `icon`: square aspect ratio, for icon-only buttons

#### Dropdown
Context menu with items, separators, and keyboard shortcuts.

```tsx
<Dropdown
  trigger={<Button variant="icon"><Icon name="MoreVertical" /></Button>}
  items={[
    { icon: Edit, label: 'Edit', sublabel: '⌘E', onSelect: handleEdit },
    { type: 'separator' },
    { icon: Trash, label: 'Delete', onSelect: handleDelete, disabled: false }
  ]}
  sideOffset={4}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| trigger | ReactNode | required | Button/element that opens menu |
| items | DropdownItem[] | required | Menu items |
| sideOffset | number | 4 | Distance from trigger |

**Item types:**
```tsx
{ type: 'item', icon?: Component, label: ReactNode, sublabel?: string, onSelect: () => void, disabled?: boolean }
{ type: 'separator' }
{ type: 'label', label: ReactNode, inset?: boolean }
```

---

### Layout & Containers

#### Card
Basic container with border and padding.

```tsx
<Card className="max-w-md">
  <h2 className="text-lg font-semibold">Card Title</h2>
  <p className="text-muted-foreground">Card content here.</p>
</Card>
```

Styling: `border border-border bg-card text-card-foreground rounded-md p-4`

#### Callout
Alert box with icon for notices/warnings.

```tsx
<Callout
  icon={<Icon name="AlertCircle" />}
  variant="destructive"
>
  This action cannot be undone.
</Callout>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| icon | ReactNode | required | Left-side icon |
| variant | 'primary' \| 'secondary' \| 'destructive' \| 'outline' \| 'ghost' | 'primary' | Background color |

#### Divider
Visual separator line.

```tsx
<Divider variant="horizontal" />
<Divider variant="vertical" className="h-8" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'horizontal' \| 'vertical' | 'horizontal' | Direction |

#### Scrollable
Custom scrollable container with styled scrollbar.

```tsx
<Scrollable className="h-64" variant="vertical" disableScrollbar={false}>
  {longContent}
</Scrollable>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'vertical' \| 'horizontal' | 'vertical' | Scroll direction |
| disableScrollbar | boolean | false | Hide scrollbar thumb |

#### Collapse
Expandable/collapsible content section.

```tsx
<Collapse
  trigger={<Button variant="ghost">Show Details</Button>}
  defaultOpen={false}
>
  <p>Collapsible content here.</p>
</Collapse>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| trigger | ReactNode | required | Clickable header element |
| defaultOpen | boolean | false | Initial open state |

---

### Overlays & Modals

#### Modal
Centered dialog window.

```tsx
<Modal isOpen={open} onClose={() => setOpen(false)} size="md">
  <h2 className="text-lg font-semibold mb-4">Modal Title</h2>
  <p>Modal content here.</p>
  <div className="flex gap-2 mt-4">
    <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
    <Button onClick={handleSave}>Save</Button>
  </div>
</Modal>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| isOpen | boolean | required | Visibility state |
| onClose | () => void | required | Close handler |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Width (400/500/600px) |

#### Sheet
Slide-out panel from screen edge.

```tsx
<Sheet isOpen={open} onClose={() => setOpen(false)} variant="right">
  <h2 className="text-lg font-semibold mb-4">Settings</h2>
  <nav>{menuItems}</nav>
</Sheet>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| isOpen | boolean | required | Visibility state |
| onClose | () => void | required | Close handler |
| variant | 'left' \| 'right' \| 'bottom' | 'left' | Slide direction |

#### Popover
Floating panel attached to trigger element.

```tsx
<Popover
  trigger={<Button>Open Popover</Button>}
  content={<div className="p-2">Popover content</div>}
  variant="bottom"
  align="start"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| trigger | ReactNode | required | Element that opens popover |
| content | ReactNode | required | Popover content |
| variant | 'top' \| 'right' \| 'bottom' \| 'left' | 'bottom' | Position |
| align | 'start' \| 'center' \| 'end' | 'center' | Alignment |
| sideOffset | number | 4 | Distance from trigger |

#### Tooltip
Hover tooltip for additional info.

```tsx
<Tooltip
  trigger={<Button variant="icon"><Icon name="Info" /></Button>}
  content="Helpful information here"
  side="top"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| trigger | ReactNode | required | Element to hover |
| content | ReactNode | required | Tooltip text/content |
| side | 'top' \| 'right' \| 'bottom' \| 'left' | 'top' | Position |
| delayDuration | number | 0 | Delay before showing (ms) |

---

### Feedback

#### Toast
Temporary notification message. Requires SpindleProvider.

```tsx
// Setup: wrap app with SpindleProvider
<SpindleProvider options={{ toast: { position: 'bottom-right' } }}>
  <App />
</SpindleProvider>

// Usage anywhere in app:
const createToast = useToast();
createToast({
  variant: 'positive',
  message: 'Changes saved successfully!',
  duration: 3000
});
```

| Variant | Icon | Use Case |
|---------|------|----------|
| positive | CheckCircle | Success messages |
| negative | XCircle | Error messages |
| neutral | - | Informational |
| action | - | With action button |

**Toast options:**
```tsx
{
  variant: 'positive' | 'negative' | 'neutral' | 'action',
  message: string,
  action?: string,      // Button text for action variant
  duration?: number,    // Auto-dismiss ms
  onClick?: () => void  // Action button handler
}
```

#### Loader
Loading spinner with size variants.

```tsx
<Loader size="md" variant="primary" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | 'sm' \| 'md' \| 'lg' | 'md' | Spinner size |
| variant | 'primary' \| 'secondary' | 'primary' | Color |

#### Badge
Small label for status/categorization.

```tsx
<Badge variant="primary">New</Badge>
<Badge variant="destructive">Urgent</Badge>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' \| 'destructive' \| 'outline' | 'primary' | Style |

---

### Data Display

#### Table
Virtualized data table with keyboard navigation.

```tsx
<Table
  data={users}
  columns={[
    { header: 'Name', key: 'name' },
    { header: 'Email', key: 'email' },
    { header: 'Actions', key: 'id' }
  ]}
  render={(row, columnKey) => {
    if (columnKey === 'id') {
      return <Button size="sm" variant="ghost">Edit</Button>;
    }
    return row[columnKey];
  }}
  onClick={(row) => setSelected(row)}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| data | T[] | required | Array of row objects |
| columns | { header: string, key: keyof T }[] | required | Column definitions |
| render | (row: T, columnKey: keyof T, rowIndex: number) => ReactNode | - | Custom cell renderer |
| onClick | (row: T, rowIndex: number) => void | - | Row click handler |
| disableScrollbar | boolean | false | Hide scrollbar |

**Features:** Virtual scrolling for large datasets, keyboard navigation (Tab, Arrow keys, Enter), sticky headers.

#### LineChart
Line chart for time series data.

```tsx
<LineChart
  data={[
    { name: 'Jan', sales: 100, revenue: 200 },
    { name: 'Feb', sales: 150, revenue: 280 },
    { name: 'Mar', sales: 180, revenue: 320 }
  ]}
  lines={[
    { key: 'sales', color: '#3B82F6', name: 'Sales' },
    { key: 'revenue', color: '#10B981', name: 'Revenue' }
  ]}
  height={300}
  showGrid
  showLegend
  showTooltip
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| data | { name: string, [key]: number }[] | required | Data points |
| lines | { key: string, color?: string, strokeWidth?: number, name?: string }[] | required | Line configs |
| height | number | 400 | Chart height |
| showGrid | boolean | true | Show grid lines |
| showLegend | boolean | true | Show legend |
| showTooltip | boolean | true | Show hover tooltip |
| xAxisLabel | string | - | X-axis label |
| yAxisLabel | string | - | Y-axis label |
| minimal | boolean | false | Hide axes/grid/legend |

#### PieChart
Pie/donut chart for proportional data.

```tsx
<PieChart
  data={[
    { name: 'Desktop', value: 400, color: '#3B82F6' },
    { name: 'Mobile', value: 300, color: '#10B981' },
    { name: 'Tablet', value: 100, color: '#8B5CF6' }
  ]}
  height={300}
  innerRadius={60}  // Set > 0 for donut
  showLegend
  showTooltip
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| data | { name: string, value: number, color?: string }[] | required | Segments |
| height | number | 400 | Chart height |
| innerRadius | number | 0 | Inner radius (0 = pie, >0 = donut) |
| outerRadius | string | '80%' | Outer radius |
| showLegend | boolean | true | Show legend |
| showTooltip | boolean | true | Show hover tooltip |
| paddingAngle | number | 0 | Gap between segments |

---

### Navigation

#### Segment
Tab-like toggle group that shows corresponding children.

```tsx
<Segment
  options={[
    { label: 'Overview', id: 'overview' },
    { label: 'Details', id: 'details' },
    { label: 'Settings', id: 'settings' }
  ]}
  defaultValue="overview"
  variant="primary"
  size="md"
  onValueChange={(id) => console.log('Selected:', id)}
>
  <OverviewPanel />
  <DetailsPanel />
  <SettingsPanel />
</Segment>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| options | { label: string, id: string }[] | required | Tab options |
| defaultValue | string | - | Initially selected id |
| variant | 'primary' \| 'secondary' \| 'outline' \| 'ghost' | 'primary' | Style |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Button size |
| onValueChange | (id: string) => void | - | Selection handler |
| children | ReactNode[] | - | Content panels (matched by index) |

---

### Utility

#### Icon
Dynamic icon rendering from Lucide React library.

```tsx
<Icon name="Settings" size={20} className="text-muted-foreground" />
<Icon name="Check" size={16} fill="currentColor" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | required | Lucide icon name (PascalCase) |
| size | number \| string | 16 | Icon size |
| fill | string | 'transparent' | Fill color |
| className | string | - | Additional classes |

**Common icons:** Check, X, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Plus, Minus, Search, Settings, User, Mail, Bell, Menu, MoreVertical, Edit, Trash, Copy, Download, Upload, Eye, EyeOff, Lock, Unlock, Star, Heart, AlertCircle, Info, HelpCircle, CheckCircle, XCircle, Loader

---

## Hooks

### useBreakpoints
Responsive breakpoint detection.

```tsx
const { isMobile, isTablet, isDesktop } = useBreakpoints({
  mobile: 600,   // < 600px
  desktop: 1024  // >= 1024px
});

return (
  <div className={isMobile ? 'p-2' : 'p-8'}>
    {isDesktop && <Sidebar />}
    <Main />
  </div>
);
```

### useDebounce
Debounce any value.

```tsx
const [search, setSearch] = useState('');
const debouncedSearch = useDebounce(search, 300);

useEffect(() => {
  fetchResults(debouncedSearch);
}, [debouncedSearch]);
```

### useEnvironment
Environment detection.

```tsx
const { isDevelopment, isProduction } = useEnvironment();

if (isDevelopment) {
  console.log('Debug mode');
}
```

### useOnClickout
Detect clicks outside elements.

```tsx
const menuRef = useRef(null);
const buttonRef = useRef(null);

useOnClickout([menuRef, buttonRef], () => {
  setMenuOpen(false);
});
```

### useOnKeypress
Keyboard shortcut handling.

```tsx
useOnKeypress({
  key: 'KeyS',
  useMeta: true,  // Cmd on Mac, Ctrl on Windows
  onPress: () => handleSave()
});

useOnKeypress({
  key: 'Escape',
  onPress: () => closeModal()
});
```

### useTimeout
Promise-based delay.

```tsx
const delay = useTimeout();

async function handleSubmit() {
  setLoading(true);
  await submitForm();
  await delay(500);  // Brief pause for UX
  setLoading(false);
}
```

### useToast
Create toast notifications. Requires SpindleProvider.

```tsx
const createToast = useToast();

function handleSave() {
  try {
    await saveData();
    createToast({ variant: 'positive', message: 'Saved!' });
  } catch {
    createToast({ variant: 'negative', message: 'Failed to save' });
  }
}
```

### Formatting Hooks

```tsx
// Currency
const formatCurrency = useFormatCurrency();
formatCurrency(1000);  // "£1,000.00"
formatCurrency(1000, { currency: 'USD' });  // "$1,000.00"

// Percentage
const formatPercent = useFormatPercent();
formatPercent(0.25);  // "25%"

// Date
const formatDate = useFormatDate();
formatDate(new Date(), { format: 'DD/MM/YYYY' });  // "31/01/2026"
formatDate(new Date(), { format: 'long', includeTime: true });  // "January 31, 2026 14:30"

// Time
const formatTime = useFormatTime();
formatTime(new Date(), { format: 'HH:MM:SS' });  // "14:30:45"

// Relative time
const formatRelative = useFormatRelativeTime();
formatRelative(pastDate);  // "2 days ago"
formatRelative(futureDate);  // "in 3 hours"
```

---

## Theming

### CSS Variables

All components use CSS variables for colors. Define them in your global CSS:

```css
/* Dark theme (default) */
.dark {
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
}

/* Light theme */
.light {
  --background: 0 0% 100%;
  --foreground: 222.2 47.4% 11.2%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 47.4% 11.2%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 47.4% 11.2%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --muted: 210 40% 96%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96%;
  --accent-foreground: 222.2 47.4% 11.2%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 47.4% 11.2%;
  --radius: 0.5rem;
}
```

### Variable Usage in Tailwind

| Variable | Tailwind Class | Usage |
|----------|----------------|-------|
| --background | bg-background | Page background |
| --foreground | text-foreground | Primary text |
| --card | bg-card | Card backgrounds |
| --primary | bg-primary, text-primary | Buttons, accents |
| --secondary | bg-secondary | Secondary buttons |
| --muted | bg-muted, text-muted-foreground | Subtle backgrounds, secondary text |
| --destructive | bg-destructive | Error states, delete buttons |
| --border | border-border | Borders |
| --ring | ring-ring | Focus rings |

### Theme Switching

```tsx
// Add class to html element
document.documentElement.classList.toggle('dark');
document.documentElement.classList.toggle('light');
```

---

## Common Patterns

### Form with Validation

```tsx
<form onSubmit={handleSubmit} className="flex flex-col gap-4">
  <Input
    label="Email"
    type="email"
    required
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <Input
    label="Password"
    type="password"
    required
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <Checkbox
    label="Remember me"
    checked={remember}
    onCheckedChange={setRemember}
  />
  <Button type="submit">Sign In</Button>
</form>
```

### Modal with Form

```tsx
<Modal isOpen={open} onClose={handleClose} size="md">
  <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
  <div className="flex flex-col gap-4">
    <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} />
    <Textarea label="Bio" value={bio} onChange={(e) => setBio(e.target.value)} />
  </div>
  <div className="flex gap-2 mt-6 justify-end">
    <Button variant="outline" onClick={handleClose}>Cancel</Button>
    <Button onClick={handleSave}>Save</Button>
  </div>
</Modal>
```

### Table with Actions

```tsx
<Table
  data={users}
  columns={[
    { header: 'Name', key: 'name' },
    { header: 'Role', key: 'role' },
    { header: '', key: 'id' }
  ]}
  render={(row, key) => {
    if (key === 'role') {
      return <Badge variant={row.role === 'admin' ? 'primary' : 'secondary'}>{row.role}</Badge>;
    }
    if (key === 'id') {
      return (
        <Dropdown
          trigger={<Button variant="icon" size="sm"><Icon name="MoreVertical" /></Button>}
          items={[
            { icon: Edit, label: 'Edit', onSelect: () => editUser(row) },
            { type: 'separator' },
            { icon: Trash, label: 'Delete', onSelect: () => deleteUser(row) }
          ]}
        />
      );
    }
    return row[key];
  }}
/>
```

### Dashboard Layout

```tsx
const { isMobile } = useBreakpoints();

return (
  <div className="flex h-screen">
    {!isMobile && (
      <aside className="w-64 border-r border-border p-4">
        <nav className="flex flex-col gap-2">
          <Button variant="ghost" className="justify-start">Dashboard</Button>
          <Button variant="ghost" className="justify-start">Settings</Button>
        </nav>
      </aside>
    )}

    {isMobile && (
      <Sheet isOpen={menuOpen} onClose={() => setMenuOpen(false)} variant="left">
        <nav className="flex flex-col gap-2 p-4">
          <Button variant="ghost">Dashboard</Button>
          <Button variant="ghost">Settings</Button>
        </nav>
      </Sheet>
    )}

    <main className="flex-1 p-6">
      <Segment options={tabs} defaultValue="overview">
        <OverviewPanel />
        <AnalyticsPanel />
      </Segment>
    </main>
  </div>
);
```

### Toast Notifications

```tsx
// App wrapper
<SpindleProvider options={{ toast: { position: 'bottom-right', defaultDuration: 3000 } }}>
  <App />
</SpindleProvider>

// Component usage
function SaveButton() {
  const createToast = useToast();

  async function handleSave() {
    try {
      await api.save(data);
      createToast({ variant: 'positive', message: 'Saved successfully!' });
    } catch (error) {
      createToast({
        variant: 'action',
        message: 'Failed to save',
        action: 'Retry',
        onClick: handleSave
      });
    }
  }

  return <Button onClick={handleSave}>Save</Button>;
}
```

### Popover Menu

```tsx
<Popover
  trigger={<Button>Filter</Button>}
  content={
    <div className="flex flex-col gap-3 p-2">
      <Select
        label="Status"
        options={statusOptions}
        value={status}
        onSelect={setStatus}
      />
      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={clearFilters}>Clear</Button>
        <Button size="sm" onClick={applyFilters}>Apply</Button>
      </div>
    </div>
  }
  variant="bottom"
  align="end"
/>
```

---

## Setup

### Installation

```bash
npm install @spindle-studios/react-spindle
```

### CSS Import Order

```tsx
// Import package CSS first
import '@spindle-studios/react-spindle/global.css';
// Then your app CSS (with theme variables)
import './globals.css';
```

### Tailwind Config

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@spindle-studios/react-spindle/**/*.js'
  ],
  // ... rest of config
}
```

### Provider Setup (for Toast)

```tsx
import { SpindleProvider } from '@spindle-studios/react-spindle';

function App() {
  return (
    <SpindleProvider options={{ toast: { position: 'bottom-right' } }}>
      <YourApp />
    </SpindleProvider>
  );
}
```
