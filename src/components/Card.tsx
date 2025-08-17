import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { colors, borderRadius, spacing, shadows } from '../styles';

export interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: keyof typeof spacing;
  shadow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  padding = 'md',
  shadow = true,
}) => {
  return (
    <View
      style={[
        styles.card,
        { padding: spacing[padding] },
        shadow && shadows.md,
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
});