import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Container({children, height}: any) {
  return (
    <View style={styles.main}>
      <View style={styles.appName}>
        <Text style={styles.appNameText}>AuthApp</Text>
      </View>
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
  appName: {
    position: 'absolute',
    top: 80,
  },
  appNameText: {
    fontSize: 30,
    fontWeight: '900',
    color: 'white',
  },
});

export default Container;
