import react from "react";
import React,{useState} from 'react';
import {  StyleSheet, View, ImageBackground} from 'react-native';
import {Button,} from "@react-native-material/core";
import { Image } from "react-native";

const image = {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7PqZKLpiGlOnvZyDu1I1kxAtySgLTe8cInA&usqp=CAU'};

export default function Loginscreen({ navigation }) {

//   const [hide,setUhide]=useState(true);


    return (  
      //nithin is a container   
    <View   style={styles.nithin}>
    {/* <Image source={image} resizeMode="cover" style={styles.image}/> */}
    <ImageBackground source={image} style={styles.image}></ImageBackground>
          <Button   
                style={styles.loginbutton}
                color='black' 
                title="GETSTARTED"
                onPress={() => navigation.navigate('Login')}
                variant="outline"  
          />
          
    </View>
        );
    }
    const styles = StyleSheet.create({
        nithin: {
          flex:1,
          alignItems: 'center',
          justifyContent: 'center',  
          backgroundColor: 'white'
        },
        image: {
          flex :1,
          justifyContent : 'center',
          // top:-100,
         
          width : "80%",
          height : "50%",
          marginTop:40,
          marginLeft:70,
          
        },
        loginbutton: {
           alignItems: 'center',
           justifyContent: 'center',
          //  paddingVertical: 5,
          //  paddingHorizontal: 5,
           borderRadius: 10,
           elevation: 8,
           backgroundColor: '#5dadec',
          //  position:'relative',
          //  height:40,
           top:-100,
          // //  left:"20%",
          // //  width : 130,
          //  height : 50,
           
        },
      });
      