/**
 * AI-UI: React Native Framework for AI-Generated User Interfaces
 * This app demonstrates creating and testing various user interfaces
 * using the React Native framework with GitHub Copilot assistance.
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  useColorScheme,
} from 'react-native';
import {ComponentDemo} from './src/screens/ComponentDemo';

// Sample AI-generated UI components
const WelcomeCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Welcome to AI-UI</Text>
      <Text style={styles.cardDescription}>
        This React Native app demonstrates AI-generated user interfaces.
        Components are designed using AI image tools and implemented with GitHub Copilot.
      </Text>
    </View>
  );
};

const InteractiveButton = ({title, onPress}: {title: string; onPress: () => void}) => {
  const [pressed, setPressed] = useState(false);
  
  return (
    <TouchableOpacity
      style={[styles.button, pressed && styles.buttonPressed]}
      onPress={() => {
        setPressed(true);
        setTimeout(() => setPressed(false), 150);
        onPress();
      }}
      activeOpacity={0.7}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const InputDemo = () => {
  const [text, setText] = useState('');
  
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>Sample Text Input</Text>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={setText}
        placeholder="Enter text here..."
        placeholderTextColor="#888"
      />
      <Text style={styles.inputPreview}>Preview: {text || 'No text entered'}</Text>
    </View>
  );
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [currentScreen, setCurrentScreen] = useState<'home' | 'demo'>('home');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1a1a1a' : '#f5f5f5',
  };

  const showAlert = (message: string) => {
    Alert.alert('AI-UI Demo', message, [
      {text: 'OK', style: 'default'},
    ]);
  };

  if (currentScreen === 'demo') {
    return (
      <SafeAreaView style={[backgroundStyle, styles.container]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setCurrentScreen('home')}>
            <Text style={styles.backButtonText}>← Back to Home</Text>
          </TouchableOpacity>
          <Text style={[styles.title, {color: isDarkMode ? '#fff' : '#000'}]}>
            Component Gallery
          </Text>
        </View>
        
        <ComponentDemo />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.header}>
          <Text style={[styles.title, {color: isDarkMode ? '#fff' : '#000'}]}>
            AI-UI Framework
          </Text>
          <Text style={[styles.subtitle, {color: isDarkMode ? '#ccc' : '#666'}]}>
            React Native with AI-Generated Components
          </Text>
        </View>

        <WelcomeCard />

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, {color: isDarkMode ? '#fff' : '#000'}]}>
            Framework Features
          </Text>
          
          <InteractiveButton
            title="Component Gallery"
            onPress={() => setCurrentScreen('demo')}
          />
          
          <InteractiveButton
            title="Show Welcome Message"
            onPress={() => showAlert('Welcome to the AI-UI React Native Framework!')}
          />
          
          <InteractiveButton
            title="Framework Info"
            onPress={() => showAlert('Built with React Native v0.80.2, TypeScript, and AI assistance from GitHub Copilot')}
          />
          
          <InteractiveButton
            title="Android Ready"
            onPress={() => showAlert('This app is configured to run on Android Studio emulators and physical devices!')}
          />
        </View>

        <InputDemo />

        <View style={styles.footer}>
          <Text style={[styles.footerText, {color: isDarkMode ? '#888' : '#666'}]}>
            🤖 Components designed with AI
          </Text>
          <Text style={[styles.footerText, {color: isDarkMode ? '#888' : '#666'}]}>
            ⚛️ Built with React Native
          </Text>
          <Text style={[styles.footerText, {color: isDarkMode ? '#888' : '#666'}]}>
            🚀 Ready for Android Studio Emulator
          </Text>
          <Text style={[styles.footerText, {color: isDarkMode ? '#888' : '#666'}]}>
            📱 Cross-platform compatible
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 25,
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#4A90E2',
    borderRadius: 12,
    padding: 20,
    marginBottom: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: '#fff',
    lineHeight: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  buttonPressed: {
    backgroundColor: '#0056CC',
    transform: [{scale: 0.98}],
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 25,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
  },
  inputPreview: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  footer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  footerText: {
    fontSize: 14,
    marginBottom: 5,
  },
});

export default App;
