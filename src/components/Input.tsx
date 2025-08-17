import React from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors, typography, borderRadius, spacing } from '../styles';

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  inputStyle?: TextStyle;
  errorStyle?: TextStyle;
  disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  containerStyle,
  labelStyle,
  inputStyle,
  errorStyle,
  disabled = false,
  ...textInputProps
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text style={[styles.label, labelStyle]}>{label}</Text>
      )}
      <TextInput
        style={[
          styles.input,
          error && styles.inputError,
          disabled && styles.inputDisabled,
          inputStyle,
        ]}
        placeholderTextColor={colors.textMuted}
        editable={!disabled}
        {...textInputProps}
      />
      {error && (
        <Text style={[styles.error, errorStyle]}>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  label: {
    ...typography.styles.label,
    marginBottom: spacing.sm,
  },
  input: {
    ...typography.styles.body1,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    backgroundColor: colors.background,
    minHeight: 44,
  },
  inputError: {
    borderColor: colors.error,
  },
  inputDisabled: {
    backgroundColor: colors.gray100,
    color: colors.textMuted,
  },
  error: {
    ...typography.styles.caption,
    color: colors.error,
    marginTop: spacing.xs,
  },
});