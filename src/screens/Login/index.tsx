import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Container from '../../components/Container';

export default function Login() {
  const navigation = useNavigation();
  return (
    <Container height={700}>
      <View style={styles.welcomeContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/icons/back-100.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.welcomeText}>Welcome Back!</Text>
          <View style={styles.signUpTitles}>
            <Text style={styles.toSignUp}>Don't have an account?</Text>
            <TouchableOpacity
              style={styles.signUpButton}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View>
            <View style={styles.inputContainer}>
              <Input title="Email address" placeholder="example@email.com" />
            </View>
            <View style={styles.inputContainer}>
              <Input title="Password" placeholder="*******" hideText />
            </View>
          </View>
          <View style={styles.forgotPassword}>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Button title="Entrar" />

        <View>
          <Text style={styles.toSignUp}>Or connect using</Text>
          <View style={styles.socialMedia}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/facebook.png')}
                style={styles.socialMediaIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/google.png')}
                style={styles.socialMediaIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
}
const styles = StyleSheet.create({
  welcomeContainer: {
    width: '100%',
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'space-evenly',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
  },
  signUpTitles: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 10,
  },
  toSignUp: {
    textAlign: 'center',
  },
  signUpButton: {
    borderColor: '#FF6978',
    marginLeft: 5,
  },
  signUpText: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#FF6978',
    textAlignVertical: 'bottom',
  },
  backIcon: {
    width: 35,
    height: 35,
  },
  inputContainer: {
    marginTop: 15,
  },
  forgotPassword: {
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    fontWeight: '600',
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  socialMediaIcon: {
    width: 50,
    height: 50,
  },
});
