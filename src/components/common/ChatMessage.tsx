import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { typography, spacing, borderRadius } from '../../styles/theme';

export interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
  avatar?: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isUser,
  timestamp,
}) => {
  return (
    <View style={[styles.container, isUser ? styles.userContainer : styles.aiContainer]}>
      <View style={[styles.messageBubble, isUser ? styles.userBubble : styles.aiBubble]}>
        <Text style={[styles.messageText, isUser ? styles.userText : styles.aiText]}>
          {message}
        </Text>
        {timestamp && (
          <Text style={[styles.timestamp, isUser ? styles.userTimestamp : styles.aiTimestamp]}>
            {timestamp}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.xs,
    paddingHorizontal: spacing.md,
  },
  userContainer: {
    alignItems: 'flex-end',
  },
  aiContainer: {
    alignItems: 'flex-start',
  },
  messageBubble: {
    maxWidth: '80%',
    padding: spacing.md,
    borderRadius: borderRadius.lg,
  },
  userBubble: {
    backgroundColor: colors.primary,
    borderBottomRightRadius: spacing.xs,
  },
  aiBubble: {
    backgroundColor: colors.backgroundSecondary,
    borderBottomLeftRadius: spacing.xs,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  messageText: {
    ...typography.body,
  },
  userText: {
    color: colors.textWhite,
  },
  aiText: {
    color: colors.textPrimary,
  },
  timestamp: {
    ...typography.caption,
    marginTop: spacing.xs,
    fontSize: 12,
  },
  userTimestamp: {
    color: colors.textWhite,
    opacity: 0.7,
  },
  aiTimestamp: {
    color: colors.textSecondary,
  },
});