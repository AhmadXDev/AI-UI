import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, spacing, typography } from '../theme';
import { Transaction } from '../types';

interface TransactionItemProps {
  transaction: Transaction;
  onPress?: () => void;
}

export const TransactionItem: React.FC<TransactionItemProps> = ({
  transaction,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
      accessibilityLabel={`${transaction.title} ${transaction.subtitle} ${
        transaction.isPositive ? 'received' : 'spent'
      } $${Math.abs(transaction.amount)}`}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{transaction.icon}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{transaction.title}</Text>
        <Text style={styles.subtitle}>{transaction.subtitle}</Text>
      </View>
      <Text
        style={[
          styles.amount,
          {
            color: transaction.isPositive ? colors.success : colors.text,
          },
        ]}
      >
        {transaction.isPositive ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    minHeight: spacing.minTouchTarget,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  icon: {
    fontSize: 20,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: typography.body,
    fontWeight: typography.weights.medium,
    color: colors.text,
    marginBottom: spacing.xs / 2,
  },
  subtitle: {
    fontSize: typography.footnote,
    color: colors.textSecondary,
  },
  amount: {
    fontSize: typography.body,
    fontWeight: typography.weights.semibold,
  },
});