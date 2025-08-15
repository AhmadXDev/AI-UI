import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface HeaderProps {
  title: string;
  onSettingsPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onSettingsPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.settingsButton} onPress={onSettingsPress}>
        <Text style={styles.settingsIcon}>⚙️</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
    position: 'relative',
  },
  title: {
    fontSize: 30,
    fontWeight: '300',
    color: '#FFFFFF',
    letterSpacing: 4,
    textAlign: 'center',
    flex: 1,
  },
  settingsButton: {
    position: 'absolute',
    right: 20,
    top: 60,
    padding: 8,
  },
  settingsIcon: {
    fontSize: 24,
    color: '#FFFFFF',
  },
});

export default Header;