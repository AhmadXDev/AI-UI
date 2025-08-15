import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { AppHeader, Avatar, Button, BottomNavigation } from '../../components';
import { colors, typography, layout, spacing } from '../../styles';

const AVATAR_DATA = [
  { id: '1', initials: 'JD', backgroundColor: '#FF6B35' },
  { id: '2', initials: 'AS', backgroundColor: '#8E44AD' },
  { id: '3', initials: 'MK', backgroundColor: '#E91E63' },
  { id: '4', initials: 'TR', backgroundColor: '#795548' },
  { id: '5', initials: 'SM', backgroundColor: '#FF9800' },
];

const TAB_DATA = [
  { id: 'journal', label: 'Journal', icon: '○' },
  { id: 'progress', label: 'Progress', icon: '◑' },
  { id: 'friends', label: 'Friends', icon: '👥' },
  { id: 'upgrade', label: 'Upgrade', icon: '✦', hasNotification: true },
  { id: 'settings', label: 'Settings', icon: '⚙' },
];

export const CircleScreen: React.FC = () => {
  const handleAddPress = () => {
    // Handle add button press
    console.log('Add button pressed');
  };

  const handleCreateCircle = () => {
    // Handle create circle button press
    console.log('Create circle button pressed');
  };

  const handleTabPress = (tabId: string) => {
    // Handle tab press
    console.log('Tab pressed:', tabId);
  };

  return (
    <View style={styles.container}>
      <AppHeader 
        title="Your Circle" 
        onAddPress={handleAddPress}
      />
      
      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Avatar Row */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarRow}>
            {AVATAR_DATA.map((avatar) => (
              <Avatar
                key={avatar.id}
                initials={avatar.initials}
                backgroundColor={avatar.backgroundColor}
                size={layout.avatarSize}
              />
            ))}
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          <Text style={styles.mainTitle}>
            Achieve Your Goals, Together
          </Text>
          
          <Text style={styles.description}>
            Circles are small, private groups where you can share progress with friends. Celebrate wins, offer support, and stay accountable on your journey to building better habits.
          </Text>
          
          <Button
            title="Create new Circle"
            onPress={handleCreateCircle}
            variant="primary"
          />
        </View>
      </ScrollView>

      <BottomNavigation
        tabs={TAB_DATA}
        activeTab="friends"
        onTabPress={handleTabPress}
      />
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
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: layout.screenPadding,
  },
  avatarSection: {
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.md,
  },
  avatarRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  mainTitle: {
    fontSize: typography.xlarge,
    fontWeight: typography.weights.bold,
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: spacing.lg,
    lineHeight: typography.xlarge * 1.1,
  },
  description: {
    fontSize: typography.regular,
    fontWeight: typography.weights.regular,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: typography.regular * 1.5,
    marginBottom: spacing.xxl,
    maxWidth: 300,
  },
});