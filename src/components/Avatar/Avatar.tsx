import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, layout } from '../../styles';

interface AvatarProps {
  initials?: string;
  backgroundColor?: string;
  size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({
  initials = '?',
  backgroundColor = colors.surface,
  size = layout.avatarSize,
}) => {
  return (
    <View 
      style={[
        styles.container, 
        { 
          width: size, 
          height: size, 
          borderRadius: size / 2,
          backgroundColor 
        }
      ]}
    >
      <Text style={[styles.initials, { fontSize: size * 0.3 }]}>
        {initials}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  initials: {
    color: colors.textPrimary,
    fontWeight: '600',
  },
});