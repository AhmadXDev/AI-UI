/**
 * Common type definitions for the UI components
 */

import { ViewStyle, TextStyle } from 'react-native';

export interface CommonProps {
  style?: ViewStyle;
  testID?: string;
}

export interface CommonTextProps {
  style?: TextStyle;
  testID?: string;
}

export interface ThemeProps {
  theme?: 'light' | 'dark';
}

export interface ComponentVariant {
  variant?: string;
}

export interface ComponentSize {
  size?: 'small' | 'medium' | 'large';
}

export interface LoadingState {
  loading?: boolean;
}

export interface DisabledState {
  disabled?: boolean;
}

export interface FullWidthProps {
  fullWidth?: boolean;
}