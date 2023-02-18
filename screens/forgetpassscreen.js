import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text,  View, Alert,hide,setUhide } from 'react-native';
import { Stack, Button, TextInput, IconButton, Flex} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
export default function Forgetpassscreen() 
{
    const [hide,setUhide]=useState(true);

    return(
        <View style={styles.nithin}>
            <TextInput
                style={styles.uinput}
                placeholder="Enter your email-id"
            />
            
            <TextInput
                style={styles.npinput}
                placeholder="Create New Password "
                secureTextEntry={hide}
            />
            <TextInput
            style={styles.cpinput}
            placeholder="Confirm Password "
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
                style={styles.loginbutton}
                color='black' 
                title="Submit"
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
    margin:50,
  
  },

  uinput: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height:40,
    marginTop:750,
    padding:10,
  },
  
  npinput: {
    height: 40,
    width: 300,
    marginVertical:30,
    padding:10,
  },
  cpinput: {
    height: 40,
    width: 300,
    marginVertical: 30,
    padding:10,
  },
  loginbutton: {
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
    marginVertical:50,
    margin:40,
  },
  eyeicon: {
    height:23,
    width:23,
    top:380,
    right:20,
    borderRightWidth:1,
    borderLeftWidth:1,
  },
});
