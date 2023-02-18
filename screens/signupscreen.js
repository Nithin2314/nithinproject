import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text,  View, Alert, } from 'react-native';
import { Stack, Button, TextInput, IconButton} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
export default function Signupscreen() 
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
            position='absolute'
          
        />
        <Button   
            
            style={styles.signinbutton}
            color='black' 
            title="SIGNUP"
            variant="outline"
            
        />
        {/* <Button
          style={styles.fpass}
          color='Red'
          title="Forget password ?"
          variant="text"
          />  */}
        {/* it will go to login page if */}
        <Button
          style={styles.newreg}
          color='Blue'
          title="You have an account / Login"
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
        ninput: {
           alignItems: 'center',
           justifyContent: 'center',
           height: 40,
           width: 300,
           margin:40,
           marginTop:750,
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
          width: 95,
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
          height:23,
          width:23,
          top:390,
          right:68,
          borderRightWidth:1,
          borderLeftWidth:1,
        } 

      });
      
      