import React from 'react';
import {
  TextInput,
  View,
  ViewStyle,
  TextStyle,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import { CustomText } from '../Text/CustomText';
import { colors, spacing, borderRadius, typography } from '../../styles/theme';
import { BaseComponentProps } from '../../types';

interface InputProps extends BaseComponentProps, Omit<TextInputProps, 'style'> {
  label?: string;
  error?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  disabled?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  placeholder,
  value,
  onChangeText,
  containerStyle,
  inputStyle,
  disabled = false,
  multiline = false,
  numberOfLines,
  leftIcon,
  rightIcon,
  testID,
  ...textInputProps
}) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const getBorderColor = () => {
    if (error) return colors.error;
    if (isFocused) return colors.primary;
    return colors.border;
  };

  const getBackgroundColor = () => {
    if (disabled) return colors.surface;
    return colors.background;
  };

  return (
    <View style={[styles.container, containerStyle]} testID={testID}>
      {label && (
        <CustomText
          variant="body"
          weight="500"
          color={error ? colors.error : colors.text}
          style={styles.label}
        >
          {label}
        </CustomText>
      )}
      
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: getBorderColor(),
            backgroundColor: getBackgroundColor(),
          },
          multiline && styles.multilineContainer,
        ]}
      >
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        
        <TextInput
          style={[
            styles.input,
            leftIcon && { marginLeft: spacing.sm },
            rightIcon && { marginRight: spacing.sm },
            inputStyle,
          ]}
          placeholder={placeholder}
          placeholderTextColor={colors.textSecondary}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          editable={!disabled}
          multiline={multiline}
          numberOfLines={numberOfLines}
          {...textInputProps}
        />
        
        {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
      </View>
      
      {error && (
        <CustomText
          variant="caption"
          color={colors.error}
          style={styles.errorText}
        >
          {error}
        </CustomText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  label: {
    marginBottom: spacing.sm,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    minHeight: 44,
  },
  input: {
    flex: 1,
    fontSize: typography.fontSize.md,
    color: colors.text,
    paddingVertical: spacing.sm,
  },
  leftIcon: {
    marginRight: spacing.sm,
  },
  rightIcon: {
    marginLeft: spacing.sm,
  },
  errorText: {
    marginTop: spacing.xs,
  },
  multilineContainer: {
    height: 'auto',
    minHeight: 80,
  },
});