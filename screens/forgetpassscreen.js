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
    width: '70%',
    flex:0,
    alignItems: 'center',
    justifyContent: 'center',
    top : 100,
    height: 410,
    margin: 50,
  },

  uinput: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 300,
    marginVertical:10,
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
    width: 120,
    paddingHorizontal: 5,
    borderRadius: 4,
    elevation: 2,
    marginVertical:50,
    backgroundColor: 'skyblue',
  },
  eyeicon: {
    height:22,
    width:22,
    top:220,
    right:20,
    borderRightWidth:1,
    borderLeftWidth:1,
  },
});
