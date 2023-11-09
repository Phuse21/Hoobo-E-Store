import { NavigationContainer } from '@react-navigation/native';
import React, { Component, useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { ImageBackground, Alert, Text, StyleSheet, TextInput, View, Image, Modal, TouchableOpacity } from 'react-native';
import { MaterialIcons} from '@expo/vector-icons'

export default function WelcomeScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false)
    var password;
    var email;
    
    return (
        <ImageBackground
            
         style={styles.background}
         source={require("../assets/Bg.png")}>
            <View style={styles.background}>
                 <Text style={{fontWeight: 'bold', fontSize: 30, color: 'grey', top: 50}}>W E L C O M E</Text>
                 <Text style={{fontWeight: 'normal', fontSize: 20, color: 'grey', fontStyle: 'italic', top: 550}}>sneaker culture</Text>
                <TouchableOpacity 
                onPress={() => setModalVisible(true)}
                style={styles.loginButton}>
                    <Text style={{color: 'white', fontSize: 25, padding: 10,}}>Login</Text>
                </TouchableOpacity>
                
                <Modal
                animationType={"slide"}
                transparent={true}
                visible={modalVisible}
                 >
                     <View style={{flex: 1,}}>
                         <View style= {{backgroundColor: "palegreen", margin:50, padding: 40, borderRadius: 20, flex: 1}}>
                         <View style={styles.modalClose}>
                            <MaterialIcons
                            name= 'close'
                            size= {24}
                            onPress = {()=> setModalVisible(false)}
                                />
                         </View>

                    <Text style={{ fontSize: 20, color: 'grey', marginLeft: 40}}>Log into your account</Text>
                    <Image style={styles.loginImage}
                    source={{uri: "https://cdn-icons-png.flaticon.com/128/149/149071.png"}}
                    />
                  <TextInput
                  onChangeText={(value) => {email = value;}} 
                  maxLength={20} 
                  style={styles.Logs} 
                  placeholder= '     E-mail or Username'
                  />
                   <TextInput
                   onChangeText={(value) => {password = value;}}
                   maxLength= {20} 
                   style={styles.Logs} 
                   placeholder= '   Password'
                   />
                   <TouchableOpacity 
                    style={styles.loginButton1}
                onPress={(pass, mail) =>
                    {
                        mail = email;
                        pass = password;
                        if (mail=="K" && pass=="K") 
                        {navigation.navigate('HomeScreen');
                        setModalVisible(false);
                    }
                else {
                    Alert.alert(" Wrong E-mail or Password !! Try Again")
                }
            }
                }>
                    <Text style={{color: 'grey', fontSize: 25, padding: 10,}}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => {setModalVisible(false); navigation.navigate('RegisterScreen')}} 
                style={styles.registerButton}>
                    <Text style={{color: 'grey', fontSize: 15, fontStyle: 'italic', padding: 10,}}>Don't have an account? Register</Text>
                </TouchableOpacity>
                         </View>
                     </View>
                </Modal>
            </View>
         </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
    },

    modalClose: {
        padding: 10,
        marginLeft: 100,
        marginBottom: 40,
        flex: 0.1,
        justifyContent: 'flex-start',
        alignSelf: 'flex-end',
        color: 'grey'
    },

    loginButton: {
        alignItems: 'center',
        width: '100%',
        top: 700,
        borderColor: 'grey',
        borderRadius: 20,
    },

    loginButton1: {
        alignItems: 'center',
        width: '100%',
        top: 20,
        borderColor: 'grey',
        borderRadius: 20,
    },

    loginImage: {
        borderRadius: 20,
        width: 100,
        height: 100,
        margin: 20,
        marginLeft: 70,
        alignSelf: 'baseline'

    },

    Logs: {
        width: 250,
        marginTop: 20,
        height: 40,
        borderRadius: 10,
        borderWidth: 0.5,
        backgroundColor: 'grey',
        fontSize: 15
    },

    registerButton: {
        alignItems: 'center',
        width: '100%',
        top: 300,
        borderColor: 'grey',
        borderRadius: 20

    }
    
});
