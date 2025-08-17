# UI Components Documentation

This document describes the UI component system created for the AI-UI project.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx      # Customizable button component
│   ├── Input.tsx       # Text input component with validation
│   ├── Card.tsx        # Container component with styling
│   ├── Text.tsx        # Typography component
│   └── index.ts        # Component exports
├── screens/            # Screen-level components
│   ├── MainScreen.tsx  # Main application screen
│   └── index.ts        # Screen exports
├── styles/             # Styling system
│   ├── colors.ts       # Color palette
│   ├── typography.ts   # Text styles and fonts
│   ├── layout.ts       # Spacing, borders, shadows
│   └── index.ts        # Style exports
├── types/              # TypeScript type definitions
│   └── index.ts        # Common UI types
├── utils/              # Utility functions
│   └── index.ts        # UI helper functions
└── index.ts            # Central exports
```

## Components

### Button
A customizable button component with multiple variants and sizes.

**Props:**
- `title` (string): Button text
- `onPress` (function): Press handler
- `variant` ('primary' | 'secondary' | 'outline' | 'ghost'): Button style
- `size` ('small' | 'medium' | 'large'): Button size
- `disabled` (boolean): Disabled state
- `loading` (boolean): Loading state
- `fullWidth` (boolean): Full width button

**Usage:**
```tsx
import { Button } from './src/components';

<Button
  title="Sign In"
  onPress={handleSignIn}
  variant="primary"
  size="medium"
  fullWidth
/>
```

### Input
A text input component with label and error handling.

**Props:**
- `label` (string): Input label
- `error` (string): Error message
- `disabled` (boolean): Disabled state
- All React Native TextInput props

**Usage:**
```tsx
import { Input } from './src/components';

<Input
  label="Email"
  value={email}
  onChangeText={setEmail}
  placeholder="Enter your email"
  error={emailError}
/>
```

### Card
A container component with consistent styling.

**Props:**
- `children` (ReactNode): Card content
- `padding` (SpacingKeys): Internal padding
- `shadow` (boolean): Shadow effect

**Usage:**
```tsx
import { Card } from './src/components';

<Card padding="lg" shadow>
  <Text>Card content</Text>
</Card>
```

### Text
A typography component with predefined styles.

**Props:**
- `variant` (TypographyStyleKeys): Text style variant
- `children` (ReactNode): Text content
- All React Native Text props

**Usage:**
```tsx
import { Text } from './src/components';

<Text variant="h1">Main Title</Text>
<Text variant="body1">Body text</Text>
```

## Styling System

### Colors
Centralized color management with semantic color names:
- Primary colors: `primary`, `primaryDark`, `primaryLight`
- Text colors: `textPrimary`, `textSecondary`, `textMuted`
- Background colors: `background`, `backgroundSecondary`, `surface`
- Status colors: `success`, `warning`, `error`, `info`

### Typography
Consistent text styles:
- Headings: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`
- Body text: `body1`, `body2`
- Special text: `button`, `label`, `caption`

### Layout
Spacing and layout utilities:
- Spacing scale: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`
- Border radius: `none`, `sm`, `md`, `lg`, `xl`, `2xl`, `full`
- Shadows: `none`, `sm`, `md`, `lg`, `xl`

## Usage Examples

### Import Components
```tsx
// Import individual components
import { Button, Input, Card, Text } from './src/components';

// Import styles
import { colors, spacing, typography } from './src/styles';

// Import utilities
import { getScreenDimensions, hexToRgba } from './src/utils';
```

### Creating Custom Components
```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card } from './src/components';
import { colors, spacing } from './src/styles';

interface CustomCardProps {
  title: string;
  description: string;
}

export const CustomCard: React.FC<CustomCardProps> = ({ title, description }) => {
  return (
    <Card style={styles.container}>
      <Text variant="h5" style={styles.title}>{title}</Text>
      <Text variant="body2" style={styles.description}>{description}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  title: {
    marginBottom: spacing.sm,
    color: colors.primary,
  },
  description: {
    color: colors.textSecondary,
  },
});
```

## Best Practices

1. **Consistency**: Use the predefined color palette and spacing system
2. **Reusability**: Create small, focused components that can be combined
3. **Accessibility**: Use semantic component names and proper contrast ratios
4. **Performance**: Utilize React.memo for components that don't change frequently
5. **Type Safety**: Use TypeScript interfaces for all component props

## Extending the System

To add new components:
1. Create the component in `src/components/`
2. Add proper TypeScript interfaces
3. Export the component in `src/components/index.ts`
4. Follow the established patterns for styling and props
5. Add documentation and usage examples

## Connecting Functional Code

The UI components are designed to be easily connected to functional code:

1. **Event Handlers**: All interactive components accept callback props
2. **State Management**: Components work with any state management solution
3. **Data Binding**: Components accept data through props
4. **Validation**: Input components support error states for form validation

Example:
```tsx
// In your functional component
const [userData, setUserData] = useState({ email: '', password: '' });
const [errors, setErrors] = useState({});
const [loading, setLoading] = useState(false);

const handleLogin = async () => {
  setLoading(true);
  try {
    await loginAPI(userData);
    // Handle success
  } catch (error) {
    setErrors(error.validationErrors);
  } finally {
    setLoading(false);
  }
};

// In your render method
<Input
  label="Email"
  value={userData.email}
  onChangeText={(email) => setUserData(prev => ({ ...prev, email }))}
  error={errors.email}
/>

<Button
  title="Sign In"
  onPress={handleLogin}
  loading={loading}
/>
```