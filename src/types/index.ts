export interface ExpenseCategory {
  id: string;
  name: string;
  amount: number;
  color: string;
  progress: number; // 0-1
}

export interface Transaction {
  id: string;
  title: string;
  subtitle: string;
  amount: number;
  icon: string;
  isPositive: boolean;
}

export interface WeeklyActivity {
  day: string;
  amount: number;
  isActive?: boolean;
}