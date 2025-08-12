/**
 * ComponentDemo - Showcases various AI-generated UI components
 * Demonstrates the modular component system of the AI-UI framework
 */

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
  useColorScheme,
} from 'react-native';
import {AICard, AIButton} from '../components';

export const ComponentDemo: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  
  const showDemo = (component: string) => {
    Alert.alert(
      'Component Demo',
      `This ${component} component was generated using AI assistance and demonstrates the modular architecture of the AI-UI framework.`,
      [{text: 'Cool!', style: 'default'}]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, {color: isDarkMode ? '#fff' : '#000'}]}>
          AI-Generated Cards
        </Text>
        
        <AICard
          title="Machine Learning Card"
          description="This card demonstrates a clean, modern design suitable for displaying ML model information and statistics."
          backgroundColor="#FF6B6B"
          actionText="Learn More"
          onPress={() => showDemo('ML Card')}
        />
        
        <AICard
          title="Data Visualization"
          description="Perfect for showing charts, graphs, and analytical data with a professional appearance."
          backgroundColor="#4ECDC4"
          actionText="View Charts"
          onPress={() => showDemo('Data Viz Card')}
        />
        
        <AICard
          title="User Profile"
          description="Ideal for user information, settings, and personalization features with smooth interactions."
          backgroundColor="#45B7D1"
          actionText="Edit Profile"
          onPress={() => showDemo('Profile Card')}
        />
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, {color: isDarkMode ? '#fff' : '#000'}]}>
          Interactive Buttons
        </Text>
        
        <AIButton
          title="Primary Action"
          variant="primary"
          size="large"
          onPress={() => showDemo('Primary Button')}
        />
        
        <AIButton
          title="Success State"
          variant="success"
          size="medium"
          onPress={() => showDemo('Success Button')}
        />
        
        <AIButton
          title="Warning Alert"
          variant="warning"
          size="medium"
          onPress={() => showDemo('Warning Button')}
        />
        
        <AIButton
          title="Secondary Option"
          variant="secondary"
          size="small"
          onPress={() => showDemo('Secondary Button')}
        />
        
        <AIButton
          title="Disabled State"
          variant="primary"
          disabled={true}
          onPress={() => {}}
        />
      </View>

      <View style={styles.footer}>
        <Text style={[styles.footerText, {color: isDarkMode ? '#888' : '#666'}]}>
          ✨ All components designed with AI assistance
        </Text>
        <Text style={[styles.footerText, {color: isDarkMode ? '#888' : '#666'}]}>
          🎨 Customizable and reusable
        </Text>
        <Text style={[styles.footerText, {color: isDarkMode ? '#888' : '#666'}]}>
          📱 Optimized for mobile experiences
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  footerText: {
    fontSize: 14,
    marginBottom: 5,
    textAlign: 'center',
  },
});