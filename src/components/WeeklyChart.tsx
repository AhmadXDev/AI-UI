import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../theme';
import { WeeklyActivity } from '../types';

interface WeeklyChartProps {
  data: WeeklyActivity[];
}

export const WeeklyChart: React.FC<WeeklyChartProps> = ({ data }) => {
  const maxAmount = Math.max(...data.map(item => item.amount));
  
  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        {data.map((item, index) => {
          const height = (item.amount / maxAmount) * 60; // Max height 60
          return (
            <View key={index} style={styles.barContainer}>
              <View
                style={[
                  styles.bar,
                  {
                    height: height,
                    backgroundColor: item.isActive ? colors.primary : colors.chartBar,
                  },
                ]}
              />
            </View>
          );
        })}
      </View>
      <View style={styles.labelsContainer}>
        {data.map((item, index) => (
          <Text key={index} style={styles.label}>
            {item.day}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.md,
  },
  chartContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 80,
    marginBottom: spacing.sm,
  },
  barContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bar: {
    width: 20,
    borderRadius: 4,
    minHeight: 8,
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    flex: 1,
    textAlign: 'center',
    fontSize: typography.caption1,
    color: colors.textSecondary,
    fontWeight: typography.weights.medium,
  },
});