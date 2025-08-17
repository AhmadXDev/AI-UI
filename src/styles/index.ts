/**
 * Central theme configuration
 * Exports all styling constants and utilities
 */

export * from './colors';
export * from './typography';
export * from './layout';

import { colors } from './colors';
import { typography } from './typography';
import { spacing, borderRadius, shadows } from './layout';

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
} as const;

export default theme;