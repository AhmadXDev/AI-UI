import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import GradientBackground from '../components/common/GradientBackground';
import Header from '../components/common/Header';
import FlashCard from '../components/flashcards/FlashCard';
import AddDeckButton from '../components/flashcards/AddDeckButton';

const FlashCardsScreen: React.FC = () => {
  const handleSettingsPress = () => {
    // Settings functionality would go here
    console.log('Settings pressed');
  };

  const handleCardPress = () => {
    // Card functionality would go here
    console.log('Card pressed');
  };

  const handleAddDeckPress = () => {
    // Add deck functionality would go here
    console.log('Add deck pressed');
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <Header title="FLASH CARDS" onSettingsPress={handleSettingsPress} />
        <ScrollView 
          style={styles.content}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <FlashCard
            title="English - Spanish 1"
            progress={0}
            onPress={handleCardPress}
          />
          <AddDeckButton onPress={handleAddDeckPress} />
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 80,
    paddingTop: 20,
  },
});

export default FlashCardsScreen;