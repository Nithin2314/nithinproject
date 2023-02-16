import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text,  View, Alert, } from 'react-native';
import { Stack, Button, TextInput, IconButton} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
export default function Loginscreen() {
  
  const [hide,setUhide]=useState(true);


    return (    
    <View style={styles.nithin}>
        <TextInput
            style={styles.uinput}
            placeholder="Email : abc@gmail.com"
        /> 
        <TextInput
            style={styles.pinput}
            placeholder="Password : ****"
            secureTextEntry={hide}
        />
        {/* <Button title="show" onPress={
          function(){setUhide(!hide)}
          }/> */}
        <IconButton
        
            icon={props => <Icon name="eye"/>} 
            onPress={
                ()=>{setUhide(!hide)}
                    }
            style={styles.eyeicon}
            position='absolute'
          
        />
        <Button   
            style={styles.loginbutton}
            color='black' 
            title="LOGIN"
            variant="outline"
            
        />
        <Button
          style={styles.fpass}
          color='Red'
          title="Forget password ?"
          variant="text"
          /> 

        <Button
          style={styles.newreg}
          color='Blue'
          title="Don't have an account / Register here"
          variant="text"
          /> 
    </View>
        );
    }
    const styles = StyleSheet.create({

        nithin: {
          alignItems: 'center',
          justifyContent: 'center',
          top : 180,
          height: 500,
          margin: 50,
        },

        uinput: {
          alignItems: 'center',
          justifyContent: 'center',
          height: 40,
          width: 300,
          marginTop:0,
          padding:10,
        },

        pinput: {
          
          height: 40,
          width: 300,
          marginTop: 25,
          padding:10,
        },

        fpass:{
          width:300,
          height:10,
          alignItems: 'center',
          marginTop:40,
        },

        loginbutton: {
          alignItems: 'center',
          // justifyContent: 'center',
          // paddingVertical: 5,
          width: 80,
          // paddingHorizontal: 5,
          // borderRadius: 4,
          // elevation: 2,
          backgroundColor: 'lightgreen',
        
          // position:'relative',
          marginTop:70,
        },
        newreg: {
          width:500,
          height:10,
          alignItems: 'center',
          marginTop:40,
        },
        eyeicon: {
          height:22,
          width:22,
          top:188,
          right:20,
          borderRightWidth:1,
          borderLeftWidth:1,
        } 

      });
      
      