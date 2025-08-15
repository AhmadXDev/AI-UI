export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const layout = {
  // Screen padding
  screenPadding: spacing.lg,
  
  // Component spacing
  componentSpacing: spacing.md,
  
  // Avatar sizes
  avatarSize: 60,
  avatarSpacing: spacing.sm,
  
  // Button dimensions
  buttonHeight: 52,
  buttonRadius: 26,
  
  // Header dimensions
  headerHeight: 60,
  
  // Bottom navigation
  bottomNavHeight: 80,
} as const;