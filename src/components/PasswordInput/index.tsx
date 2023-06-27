import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={setPassword}
        placeholder="Digite sua senha"
      />
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={togglePasswordVisibility}>
        <Text>Mostrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  iconContainer: {
    padding: 5,
  },
});

export default PasswordInput;
