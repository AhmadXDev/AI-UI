import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, typography, layout, spacing } from '../../styles';

interface TabItem {
  id: string;
  label: string;
  icon: string;
  hasNotification?: boolean;
}

interface BottomNavigationProps {
  tabs: TabItem[];
  activeTab: string;
  onTabPress?: (tabId: string) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  tabs,
  activeTab,
  onTabPress,
}) => {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <TouchableOpacity
            key={tab.id}
            style={styles.tab}
            onPress={() => onTabPress?.(tab.id)}
            activeOpacity={0.7}
          >
            <View style={styles.iconContainer}>
              <Text 
                style={[
                  styles.tabIcon, 
                  isActive ? styles.activeIcon : styles.inactiveIcon
                ]}
              >
                {tab.icon}
              </Text>
              {tab.hasNotification && (
                <View style={styles.notificationBadge} />
              )}
            </View>
            <Text 
              style={[
                styles.tabLabel, 
                isActive ? styles.activeLabel : styles.inactiveLabel
              ]}
            >
              {tab.label}
            </Text>
            {isActive && <View style={styles.activeIndicator} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: layout.bottomNavHeight,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: spacing.sm,
    paddingBottom: spacing.md,
    paddingHorizontal: spacing.md,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  iconContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    fontSize: typography.large,
    marginBottom: spacing.xs,
  },
  tabLabel: {
    fontSize: typography.xsmall,
    fontWeight: typography.weights.medium,
  },
  activeIcon: {
    color: colors.iconActive,
  },
  inactiveIcon: {
    color: colors.iconInactive,
  },
  activeLabel: {
    color: colors.iconActive,
  },
  inactiveLabel: {
    color: colors.iconInactive,
  },
  activeIndicator: {
    position: 'absolute',
    top: -spacing.sm,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.iconActive,
  },
  notificationBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF3B30',
  },
});