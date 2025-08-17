/**
 * Typography styles for the application
 * Centralized typography management for consistency
 */

import { TextStyle } from 'react-native';
import { colors } from './colors';

export const typography = {
  // Font families
  fontFamily: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
  },
  
  // Font sizes
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
  },
  
  // Line heights
  lineHeight: {
    xs: 16,
    sm: 20,
    base: 24,
    lg: 28,
    xl: 32,
    '2xl': 36,
    '3xl': 40,
    '4xl': 44,
    '5xl': 56,
  },
  
  // Text styles
  styles: {
    h1: {
      fontSize: 36,
      lineHeight: 44,
      fontWeight: 'bold',
      color: colors.textPrimary,
    } as TextStyle,
    
    h2: {
      fontSize: 30,
      lineHeight: 40,
      fontWeight: 'bold',
      color: colors.textPrimary,
    } as TextStyle,
    
    h3: {
      fontSize: 24,
      lineHeight: 36,
      fontWeight: '600',
      color: colors.textPrimary,
    } as TextStyle,
    
    h4: {
      fontSize: 20,
      lineHeight: 32,
      fontWeight: '600',
      color: colors.textPrimary,
    } as TextStyle,
    
    h5: {
      fontSize: 18,
      lineHeight: 28,
      fontWeight: '600',
      color: colors.textPrimary,
    } as TextStyle,
    
    h6: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '600',
      color: colors.textPrimary,
    } as TextStyle,
    
    body1: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: 'normal',
      color: colors.textPrimary,
    } as TextStyle,
    
    body2: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: 'normal',
      color: colors.textPrimary,
    } as TextStyle,
    
    caption: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: 'normal',
      color: colors.textSecondary,
    } as TextStyle,
    
    button: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '600',
      color: colors.white,
    } as TextStyle,
    
    label: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '500',
      color: colors.textPrimary,
    } as TextStyle,
  },
} as const;

export type TypographyStyleKeys = keyof typeof typography.styles;