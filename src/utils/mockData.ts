import { ExpenseCategory, Transaction, WeeklyActivity } from '../types';
import { colors } from '../theme';

export const mockExpenseCategories: ExpenseCategory[] = [
  {
    id: '1',
    name: 'Groceries',
    amount: 120,
    color: colors.primary,
    progress: 0.7, // 70% of budget used
  },
  {
    id: '2',
    name: 'Electronics',
    amount: 450,
    color: colors.primary,
    progress: 0.9, // 90% of budget used
  },
  {
    id: '3',
    name: 'Pets',
    amount: 70,
    color: colors.chartBar,
    progress: 0.3, // 30% of budget used
  },
];

export const mockWeeklyActivity: WeeklyActivity[] = [
  { day: 'S', amount: 120, isActive: false },
  { day: 'M', amount: 150, isActive: false },
  { day: 'T', amount: 90, isActive: false },
  { day: 'W', amount: 200, isActive: false },
  { day: 'T', amount: 350, isActive: true }, // Thursday is active/highlighted
  { day: 'F', amount: 180, isActive: false },
  { day: 'S', amount: 220, isActive: false },
];

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    title: 'Leslie Alexander',
    subtitle: 'Payment',
    amount: 700.00,
    icon: '👤',
    isPositive: true,
  },
  {
    id: '2',
    title: 'Streaming service',
    subtitle: 'Entertainment',
    amount: 12.00,
    icon: '▶️',
    isPositive: false,
  },
  {
    id: '3',
    title: 'Walmart',
    subtitle: 'Groceries',
    amount: 50.00,
    icon: '✱',
    isPositive: false,
  },
];

export const mockBalance = 12500;