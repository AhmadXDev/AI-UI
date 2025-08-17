import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, shadows } from '../../styles/theme';
import { BaseComponentProps } from '../../types';

interface CardProps extends BaseComponentProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: number;
  shadow?: 'none' | 'small' | 'medium' | 'large';
  borderRadius?: number;
  backgroundColor?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  padding = spacing.md,
  shadow = 'small',
  borderRadius: borderRadiusValue = borderRadius.md,
  backgroundColor = colors.background,
  testID,
}) => {
  const getShadowStyle = () => {
    switch (shadow) {
      case 'none':
        return {};
      case 'small':
        return shadows.small;
      case 'medium':
        return shadows.medium;
      case 'large':
        return shadows.large;
      default:
        return shadows.small;
    }
  };

  return (
    <View
      style={[
        styles.card,
        {
          padding,
          borderRadius: borderRadiusValue,
          backgroundColor,
        },
        getShadowStyle(),
        style,
      ]}
      testID={testID}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: colors.border,
  },
});