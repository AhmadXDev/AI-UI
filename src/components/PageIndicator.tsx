import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme';

interface PageIndicatorProps {
  totalPages: number;
  currentPage: number;
}

export const PageIndicator: React.FC<PageIndicatorProps> = ({
  totalPages,
  currentPage,
}) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalPages }, (_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            {
              backgroundColor: index === currentPage ? colors.primary : colors.inactive,
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: spacing.md,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: spacing.xs / 2,
  },
});