import React from 'react';
import {
  TextInput as RNTextInput,
  View,
  Text,
  StyleSheet,
  TextInputProps as RNTextInputProps,
  ViewStyle,
} from 'react-native';
import { colors } from '../../styles/colors';
import { typography, spacing, borderRadius } from '../../styles/theme';

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
  variant?: 'default' | 'filled' | 'outlined';
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  error,
  containerStyle,
  variant = 'outlined',
  style,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <RNTextInput
        style={[
          styles.input,
          styles[variant],
          error && styles.inputError,
          style,
        ]}
        placeholderTextColor={colors.textLight}
        {...props}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  label: {
    ...typography.caption,
    marginBottom: spacing.xs,
    fontWeight: '500',
  },
  input: {
    ...typography.body,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.lg,
    minHeight: 48,
  },
  default: {
    backgroundColor: colors.backgroundSecondary,
    borderWidth: 0,
  },
  filled: {
    backgroundColor: colors.backgroundSecondary,
    borderWidth: 0,
  },
  outlined: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
  },
  inputError: {
    borderColor: colors.error,
  },
  errorText: {
    ...typography.caption,
    color: colors.error,
    marginTop: spacing.xs,
  },
});