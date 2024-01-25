import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Backgruond from './Backgruond';
import {navyBlue} from './Constants';
import Field from './Field';
import Btn from './Btn';
//import { getUserByEmailAndPassword } from '../database'

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(email) ? '' : 'Invalid email address');
  };

  const validatePassword = () => {
    setPasswordError(
      password.length >= 6 ? '' : 'Password must be at least 6 characters',
    );
  };

  const handleLogin = () => {
    getUserByEmailAndPassword(email, password, user => {
      if (user.length > 0) {
        const {email} = user[0];
        navigation.navigate('Main', {email});
      } else {
        alert('Invalid email or password');
      }
    });
  };

  return (
    <Backgruond>
      <View style={{alignItems: 'center', width: 420}}>
        <Text style={styles.loginHeading}>Login</Text>
        <View style={styles.loginBackground}>
          <Text
            style={{
              fontSize: 40,
              color: navyBlue,
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>

          <Field
            placeholder="email"
            onChangeText={text => setEmail(text)}
            onBlur={validateEmail}
          />
          <Text style={styles.errorText}>{emailError}</Text>

          <Field
            placeholder="password"
            secureTextEntry
            onChangeText={text => setPassword(text)}
            onBlur={validatePassword}
          />
          <Text style={styles.errorText}>{passwordError}</Text>

          <View
            style={{
              alignItems: 'flex-end',
              width: '78%',
              paddingRight: 16,
              marginBottom: 150,
              marginTop: 10,

          </View>

          <Btn
            textColor="white"
            bgColor={navyBlue}
            btnLabel="Login"
            Press={handleLogin}
          />

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Don't have an account ?{' '}
            </Text>

            <TouchableOpacity
              onPress={() => props.navigation.navigate('SignUp')}>
              <Text style={{color: navyBlue, fontWeight: 'bold', fontSize: 16}}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Backgruond>
  );
}

const styles = StyleSheet.create({
  loginHeading: {
    color: 'white',
    fontSize: 64,
    fontWeight: 'bold',
    marginVertical: 30,
    marginBottom: 50,

  },
  loginBackground: {
    backgroundColor: 'white',
    height: 750,
    width: 460,
    borderTopLeftRadius: 160,
    borderTopRightRadius: 160,
    paddingTop: 120,
    alignItems: 'center',
  },
  inputData: {
    borderRadius: 100,
    color: navyBlue,
    paddingHorizontal: 10,
    width: '78%',
    backgroundColor: 'rgb(220,220, 220)',
    marginVertical: 10,
    placeholderTextColor: {navyBlue},
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
