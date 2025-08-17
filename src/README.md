# UI-4 Implementation

This implementation provides a well-structured, maintainable UI codebase following React Native best practices.

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Button/          # Button component with variants
│   ├── Card/            # Card container component
│   ├── Input/           # Input field component
│   ├── Text/            # Custom text component
│   └── index.ts         # Component exports
├── screens/             # Screen components
│   ├── UI4Screen.tsx    # Main UI-4 screen implementation
│   └── index.ts         # Screen exports
├── styles/              # Styling system
│   ├── theme.ts         # Design tokens (colors, spacing, typography)
│   └── globalStyles.ts  # Global style utilities
├── types/               # TypeScript type definitions
│   └── index.ts         # Type exports
└── index.ts             # Main exports
```

## Key Features

### 🎨 Design System
- **Consistent theming** with colors, typography, and spacing tokens
- **Responsive design** with flexible layouts
- **Accessibility** support with proper text scaling and touch targets

### 🧩 Reusable Components

#### CustomText
- Multiple variants: heading, subheading, body, caption, label
- Customizable colors and font weights
- Consistent typography scaling

#### Button
- Variants: primary, secondary, outline, ghost
- Sizes: small, medium, large
- Loading states and disabled states
- Icon support with positioning

#### Input
- Label and error message support
- Various keyboard types
- Multiline support
- Left and right icon slots
- Focus/blur state handling

#### Card
- Customizable shadows and borders
- Flexible padding and styling
- Clean container for content grouping

### 📱 Screen Implementation
The UI4Screen demonstrates a modern profile/settings interface with:
- User avatar section
- Form inputs for personal information
- Statistics display
- Action buttons

## Usage Examples

### Basic Components

```tsx
import { CustomText, Button, Input, Card } from './src/components';

// Text with variants
<CustomText variant="heading">Welcome</CustomText>
<CustomText variant="body" color="#666">Subtitle text</CustomText>

// Buttons with different styles
<Button title="Save" onPress={handleSave} />
<Button title="Cancel" variant="outline" onPress={handleCancel} />

// Input fields
<Input
  label="Email"
  placeholder="Enter your email"
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
/>

// Cards for content grouping
<Card shadow="medium">
  <CustomText>Card content</CustomText>
</Card>
```

### Customization

All components accept style props for customization:

```tsx
<Button
  title="Custom Button"
  style={{ backgroundColor: 'red' }}
  textStyle={{ fontSize: 18 }}
/>

<Card
  padding={20}
  backgroundColor="#f0f0f0"
  borderRadius={12}
>
  <CustomText>Custom card</CustomText>
</Card>
```

## Theme Customization

Update `src/styles/theme.ts` to customize the design system:

```tsx
export const colors = {
  primary: '#007AFF',    // Your brand color
  secondary: '#5856D6',  // Secondary brand color
  // ... other colors
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  // ... other spacing values
};
```

## Testing

The implementation includes tests for:
- Component rendering
- Screen functionality
- Type safety

Run tests with:
```bash
npm test
```

## Development Guidelines

### Adding New Components
1. Create component in `src/components/ComponentName/`
2. Follow the existing prop interface patterns
3. Use the design system tokens from theme.ts
4. Export from `src/components/index.ts`
5. Add tests following existing patterns

### Styling Best Practices
- Use design system tokens instead of hardcoded values
- Prefer StyleSheet.create over inline styles
- Use global styles for common patterns
- Follow React Native styling conventions

### Type Safety
- Define proper TypeScript interfaces
- Extend BaseComponentProps for consistency
- Use proper typing for style props

This implementation provides a solid foundation for building maintainable React Native UIs with minimal code duplication and maximum reusability.