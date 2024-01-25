import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView, ImageBackground } from 'react-native';

import Btn from './Btn';
import { navyBlue } from './Constants';
import Field from './Field';
import { insertUser } from '../database';


export default function SignUp(props) {

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [firstNameError, setFirstNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const validateFirstName = () => {
        setFirstNameError(firstName.length > 0 ? '' : 'First name is required');
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailError(emailRegex.test(email) ? '' : 'Invalid email address');
    };

    const validatePassword = () => {
        setPasswordError(password.length >= 6 ? '' : 'Password must be at least 6 characters');
    };

    const validateConfirmPassword = () => {
        setConfirmPasswordError(
            confirmPassword === password ? '' : 'Passwords do not match'
        );
    };

    const handleSignUp = () => {
        if (password === confirmPassword) {
            insertUser(firstName, email, password);
            navigation.navigate('Login');
          } else {
            alert('Passwords do not match');
          }
    };



    return (
        <ImageBackground source={require("./assets/Final.jpg")} style={{ height: "100%" }}>
            <KeyboardAvoidingView>
                <ScrollView>
                    <View style={{ alignItems: 'center', width: 440 }}>
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 64,
                                fontWeight: 'bold',
                                marginTop: 50,
                                marginBottom: 30
                            }}>
                            Register
                        </Text>
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 19,
                                fontWeight: 'bold',
                                marginBottom: 20,
                            }}>
                            Create a new account
                        </Text>
                        <View
                            style={styles.signUpBg}>
                            <Field placeholder="Name"
                                onChangeText={(text) => setFirstName(text)}
                                onBlur={validateFirstName} />
                            <Text style={styles.errorText}>{firstNameError}</Text>

                            <Field
                                placeholder="Email / Username"
                                keyboardType={'email-address'}
                                onChangeText={(text) => setEmail(text)}
                                onBlur={validateEmail}
                            />
                            <Text style={styles.errorText}>{emailError}</Text>

                            <Field placeholder="Password"
                                secureTextEntry={true}
                                onChangeText={(text) => setPassword(text)}
                                onBlur={validatePassword}
                            />
                            <Text style={styles.errorText}>{passwordError}</Text>

                            <Field placeholder="Confirm Password"
                                secureTextEntry={true}
                                onChangeText={(text) => setConfirmPassword(text)}
                                onBlur={validateConfirmPassword}
                            />
                            <Text style={styles.errorText}>{confirmPasswordError}</Text>



                            <View style={{ marginTop: 50 }}>
                                <Btn
                                    textColor="white"
                                    bgColor={navyBlue}
                                    btnLabel="SignUp"
                                    onPress={handleSignUp}
                                />
                            </View>

                            <View
                                style={styles.sugnUpFooter}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                                    Already have an account ?{' '}
                                </Text>
                                <TouchableOpacity
                                    onPress={() => props.navigation.navigate('Login')}>
                                    <Text
                                        style={{ color: navyBlue, fontWeight: 'bold', fontSize: 16 }}>
                                        Login
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>



                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    signUpBg: {
        backgroundColor: 'white',
        height: 710,
        width: 460,
        borderTopLeftRadius: 130,
        borderTopRightRadius: 130,
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    sugnUpFooter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    }


})
