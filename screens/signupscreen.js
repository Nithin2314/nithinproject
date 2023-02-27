import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text,  View, Alert, } from 'react-native';
import { Stack, Button, TextInput, IconButton} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import{auth} from '../firebase';
export default function Signupscreen({ navigation }) 
{
  
  const [hide,setUhide]=useState(true);
  const [state, setState] = useState({
    Name: '',
    Password: '',
    Email: '',
  });

 const { Name, Password, Email} = state;

  const handleChange = (text, id) => {
    setState({
      ...state,
      [id]: text,
    });
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, Email, Password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  // createDoc();
   
    navigation.navigate('Login')
  }


    return (    
        // nithin means container of the application
    <View style={styles.nithin}>
        <TextInput
        // ninput means : name input
            style={styles.ninput}
            placeholder="Name :(eg:John23)"
            onChangeText={(text) => handleChange(text, 'Name')}
            />
        <TextInput
            style={styles.uinput}
            placeholder="Email : abc@gmail.com"
            onChangeText={(text) => handleChange(text, 'Email')}
        /> 
       {/* npinput means newpassword placeholder */}
        <TextInput
            style={styles.npinput}
            placeholder="New Password "
            secureTextEntry={hide}
            onChangeText={(text) => handleChange(text, 'Password')}
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
            onPress={handleSignUp}
            
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
       
        signinbutton: {
          alignItems: 'center',
          justifyContent: 'center',
          // paddingVertical: 5,
          // width: 100,
          // paddingHorizontal: 5,
          borderRadius: 0,
          elevation: 5,
          backgroundColor: 'lightgreen',
          position:'relative',
          marginBottom:50,
          marginTop:70,
        },
        newreg: {
          width:500,
          height:10,
          alignItems: 'center',
          // marginBottom:20,
          bottom:20,
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
      
      