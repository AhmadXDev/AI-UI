# Circle UI Components

This directory contains the organized React Native UI components for the Circle screen implementation.

## Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header/         # AppHeader with title and add button
│   ├── Avatar/         # Circular avatar with initials/colors
│   ├── Button/         # Primary/secondary button variants
│   └── Navigation/     # Bottom navigation with badges
├── screens/            # Complete screen implementations
│   └── Circle/         # Circle screen combining all components
└── styles/             # Centralized styling system
    ├── colors.ts       # Color palette constants
    ├── typography.ts   # Font sizes and weights
    └── spacing.ts      # Layout spacing and dimensions
```

## Usage

### Import components
```tsx
import { AppHeader, Avatar, Button, BottomNavigation } from './src/components';
```

### Import screens  
```tsx
import { CircleScreen } from './src/screens';
```

### Import styles
```tsx
import { colors, typography, spacing, layout } from './src/styles';
```

## Component APIs

### AppHeader
```tsx
<AppHeader 
  title="Your Circle" 
  onAddPress={() => {}} 
  showAddButton={true} 
/>
```

### Avatar
```tsx
<Avatar 
  initials="JD" 
  backgroundColor="#FF6B35" 
  size={56} 
/>
```

### Button
```tsx
<Button 
  title="Create new Circle" 
  onPress={() => {}} 
  variant="primary" 
  fullWidth={true} 
/>
```

### BottomNavigation
```tsx
<BottomNavigation 
  tabs={tabData} 
  activeTab="friends" 
  onTabPress={(id) => {}} 
/>
```

## Styling System

All components use the centralized styling system:

- **Colors**: Dark theme with blue accents
- **Typography**: iOS-style font scales and weights  
- **Spacing**: Consistent spacing scale (xs, sm, md, lg, xl, xxl)
- **Layout**: Standardized component dimensions

## Adding Functionality

To add functional behavior:

1. **Navigation**: Pass navigation props to screen components
2. **State Management**: Add Redux/Context providers above components
3. **API Integration**: Add service calls to button onPress handlers
4. **Data**: Replace mock data with real data sources

## Extending

To add new screens:

1. Create new folder in `src/screens/`
2. Import existing components from `src/components/`
3. Use styling constants from `src/styles/`
4. Follow the same architectural patterns

The component structure ensures maintainability and reusability across the app.