# AI UI Components

This directory contains the organized UI components for the AI interface.

## Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Common components specific to the app
│   │   ├── Header.tsx   # Header component with title and navigation
│   │   ├── ChatMessage.tsx # Individual chat message component
│   │   ├── ChatInput.tsx   # Chat input with send functionality
│   │   └── index.ts     # Exports for common components
│   └── ui/              # Generic UI components
│       ├── Button.tsx   # Customizable button component
│       ├── TextInput.tsx # Styled text input component
│       ├── Card.tsx     # Card container component
│       └── index.ts     # Exports for UI components
├── screens/             # Screen components
│   ├── AIChatScreen.tsx # Main AI chat interface
│   └── index.ts         # Exports for screens
├── styles/              # Style definitions
│   ├── colors.ts        # Color palette
│   ├── theme.ts         # Typography, spacing, and other theme values
│   └── index.ts         # Theme exports
├── types/               # TypeScript type definitions
└── utils/               # Utility functions
```

## Component Features

### UI Components (`src/components/ui/`)
- **Button**: Customizable button with variants (primary, secondary, outline, ghost) and sizes
- **TextInput**: Styled input with label and error state support
- **Card**: Container component with elevation and outline variants

### Common Components (`src/components/common/`)
- **Header**: App header with title, subtitle, and optional back button
- **ChatMessage**: Individual message bubble for chat interface
- **ChatInput**: Input area for typing and sending messages

### Screens (`src/screens/`)
- **AIChatScreen**: Main chat interface with message list and input

## Styling System

- **Colors**: Consistent color palette with primary, secondary, and semantic colors
- **Typography**: Predefined text styles for headings, body text, and captions
- **Spacing**: Consistent spacing scale (xs, sm, md, lg, xl, xxl)
- **Border Radius**: Consistent border radius values

## Usage

All components are designed to be:
- **Reusable**: Can be used across different screens
- **Maintainable**: Clear separation of concerns and consistent structure
- **Extensible**: Easy to add new props and functionality
- **Type-safe**: Full TypeScript support with proper interfaces

## Connecting Functional Code

The UI components are designed to accept callback functions for interaction:
- Button `onPress` props
- ChatInput `onSend` callbacks
- Header navigation callbacks

This makes it easy to connect your business logic without modifying the UI components.