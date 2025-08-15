import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';
import { spacing } from '../../styles/spacing';

interface TabItem {
  title: string;
  isActive?: boolean;
}

const tabItems: TabItem[] = [
  { title: 'Featured' },
  { title: 'Search', isActive: true },
  { title: 'My learning' },
  { title: 'Wishlist' },
  { title: 'Account' },
];

interface BottomNavigationProps {
  onTabPress?: (tabTitle: string) => void;
}

// Simple icon components
const StarIcon: React.FC<{ isActive?: boolean }> = ({ isActive }) => (
  <View style={[styles.iconContainer, isActive ? styles.activeIcon : styles.inactiveIcon]}>
    <View style={[styles.starLine, { transform: [{ rotate: '0deg' }] }]} />
    <View style={[styles.starLine, { transform: [{ rotate: '45deg' }] }]} />
    <View style={[styles.starLine, { transform: [{ rotate: '90deg' }] }]} />
    <View style={[styles.starLine, { transform: [{ rotate: '135deg' }] }]} />
  </View>
);

const SearchIcon: React.FC<{ isActive?: boolean }> = ({ isActive }) => (
  <View style={[styles.iconContainer, isActive ? styles.activeIcon : styles.inactiveIcon]}>
    <View style={styles.searchCircleNav} />
    <View style={styles.searchHandleNav} />
  </View>
);

const PlayIcon: React.FC<{ isActive?: boolean }> = ({ isActive }) => (
  <View style={[styles.iconContainer, isActive ? styles.activeIcon : styles.inactiveIcon]}>
    <View style={styles.playTriangle} />
  </View>
);

const HeartIcon: React.FC<{ isActive?: boolean }> = ({ isActive }) => (
  <View style={[styles.iconContainer, isActive ? styles.activeIcon : styles.inactiveIcon]}>
    <View style={styles.heartLeft} />
    <View style={styles.heartRight} />
    <View style={styles.heartBottom} />
  </View>
);

const PersonIcon: React.FC<{ isActive?: boolean }> = ({ isActive }) => (
  <View style={[styles.iconContainer, isActive ? styles.activeIcon : styles.inactiveIcon]}>
    <View style={styles.personHead} />
    <View style={styles.personBody} />
  </View>
);

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  onTabPress,
}) => {
  const getIcon = (title: string, isActive?: boolean) => {
    switch (title) {
      case 'Featured':
        return <StarIcon isActive={isActive} />;
      case 'Search':
        return <SearchIcon isActive={isActive} />;
      case 'My learning':
        return <PlayIcon isActive={isActive} />;
      case 'Wishlist':
        return <HeartIcon isActive={isActive} />;
      case 'Account':
        return <PersonIcon isActive={isActive} />;
      default:
        return <View style={styles.iconContainer} />;
    }
  };

  return (
    <View style={styles.container}>
      {tabItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.tabItem}
          onPress={() => onTabPress?.(item.title)}
          activeOpacity={0.7}
        >
          {getIcon(item.title, item.isActive)}
          <Text
            style={[
              styles.tabText,
              { color: item.isActive ? colors.primary : colors.secondary },
            ]}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.background,
    paddingTop: spacing.sm,
    paddingBottom: spacing.lg,
    borderTopWidth: 0.5,
    borderTopColor: colors.border,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xs,
    position: 'relative',
  },
  tabText: {
    fontSize: typography.sizes.small,
    fontWeight: typography.weights.regular,
  },
  activeIcon: {
    opacity: 1,
  },
  inactiveIcon: {
    opacity: 0.5,
  },
  // Star icon styles
  starLine: {
    width: 12,
    height: 2,
    backgroundColor: colors.secondary,
    position: 'absolute',
    borderRadius: 1,
  },
  // Search icon styles
  searchCircleNav: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.secondary,
    position: 'absolute',
    top: 2,
    left: 2,
  },
  searchHandleNav: {
    width: 6,
    height: 2,
    backgroundColor: colors.secondary,
    position: 'absolute',
    bottom: 2,
    right: 2,
    transform: [{ rotate: '45deg' }],
    borderRadius: 1,
  },
  // Play icon styles
  playTriangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 12,
    borderRightWidth: 0,
    borderTopWidth: 8,
    borderBottomWidth: 8,
    borderLeftColor: colors.secondary,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  // Heart icon styles
  heartLeft: {
    width: 8,
    height: 12,
    backgroundColor: colors.secondary,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    position: 'absolute',
    top: 2,
    left: 4,
    transform: [{ rotate: '-45deg' }],
  },
  heartRight: {
    width: 8,
    height: 12,
    backgroundColor: colors.secondary,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    position: 'absolute',
    top: 2,
    right: 4,
    transform: [{ rotate: '45deg' }],
  },
  heartBottom: {
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: colors.secondary,
    position: 'absolute',
    bottom: 2,
    left: 4,
  },
  // Person icon styles
  personHead: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.secondary,
    position: 'absolute',
    top: 2,
    left: 8,
  },
  personBody: {
    width: 12,
    height: 8,
    backgroundColor: colors.secondary,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    position: 'absolute',
    bottom: 2,
    left: 6,
  },
});