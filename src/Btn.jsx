import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Btn({ bgColor, btnLabel, textColor,Press  }) {
    return (
        <TouchableOpacity 
        onPress={Press}
        style={{
            backgroundColor: bgColor,
            borderRadius: 100, 
            alignItems: 'center',
            width: 300,
            paddingVertical: 10,
            marginVertical: 10,
            alignSelf: "center"
             
        }}>
            <Text style={{ color: textColor, fontSize: 24, fontWeight: 'bold' }}>{btnLabel}</Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})