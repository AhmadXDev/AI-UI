import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';
import { spacing } from '../../styles/spacing';

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search',
  value,
  onChangeText,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.searchIcon}>
        <View style={styles.iconContainer}>
          <View style={styles.searchCircle} />
          <View style={styles.searchHandle} />
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.secondary}
        value={value}
        onChangeText={onChangeText}
        editable={!onPress}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.searchBackground,
    borderRadius: 8,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginHorizontal: spacing.md,
  },
  searchIcon: {
    marginRight: spacing.sm,
  },
  iconContainer: {
    width: 20,
    height: 20,
    position: 'relative',
  },
  searchCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: colors.secondary,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  searchHandle: {
    width: 8,
    height: 2,
    backgroundColor: colors.secondary,
    position: 'absolute',
    bottom: 2,
    right: 0,
    transform: [{ rotate: '45deg' }],
    borderRadius: 1,
  },
  input: {
    flex: 1,
    fontSize: typography.sizes.large,
    color: colors.primary,
    fontWeight: typography.weights.regular,
  },
});