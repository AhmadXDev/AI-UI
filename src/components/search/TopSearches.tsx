import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { PillButton } from '../common/PillButton';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';
import { spacing } from '../../styles/spacing';

const topSearchItems = [
  'python',
  'excel',
  'java',
  'sql',
  'power bi',
  'digital marketing',
  'javascript',
  'aws',
  'sap',
  'react',
  'c#',
  'photoshop',
];

interface TopSearchesProps {
  onSearchPress?: (searchTerm: string) => void;
}

export const TopSearches: React.FC<TopSearchesProps> = ({
  onSearchPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top searches</Text>
      <View style={styles.pillsContainer}>
        {topSearchItems.map((item, index) => (
          <PillButton
            key={index}
            title={item}
            onPress={() => onSearchPress?.(item)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.lg,
  },
  title: {
    color: colors.primary,
    fontSize: typography.sizes.xlarge,
    fontWeight: typography.weights.semibold,
    marginBottom: spacing.md,
  },
  pillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});