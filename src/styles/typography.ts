export const typography = {
  // Font sizes
  xlarge: 28,
  large: 24,
  medium: 18,
  regular: 16,
  small: 14,
  xsmall: 12,
  
  // Font weights
  weights: {
    light: '300' as const,
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
  
  // Line heights
  lineHeights: {
    tight: 1.2,
    normal: 1.4,
    relaxed: 1.6,
  },
} as const;