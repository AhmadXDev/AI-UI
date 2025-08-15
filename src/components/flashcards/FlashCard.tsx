import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface FlashCardProps {
  title: string;
  progress: number;
  onPress?: () => void;
}

const FlashCard: React.FC<FlashCardProps> = ({ title, progress, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>{progress}%</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 24,
    padding: 32,
    marginHorizontal: 20,
    marginVertical: 15,
    minHeight: 140,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  progressContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#F97316', // Orange color
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  progressText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 15,
  },
});

export default FlashCard;