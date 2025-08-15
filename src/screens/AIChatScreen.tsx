import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Header, ChatMessage, ChatInput } from '../components/common';
import { colors } from '../styles/colors';
import { typography, spacing } from '../styles/theme';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

export const AIChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your AI assistant. How can I help you today?',
      isUser: false,
      timestamp: '10:30 AM',
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, newMessage]);
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Thank you for your message! This is a UI demo, so I can\'t actually process your request, but the interface is ready for integration with your AI backend.',
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const quickActions = [
    'Explain a concept',
    'Write code',
    'Summarize text',
    'Generate ideas',
  ];

  const renderMessage = ({ item }: { item: Message }) => (
    <ChatMessage
      message={item.text}
      isUser={item.isUser}
      timestamp={item.timestamp}
    />
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Text style={styles.welcomeTitle}>Welcome to AI Chat</Text>
      <Text style={styles.welcomeSubtitle}>
        Start a conversation or try one of these quick actions:
      </Text>
      <View style={styles.quickActions}>
        {quickActions.map((action, index) => (
          <TouchableOpacity
            key={index}
            style={styles.quickActionButton}
            onPress={() => handleSendMessage(action)}>
            <Text style={styles.quickActionText}>{action}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="AI Assistant"
        subtitle="Ready to help"
        rightElement={
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuIcon}>⋯</Text>
          </TouchableOpacity>
        }
      />
      
      <View style={styles.chatContainer}>
        {messages.length <= 1 ? (
          renderEmptyState()
        ) : (
          <FlatList
            data={messages}
            renderItem={renderMessage}
            keyExtractor={item => item.id}
            style={styles.messagesList}
            contentContainerStyle={styles.messagesContent}
            showsVerticalScrollIndicator={false}
          />
        )}
        
        {isTyping && (
          <View style={styles.typingIndicator}>
            <Text style={styles.typingText}>AI is typing...</Text>
          </View>
        )}
      </View>
      
      <ChatInput
        onSend={handleSendMessage}
        placeholder="Ask me anything..."
        disabled={isTyping}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  chatContainer: {
    flex: 1,
  },
  messagesList: {
    flex: 1,
  },
  messagesContent: {
    paddingVertical: spacing.md,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },
  welcomeTitle: {
    ...typography.h2,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  welcomeSubtitle: {
    ...typography.bodySecondary,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  quickActions: {
    width: '100%',
  },
  quickActionButton: {
    backgroundColor: colors.backgroundSecondary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  quickActionText: {
    ...typography.body,
    textAlign: 'center',
    color: colors.primary,
  },
  typingIndicator: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  typingText: {
    ...typography.caption,
    fontStyle: 'italic',
  },
  menuButton: {
    padding: spacing.xs,
  },
  menuIcon: {
    fontSize: 20,
    color: colors.textSecondary,
  },
});