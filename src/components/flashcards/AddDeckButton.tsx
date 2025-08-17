import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface AddDeckButtonProps {
  onPress?: () => void;
}

const AddDeckButton: React.FC<AddDeckButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.icon}>+</Text>
      <Text style={styles.text}>Add deck</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 30,
    paddingHorizontal: 24,
    paddingVertical: 14,
    marginHorizontal: 20,
    marginTop: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  icon: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '300',
    marginRight: 10,
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'center',
    lineHeight: 22,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '400',
  },
});

export default AddDeckButton;