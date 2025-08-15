import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../../styles/colors';
import { typography, spacing } from '../../styles/theme';

export interface HeaderProps {
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightElement?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  showBackButton = false,
  onBackPress,
  rightElement,
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <View style={styles.container}>
        <View style={styles.leftSection}>
          {showBackButton && (
            <TouchableOpacity
              style={styles.backButton}
              onPress={onBackPress}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
              <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>
          )}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          </View>
        </View>
        {rightElement && <View style={styles.rightSection}>{rightElement}</View>}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
    backgroundColor: colors.background,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  backButton: {
    marginRight: spacing.md,
    padding: spacing.xs,
  },
  backIcon: {
    fontSize: 24,
    color: colors.primary,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    ...typography.h3,
  },
  subtitle: {
    ...typography.caption,
    marginTop: 2,
  },
  rightSection: {
    marginLeft: spacing.md,
  },
});