import { NavigationContainer } from '@react-navigation/native';
import React, { Component, useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { ImageBackground, Text, StyleSheet, Dimensions, TextInput, View, Image, Modal, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { MaterialIcons} from '@expo/vector-icons';
import sneakers from "../Const/sneakers";
const width = Dimensions.get("screen").width/2-10
function HomeScreen({ navigation }) {
    const categories = [ 'POPULAR', 'NIKE', 'ADIDAS', 'CONVERSE'];
    
    const [ categoryIndex, setCategoryIndex] = React.useState(0)

    const CategoryList = () =>{
        return <View style={styles.categoryContainer}>
            {categories.map((item, index) => (
                <TouchableOpacity key={index}
                activeOpacity={0.8}
                 onPress={()=>setCategoryIndex(index)}>

                    <Text style={[styles.categoryText, categoryIndex == index && styles.categoryTextSelected]}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    };

    const Card = ({sneakers}) => {
       return <View style={styles.Card}>
           <View style={{alignItems: 'flex-end'}}>
               <View style={{
                   width: 30, 
                   height: 30, 
                   borderRadius: 15,
                   alignItems: 'center',
                   justifyContent: 'center',
                   backgroundColor:sneakers.like ? 'rgba(245, 42, 42, 0.2)'
                : 'rgba(0,0,0,0.2)',}}>
                <MaterialIcons 
             name="favorite"
             size={18}
             color={sneakers.like? 'red': 'black'} />  
               </View>
           </View>
               <View style={{height: 100, width: 100, alignItems: 'center'}}>
                <Image
                style={{flex: 1, resizeMode: 'contain'}}
                source={sneakers.img}/>
               </View>
       </View>
    };
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
                    <TextInput placeholder="search" style={styles.input}/>
                </View>
                <View style={styles.sortBtn}>
                    <MaterialIcons name="sort"
                    size={30}
                    style={{color: 'white'}}/>
                </View>
            </View>
            <CategoryList/>
            <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                marginTop: 10,
                paddingBottom: 50,
            }}
             columnWrapperStyle={{justifyContent: 'space-between'}}
             numColumns={2} data={sneakers} renderItem={({item}) => <Card sneakers={item}/>}
            />

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    header:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    input: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    search: {
        height: 50,
        backgroundColor: '#F1F1F1',
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    sortBtn: {
        marginLeft: 10,
        height: 50,
        width: 50,
        backgroundColor: 'palegreen',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 10,
    },

    categoryContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'space-between',
        margin: 10
    },

    categoryText:{
       fontSize: 16,
       color: 'grey',
       fontWeight: 'bold' 
    },

    categoryTextSelected:{
        color: 'palegreen',
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: 'palegreen'
    },
    Card: {
        height: 225,
        backgroundColor: '#F1F1F1',
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
    }
})

export default HomeScreen;