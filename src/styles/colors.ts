export const colors = {
  // Primary colors
  primary: '#2563EB',
  primaryDark: '#1D4ED8',
  primaryLight: '#3B82F6',
  
  // Background colors
  background: '#FFFFFF',
  backgroundSecondary: '#F8FAFC',
  backgroundDark: '#0F172A',
  
  // Text colors
  textPrimary: '#1E293B',
  textSecondary: '#64748B',
  textLight: '#94A3B8',
  textWhite: '#FFFFFF',
  
  // UI colors
  border: '#E2E8F0',
  borderLight: '#F1F5F9',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  
  // AI-specific colors
  aiGradientStart: '#667EEA',
  aiGradientEnd: '#764BA2',
  aiAccent: '#8B5CF6',
  
  // Shadows
  shadow: '#00000020',
} as const;

export type ColorKey = keyof typeof colors;