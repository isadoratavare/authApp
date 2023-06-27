import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Button from './../../components/Button';
import {useNavigation} from '@react-navigation/native';
import Container from './../../components/Container';

function Home(): JSX.Element {
  const navigation = useNavigation() as any;
  return (
    <Container>
      <View>
        <Image
          source={require('../../assets/images/woman.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>
          Let's begin your journey with our app!
        </Text>
      </View>

      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>
          Join us for a unique User Experience and make the most of our app
        </Text>
      </View>

      <Button
        onPress={() => navigation.navigate('Login')}
        title="Get Stated!"
      />

      <View style={styles.subtitleContainer}>
        <Text style={[styles.subtitle, {color: 'gray', paddingBottom: 40}]}>
          Read the rules of the app.
        </Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  welcomeContainer: {width: '80%'},
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  subtitleContainer: {
    marginVertical: 10,
    width: '85%',
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    color: 'silver',
  },
  image: {
    width: 200,
    height: 200,
  },
});
export default Home;
