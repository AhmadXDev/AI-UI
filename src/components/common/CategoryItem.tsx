import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';
import { spacing } from '../../styles/spacing';

interface CategoryItemProps {
  title: string;
  onPress?: () => void;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.text}>{title}</Text>
      <View style={styles.arrow}>
        <View style={styles.arrowLine1} />
        <View style={styles.arrowLine2} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.lg,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border,
  },
  text: {
    color: colors.primary,
    fontSize: typography.sizes.large,
    fontWeight: typography.weights.regular,
  },
  arrow: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  arrowLine1: {
    width: 8,
    height: 2,
    backgroundColor: colors.secondary,
    position: 'absolute',
    transform: [{ rotate: '45deg' }],
    top: 7,
    right: 6,
    borderRadius: 1,
  },
  arrowLine2: {
    width: 8,
    height: 2,
    backgroundColor: colors.secondary,
    position: 'absolute',
    transform: [{ rotate: '-45deg' }],
    bottom: 7,
    right: 6,
    borderRadius: 1,
  },
});