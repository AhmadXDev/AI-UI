import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';
import { spacing } from '../../styles/spacing';

interface PillButtonProps {
  title: string;
  onPress?: () => void;
}

export const PillButton: React.FC<PillButtonProps> = ({
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.pillBackground,
    borderWidth: 1,
    borderColor: colors.pillBorder,
    borderRadius: 20,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginRight: spacing.sm,
    marginBottom: spacing.sm,
  },
  text: {
    color: colors.primary,
    fontSize: typography.sizes.medium,
    fontWeight: typography.weights.regular,
  },
});