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
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginHorizontal: 20,
    marginTop: 40,
  },
  icon: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '300',
    marginRight: 8,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '400',
  },
});

export default AddDeckButton;