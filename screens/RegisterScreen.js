import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';

export default function RegisterScreen({ navigation }) {
    return (
        <ImageBackground blurRadius={5}
         style={{flex: 1}}
         source={require("../assets/2.jpg")}>
             <View style={styles.container}>
                   <TextInput maxLength= {30} style={styles.Details} placeholder= '   Full Name'/>
                   <TextInput maxLength= {10} style={styles.Details} placeholder= '   Username'/>
                   <TextInput maxLength={20} style={styles.Details} placeholder= '    E-mail (name@example.com)'/>
                   <TextInput maxLength= {20} style={styles.Details} placeholder= '   Password'/>
                   <TouchableOpacity 
                onPress={() => navigation.navigate('LoginScreen')}
                style={styles.registerButton1}>
                    <Text style={{color: 'deepskyblue', fontSize: 25, padding: 10,}}>Register</Text>
                </TouchableOpacity>
             </View>
        </ImageBackground>
    );

    

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 400
    },

    Details: {
        width: 250,
        marginTop: 20,
        height: 40,
        borderRadius: 10,
        borderWidth: 0.5,
        backgroundColor: 'white',
    },

    registerButton: {
        alignItems: 'center',
        width: '100%',
        top: 700,
        borderColor: 'grey',
        borderRadius: 20,
    }
    
})
