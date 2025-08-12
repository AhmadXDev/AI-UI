/**
 * AICard - A reusable card component for AI-generated UIs
 * Designed to showcase modular component architecture
 */

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface AICardProps {
  title: string;
  description: string;
  actionText?: string;
  onPress?: () => void;
  backgroundColor?: string;
}

export const AICard: React.FC<AICardProps> = ({
  title,
  description,
  actionText,
  onPress,
  backgroundColor = '#4A90E2',
}) => {
  return (
    <View style={[styles.card, {backgroundColor}]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      
      {actionText && onPress && (
        <TouchableOpacity style={styles.actionButton} onPress={onPress}>
          <Text style={styles.actionText}>{actionText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#fff',
    lineHeight: 20,
    marginBottom: 16,
  },
  actionButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
  },
  actionText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});