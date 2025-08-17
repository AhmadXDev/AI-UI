import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';

export { colors, spacing, typography };

export const theme = {
  colors,
  spacing,
  typography,
};

export type Theme = typeof theme;