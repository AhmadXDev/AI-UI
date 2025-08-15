import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppHeader, Avatar, Button } from '../components';
import { colors, spacing } from '../styles';

// Example of how to reuse components in different screens
export const ExampleScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <AppHeader 
        title="Another Screen" 
        onAddPress={() => console.log('Add pressed')} 
      />
      
      <View style={styles.content}>
        {/* Reuse Avatar component with different props */}
        <Avatar initials="EX" backgroundColor="#FF5722" size={80} />
        
        {/* Reuse Button component with different variant */}
        <Button 
          title="Secondary Action" 
          variant="secondary" 
          onPress={() => console.log('Secondary button pressed')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.xl,
  },
});