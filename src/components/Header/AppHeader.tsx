import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, typography, layout } from '../../styles';

interface AppHeaderProps {
  title: string;
  onAddPress?: () => void;
  showAddButton?: boolean;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  onAddPress,
  showAddButton = true,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {showAddButton && (
        <TouchableOpacity 
          style={styles.addButton} 
          onPress={onAddPress}
          activeOpacity={0.8}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: layout.headerHeight,
    paddingHorizontal: layout.screenPadding,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: typography.large,
    fontWeight: typography.weights.semibold,
    color: colors.textPrimary,
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.buttonBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: typography.large,
    fontWeight: typography.weights.medium,
    color: colors.buttonText,
    lineHeight: typography.large,
  },
});