import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../theme';
import { ExpenseCategory } from '../types';

interface ExpenseCategoryItemProps {
  category: ExpenseCategory;
}

export const ExpenseCategoryItem: React.FC<ExpenseCategoryItemProps> = ({
  category,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.amount}>${category.amount}</Text>
        <Text style={styles.name}>{category.name}</Text>
      </View>
      <View style={styles.progressContainer}>
        <View
          style={[
            styles.progressBar,
            {
              backgroundColor: category.color,
              width: `${category.progress * 100}%`,
            },
          ]}
        />
        <View style={[styles.progressBackground, { width: `${(1 - category.progress) * 100}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: spacing.xs,
  },
  header: {
    marginBottom: spacing.sm,
  },
  amount: {
    fontSize: typography.title3,
    fontWeight: typography.weights.semibold,
    color: colors.text,
    marginBottom: spacing.xs / 2,
  },
  name: {
    fontSize: typography.footnote,
    color: colors.textSecondary,
  },
  progressContainer: {
    flexDirection: 'row',
    height: 4,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 2,
  },
  progressBackground: {
    height: '100%',
    backgroundColor: colors.chartBar,
    borderRadius: 2,
  },
});