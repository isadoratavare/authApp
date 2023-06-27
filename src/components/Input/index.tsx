import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

type InputProps = {
  title?: string;
  placeholder?: string;
  hideText?: boolean;
};

function Input({title, placeholder, hideText = true}: InputProps): JSX.Element {
  const [text, setText] = React.useState<string>('');
  const [showText, setShowText] = React.useState<boolean>(hideText);
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={text}
          style={styles.input}
          placeholder={placeholder}
          onChangeText={text => setText(text)}
          secureTextEntry={showText}
        />
        {!hideText && (
          <View>
            <Text onPress={() => setShowText(!showText)}>
              {showText ? 'Show' : 'Hide'}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: '600',
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    borderColor: '#D3D3D3',
    borderWidth: 2,
  },
});

export default Input;
