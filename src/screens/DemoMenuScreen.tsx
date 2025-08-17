import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '../theme';

interface DemoMenuScreenProps {
  onNavigateToDashboard: () => void;
}

export const DemoMenuScreen: React.FC<DemoMenuScreenProps> = ({
  onNavigateToDashboard,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Financial Dashboard Demo</Text>
        <Text style={styles.subtitle}>
          This app recreates a financial dashboard UI from a screenshot
        </Text>
        
        <TouchableOpacity
          style={styles.button}
          onPress={onNavigateToDashboard}
          accessibilityLabel="Navigate to Dashboard"
        >
          <Text style={styles.buttonText}>View Dashboard</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    padding: spacing.xl,
  },
  title: {
    fontSize: typography.largeTitle,
    fontWeight: typography.weights.bold,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  subtitle: {
    fontSize: typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.xxl,
    lineHeight: typography.body * typography.lineHeights.relaxed,
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: 12,
    minHeight: spacing.minTouchTarget,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: typography.body,
    fontWeight: typography.weights.semibold,
    color: colors.cardBackground,
    textAlign: 'center',
  },
});