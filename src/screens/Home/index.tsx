import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Home(): JSX.Element {
  return (
    <View style={styles.main}>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Home;
