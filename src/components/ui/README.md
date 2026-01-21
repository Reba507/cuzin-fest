# UI Components

This directory contains reusable UI components extracted from the Fauna HTML templates. All components maintain the exact Tailwind styling from the original templates.

## Components

### Button

Reusable button component with multiple variants and sizes.

```jsx
import { Button } from '../components/ui';

// Primary button (default)
<Button variant="primary">Get Started</Button>

// Secondary button
<Button variant="secondary">Get in touch</Button>

// Outline button
<Button variant="outline">Learn More</Button>

// Different sizes
<Button size="small">Small</Button>
<Button size="default">Default</Button>
<Button size="large">Large</Button>

// With onClick handler
<Button onClick={() => console.log('clicked')}>Click me</Button>

// Disabled state
<Button disabled>Disabled</Button>
```

### Input

Reusable input component with label, error states, and different types.

```jsx
import { Input } from '../components/ui';

// Basic input
<Input type="email" placeholder="Your e-mail..." />

// With label
<Input
  type="email"
  label="Email Address"
  placeholder="Enter your email"
  required
/>

// With error state
<Input
  type="email"
  label="Email"
  placeholder="Enter your email"
  error="Please enter a valid email address"
/>

// Controlled input
const [email, setEmail] = useState('');
<Input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  type="email"
  placeholder="Your email"
/>
```

### SocialIcons

Component for displaying social media icons (Facebook, Instagram, LinkedIn).

```jsx
import { SocialIcons } from '../components/ui';

// Default styling
<SocialIcons />

// Custom styling
<SocialIcons
  className="justify-center"
  iconClassName="inline-block mx-2 text-white hover:text-lime-500"
/>

// With labels
<SocialIcons showLabels />
```

### Icons

Individual icon components for common UI elements.

```jsx
import { MenuIcon, CloseIcon, ArrowIcon, EmailIcon } from '../components/ui';

// Menu icon
<MenuIcon className="text-white hover:text-lime-500" />

// Close icon
<CloseIcon width={24} height={24} />

// Arrow icon with direction
<ArrowIcon direction="right" className="ml-2" />

// Email icon
<EmailIcon color="#646A69" />
```

## Styling

All components use Tailwind CSS classes and maintain the exact styling from the original Fauna HTML templates:

- **Primary colors**: teal-900, lime-500
- **Hover states**: Consistent with original design
- **Border radius**: rounded-full for buttons and inputs
- **Transitions**: duration-200 for smooth interactions
- **Focus states**: ring-2 ring-lime-500 for accessibility

## PropTypes

All components include comprehensive PropTypes validation for type safety and better development experience.

## Usage Examples

Check the individual component files for complete PropTypes documentation and usage examples.