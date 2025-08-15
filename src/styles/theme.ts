import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const typography = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
    color: colors.textPrimary,
  },
  h2: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
    color: colors.textPrimary,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
    color: colors.textPrimary,
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: colors.textPrimary,
  },
  bodySecondary: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: colors.textSecondary,
  },
  caption: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: colors.textSecondary,
  },
  button: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: colors.textWhite,
  },
});

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
} as const;