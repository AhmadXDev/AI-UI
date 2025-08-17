import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Card,
  ExpenseCategoryItem,
  WeeklyChart,
  TransactionItem,
  PageIndicator,
} from '../components';
import { colors, spacing, typography } from '../theme';
import {
  mockExpenseCategories,
  mockWeeklyActivity,
  mockTransactions,
  mockBalance,
} from '../utils/mockData';

export const DashboardScreen: React.FC = () => {
  const handleTransactionPress = (transactionId: string) => {
    // Handle transaction press - placeholder for future navigation
    console.log('Transaction pressed:', transactionId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Balance Section */}
        <View style={styles.balanceSection}>
          <Text style={styles.balanceLabel}>Balance</Text>
          <Text style={styles.balanceAmount}>
            ${mockBalance.toLocaleString()}
          </Text>
        </View>

        {/* Expenses Section */}
        <Card style={styles.expensesCard}>
          <Text style={styles.sectionTitle}>Expenses</Text>
          <View style={styles.expensesContainer}>
            {mockExpenseCategories.map((category) => (
              <ExpenseCategoryItem key={category.id} category={category} />
            ))}
          </View>
          <PageIndicator totalPages={3} currentPage={0} />
        </Card>

        {/* Weekly Activity Section */}
        <Card style={styles.weeklyCard}>
          <Text style={styles.sectionTitle}>Weekly Activity</Text>
          <WeeklyChart data={mockWeeklyActivity} />
        </Card>

        {/* Recent Transactions Section */}
        <Card style={styles.transactionsCard}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <View style={styles.transactionsList}>
            {mockTransactions.map((transaction, index) => (
              <View key={transaction.id}>
                <TransactionItem
                  transaction={transaction}
                  onPress={() => handleTransactionPress(transaction.id)}
                />
                {index < mockTransactions.length - 1 && (
                  <View style={styles.transactionDivider} />
                )}
              </View>
            ))}
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.md,
    paddingBottom: spacing.xl,
  },
  balanceSection: {
    marginBottom: spacing.sectionSpacing,
    paddingHorizontal: spacing.sm,
  },
  balanceLabel: {
    fontSize: typography.title1,
    fontWeight: typography.weights.semibold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  balanceAmount: {
    fontSize: typography.largeTitle,
    fontWeight: typography.weights.bold,
    color: colors.text,
  },
  expensesCard: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: typography.title2,
    fontWeight: typography.weights.semibold,
    color: colors.text,
    marginBottom: spacing.md,
  },
  expensesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  weeklyCard: {
    marginBottom: spacing.lg,
  },
  transactionsCard: {
    marginBottom: spacing.lg,
  },
  transactionsList: {
    marginTop: spacing.sm,
  },
  transactionDivider: {
    height: 1,
    backgroundColor: colors.divider,
    marginLeft: 60, // Offset for icon
  },
});