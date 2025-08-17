/**
 * UI utility functions
 * Helper functions for common UI operations
 */

import { Dimensions, Platform } from 'react-native';

/**
 * Get screen dimensions
 */
export const getScreenDimensions = () => {
  const { width, height } = Dimensions.get('window');
  return { width, height };
};

/**
 * Check if device is in landscape mode
 */
export const isLandscape = () => {
  const { width, height } = getScreenDimensions();
  return width > height;
};

/**
 * Get safe padding for different platforms
 */
export const getSafePadding = () => {
  return {
    paddingTop: Platform.OS === 'ios' ? 44 : 0,
    paddingBottom: Platform.OS === 'ios' ? 34 : 0,
  };
};

/**
 * Convert hex color to rgba
 */
export const hexToRgba = (hex: string, alpha: number = 1) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return hex;
  
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

/**
 * Generate a responsive font size based on screen width
 */
export const responsiveFontSize = (size: number) => {
  const { width } = getScreenDimensions();
  const baseWidth = 375; // iPhone X width as base
  return (size * width) / baseWidth;
};

/**
 * Generate responsive spacing
 */
export const responsiveSpacing = (size: number) => {
  const { width } = getScreenDimensions();
  const baseWidth = 375;
  return (size * width) / baseWidth;
};

/**
 * Debounce function for performance optimization
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};