import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../../styles/colors';
import { spacing, borderRadius } from '../../styles/theme';

export interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: keyof typeof spacing;
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  variant = 'default',
  padding = 'md',
}) => {
  return (
    <View
      style={[
        styles.card,
        styles[variant],
        { padding: spacing[padding] },
        style,
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: borderRadius.lg,
  },
  default: {
    backgroundColor: colors.background,
  },
  elevated: {
    backgroundColor: colors.background,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  outlined: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
  },
});