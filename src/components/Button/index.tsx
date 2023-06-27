import React from 'react';
import {ButtonProps, StyleSheet, Text, TouchableOpacity} from 'react-native';

function Button({onPress, title}: ButtonProps): JSX.Element {
  return (
    <TouchableOpacity style={styles.main} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FD6B68',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default Button;
