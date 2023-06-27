import React from 'react';
import {StyleSheet, View} from 'react-native';

function Container({children, height}: any) {
  console.log(height);
  return (
    <View style={styles.main}>
      <View style={[styles.formContainer, {height}]}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#D897FB',
  },
  formContainer: {
    backgroundColor: 'white',
    minHeight: '65%',
    width: '100%',
    borderTopEndRadius: 35,
    borderTopStartRadius: 35,
    padding: 20,

    alignItems: 'center',
  },
});

export default Container;
