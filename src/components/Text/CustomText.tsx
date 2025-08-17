import React from 'react';
import { Text, TextStyle, StyleSheet } from 'react-native';
import { colors, typography } from '../../styles/theme';
import { BaseComponentProps } from '../../types';

interface CustomTextProps extends BaseComponentProps {
  children: React.ReactNode;
  variant?: 'heading' | 'subheading' | 'body' | 'caption' | 'label';
  color?: string;
  style?: TextStyle;
  numberOfLines?: number;
  weight?: '300' | '400' | '500' | '600' | '700';
}

export const CustomText: React.FC<CustomTextProps> = ({
  children,
  variant = 'body',
  color = colors.text,
  style,
  numberOfLines,
  weight,
  testID,
}) => {
  const getVariantStyle = () => {
    switch (variant) {
      case 'heading':
        return styles.heading;
      case 'subheading':
        return styles.subheading;
      case 'body':
        return styles.body;
      case 'caption':
        return styles.caption;
      case 'label':
        return styles.label;
      default:
        return styles.body;
    }
  };

  return (
    <Text
      style={[
        getVariantStyle(),
        { color },
        weight && { fontWeight: weight },
        style,
      ]}
      numberOfLines={numberOfLines}
      testID={testID}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    lineHeight: 32,
  },
  subheading: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: 24,
  },
  body: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.regular,
    lineHeight: 22,
  },
  caption: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.regular,
    lineHeight: 18,
  },
  label: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    lineHeight: 16,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});