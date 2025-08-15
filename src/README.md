# Flash Cards UI Implementation

This is a React Native implementation of a Flash Cards UI based on the provided screenshot. The implementation focuses on creating an exact visual replica of the design with proper component organization and maintainability.

## 🎯 Features

- **Exact UI Match**: Recreates the design from the provided screenshot
- **Component-Based Architecture**: Well-organized, reusable components
- **TypeScript Support**: Full TypeScript implementation for type safety
- **Gradient Background**: Uses `react-native-linear-gradient` for the vibrant background
- **Responsive Design**: Proper spacing and responsive layout
- **Test Coverage**: Unit tests for components and screens

## 📁 Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── GradientBackground.tsx  # Gradient background component
│   │   └── Header.tsx              # App header with title and settings
│   └── flashcards/
│       ├── FlashCard.tsx          # Individual flash card component
│       └── AddDeckButton.tsx      # Add deck button component
├── screens/
│   └── FlashCardsScreen.tsx       # Main screen component
└── types/                         # TypeScript type definitions (empty for now)
```

## 🎨 Design Elements

### Color Palette
- **Gradient**: Purple (#9333EA) → Pink (#E879F9) → Coral (#FB7185) → Orange (#F97316)
- **Text**: White (#FFFFFF)
- **Progress Indicator**: Orange (#F97316)
- **Card Background**: Semi-transparent white (rgba(255, 255, 255, 0.15))

### Typography
- **Title**: 30px, light weight, 4px letter spacing
- **Card Title**: 24px, medium weight
- **Progress**: 15px, bold weight

### Components
1. **Header**: "FLASH CARDS" title with settings gear icon
2. **FlashCard**: Semi-transparent card with progress indicator and title
3. **AddDeckButton**: Bordered button with plus icon
4. **GradientBackground**: Animated gradient background

## 🚀 Usage

### Basic Implementation
```tsx
import { FlashCardsScreen } from './src/screens';

function App() {
  return <FlashCardsScreen />;
}
```

### Individual Components
```tsx
import { 
  GradientBackground, 
  Header, 
  FlashCard, 
  AddDeckButton 
} from './src/components';

// Use components individually
<GradientBackground>
  <Header title="FLASH CARDS" onSettingsPress={() => {}} />
  <FlashCard title="English - Spanish 1" progress={0} />
  <AddDeckButton onPress={() => {}} />
</GradientBackground>
```

## 🧪 Testing

Run tests with:
```bash
npm test
```

Tests include:
- App rendering
- FlashCardsScreen component rendering
- Component content validation

## 🛠️ Development

### Prerequisites
- Node.js >= 18
- React Native CLI
- iOS/Android development environment

### Setup
```bash
npm install
```

### Run
```bash
# iOS
npm run ios

# Android
npm run android

# Metro bundler
npm start
```

## 📝 Implementation Notes

### UI-Only Focus
This implementation is purely UI-focused as requested. All components have placeholder functions for interactions:
- Settings button press
- Card tap
- Add deck button press

These can be easily connected to functional logic.

### Maintainability
- Clear component separation
- TypeScript for type safety
- Consistent styling patterns
- Reusable components
- Proper prop interfaces

### Extensibility
The architecture makes it easy to:
- Add new card types
- Implement card animations
- Add more deck management features
- Connect to backend services
- Implement navigation between screens

## 🎯 Comparison with Original

The implementation matches the original screenshot in:
- ✅ Gradient background colors and direction
- ✅ Typography and spacing
- ✅ Component layout and positioning
- ✅ Color scheme and transparency effects
- ✅ Icon placement and styling
- ✅ Overall visual hierarchy

This creates a pixel-perfect recreation ready for functional implementation.