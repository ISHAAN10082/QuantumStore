import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <ThemedText style={styles.buttonText}>{title}</ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
