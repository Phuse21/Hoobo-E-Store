import { NavigationContainer } from '@react-navigation/native';
import React, { Component, useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { ImageBackground, Text, StyleSheet, TextInput, View, Image, Modal, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialIcons} from '@expo/vector-icons'
function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={{flex: 1,
        paddingHorizontal:20,
        backgroundColor: 'white'}}>
            <View style={styles.header}>
                <View>
                    <Text style={{fontSize: 28, fontStyle: 'italic', fontWeight: 'bold', color: 'black'}}>Welcome to</Text>
                    <Text style={{fontSize: 35, fontWeight: 'bold', color: 'palegreen'}}>HOOBO E STORE</Text>
                </View>
                <MaterialIcons
                 name='shopping-cart'
                size={28}/>
            </View>
            <View style={{marginTop: 30, flexDirection: 'row'}}>
                <View style={styles.search}>
                    <MaterialIcons 
                    name="search"
                    size={25} style={{marginLeft: 20}}/>
                    <TextInput placeholder="search"/>
                </View>
            </View>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    header:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    search: {
        height: 50,
        backgroundColor: '#F1F1F1',
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row'
    }
})

export default HomeScreen;