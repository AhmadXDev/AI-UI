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
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    padding: 24,
    marginHorizontal: 20,
    marginVertical: 10,
    minHeight: 120,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  progressContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: '#F97316', // Orange color
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  progressText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default FlashCard;