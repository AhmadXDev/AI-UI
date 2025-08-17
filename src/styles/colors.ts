/**
 * Color palette for the application
 * Centralized color management for consistency
 */

export const colors = {
  // Primary colors
  primary: '#007AFF',
  primaryDark: '#0051D0',
  primaryLight: '#40A0FF',
  
  // Secondary colors
  secondary: '#FF6B35',
  secondaryDark: '#E55A2B',
  secondaryLight: '#FF8A65',
  
  // Neutral colors
  white: '#FFFFFF',
  black: '#000000',
  gray100: '#F8F9FA',
  gray200: '#E9ECEF',
  gray300: '#DEE2E6',
  gray400: '#CED4DA',
  gray500: '#ADB5BD',
  gray600: '#6C757D',
  gray700: '#495057',
  gray800: '#343A40',
  gray900: '#212529',
  
  // Background colors
  background: '#FFFFFF',
  backgroundSecondary: '#F8F9FA',
  surface: '#FFFFFF',
  
  // Text colors
  textPrimary: '#212529',
  textSecondary: '#6C757D',
  textMuted: '#ADB5BD',
  
  // Status colors
  success: '#28A745',
  warning: '#FFC107',
  error: '#DC3545',
  info: '#17A2B8',
  
  // Border colors
  border: '#DEE2E6',
  borderLight: '#F8F9FA',
  
  // Shadow colors
  shadow: 'rgba(0, 0, 0, 0.1)',
  shadowDark: 'rgba(0, 0, 0, 0.2)',
} as const;

export type ColorKeys = keyof typeof colors;