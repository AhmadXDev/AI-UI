import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { CategoryItem } from '../common/CategoryItem';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';
import { spacing } from '../../styles/spacing';

const categories = [
  'Development',
  'Finance & Accounting',
  'IT & Software',
  'Design',
  'Marketing',
  'Lifestyle',
  'Photography & Video',
  'Health & Fitness',
  'Music',
];

interface BrowseCategoriesProps {
  onCategoryPress?: (category: string) => void;
}

export const BrowseCategories: React.FC<BrowseCategoriesProps> = ({
  onCategoryPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Browse categories</Text>
      <View style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            title={category}
            onPress={() => onCategoryPress?.(category)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing.lg,
  },
  title: {
    color: colors.primary,
    fontSize: typography.sizes.xlarge,
    fontWeight: typography.weights.semibold,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.md,
  },
  categoriesContainer: {
    // No padding here as CategoryItem handles its own padding
  },
});