import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { colors } from '../../styles/colors';
import { typography, spacing, borderRadius } from '../../styles/theme';

export interface ChatInputProps {
  onSend?: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  onSend,
  placeholder = "Type your message...",
  disabled = false,
}) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() && onSend) {
      onSend(message.trim());
      setMessage('');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder={placeholder}
          placeholderTextColor={colors.textLight}
          multiline
          maxLength={1000}
          editable={!disabled}
        />
        <TouchableOpacity
          style={[
            styles.sendButton,
            (!message.trim() || disabled) && styles.sendButtonDisabled,
          ]}
          onPress={handleSend}
          disabled={!message.trim() || disabled}>
          <Text style={[
            styles.sendButtonText,
            (!message.trim() || disabled) && styles.sendButtonTextDisabled,
          ]}>
            Send
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.borderLight,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: spacing.md,
  },
  input: {
    ...typography.body,
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    marginRight: spacing.sm,
    maxHeight: 100,
    backgroundColor: colors.background,
  },
  sendButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.lg,
    minHeight: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: colors.textLight,
  },
  sendButtonText: {
    ...typography.button,
    color: colors.textWhite,
  },
  sendButtonTextDisabled: {
    color: colors.textWhite,
    opacity: 0.7,
  },
});