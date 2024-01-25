import { View, Text, StyleSheet, StatusBar} from 'react-native'
import React, { useEffect } from 'react'
import Backgruond from './Backgruond'
import Btn from './Btn'
import { blue, navyBlue } from './Constants'
import { db } from '../database'

export default function Home(props) {
    useEffect(()=>{
        db;
    },[]);

    return (
        <View>
            <StatusBar backgroundColor='#329ba8'></StatusBar>
            <Backgruond>
                <View style={{ marginHorizontal: 20, marginVertical: 180 }}>
                    <Text style={styles.textHeading}>Lets Get </Text>
                    <Text style={styles.textHeadingTwo}>Started...</Text>
                    <View style={{marginLeft: 40}}>
                    <Btn bgColor={navyBlue} textColor="white" btnLabel="Login" Press={()=>props.navigation.navigate("Login")}></Btn>
                    <Btn bgColor="white" textColor={navyBlue} btnLabel="SignUp" Press={()=>props.navigation.navigate("SignUp")}></Btn>
                    </View>
                    
                </View>
            </Backgruond>
        </View>
    )
}

const styles= StyleSheet.create({
    textHeading:{
        color: 'white', fontSize: 50, marginBottom: 10
    },

    textHeadingTwo:{
        color: 'white', fontSize: 50, marginBottom: 100 

    }

})

