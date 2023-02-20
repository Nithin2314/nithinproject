import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text,  View, Alert, } from 'react-native';
import { Stack, Button, TextInput, IconButton} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function Signupscreen({ navigation }) 
{
  
  const [hide,setUhide]=useState(true);


    return (    
        // nithin means container of the application
    <View style={styles.nithin}>
        <TextInput
        // ninput means : name input
            style={styles.ninput}
            placeholder="Name :(eg:John23)"
            />
        <TextInput
            style={styles.uinput}
            placeholder="Email : abc@gmail.com"
        /> 
       {/* npinput means newpassword placeholder */}
        <TextInput
            style={styles.npinput}
            placeholder="New Password "
            secureTextEntry={hide}
        />
        {/* <Button title="show" onPress={
          function(){setUhide(!hide)}
          }/> */}
          {/* cpinput means confrim password */}
         
            <View style={styles.input_container}>
            <TextInput
            style={styles.cpinput}
            placeholder="Confirm Password  "
            secureTextEntry={hide}
            />

            <IconButton  
                    icon={props => <Icon name="eye"/>} 
                    onPress={
                        ()=>{setUhide(!hide)}
                            }
                    style={styles.eyeicon}      
            />
            </View>
       
        <Button   
            
            style={styles.signinbutton}
            color='black' 
            title="SIGNUP"
            variant="outline"
            
        />
        {/* it will go to login page if */}
        <Button
          style={styles.newreg}
          color='Blue'
          title="You have an account / Login"
          onPress={() => navigation.navigate('Login')}
          variant="text"
          /> 
    </View>
        );
}
    const styles = StyleSheet.create({

        nithin: {
          flex:1,
          alignItems: 'center',
          justifyContent: 'center',
        },
        input_container:{
            position:'relative'
        },
        ninput: {
           alignItems: 'center',
           justifyContent: 'center',
           height: 40,
           width: 300,
           margin:40,
           marginTop:50,
          padding:10,
          },
        uinput: {
          alignItems: 'center',
          justifyContent: 'center',
          height: 40,
          width: 300,
          padding:10,
        },
        npinput: {
          height: 40,
          width: 300,
          margin:20,
          padding:10,
        },
        cpinput: {
            height: 40,
            width: 300,
            marginTop: 10,
            padding:10,
        },
        // fpass:{
        //   width:300,
        //   height:10,
        //   alignItems: 'center',
        //   marginTop:40,
        // },

        signinbutton: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 5,
          // width: 100,
          paddingHorizontal: 5,
          borderRadius: 4,
          elevation: 2,
          backgroundColor: '#5dadec',
          position:'relative',
          height:45,
          marginBottom:50,
          marginTop:90,
        },
        newreg: {
          width:500,
          height:10,
          alignItems: 'center',
          marginTop:0,
        },
        eyeicon: {
         position:'absolute',
          height:23,
          width:23,
          top:38,
          right:30,
          borderRightWidth:1,
          borderLeftWidth:1,
        } 

      });
      
      