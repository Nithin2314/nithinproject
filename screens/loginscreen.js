import React,{useState} from 'react';
import {  StyleSheet, View, ImageBackground} from 'react-native';
import { Stack, Button, TextInput, IconButton,} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
export default function Loginscreen({ navigation }) {

  const [hide,setUhide]=useState(true);


    return (  
      //nithin is a container   
    <View 
        style={styles.nithin}>
          {/* behavior="padding" */}
        
        
            <TextInput
                style={styles.uinput}
                placeholder="Email : abc@gmail.com"
            /> 
            
            <View style={styles.input_container}>
            <TextInput
                style={styles.pinput}
                placeholder="Password  "
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
            </View>
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
              onPress={() => navigation.navigate('Forgetscreen')}
              variant="text"
            /> 

            <Button
              style={styles.newreg}
              color='Blue'
              title="New User / Register here"
              onPress={() => navigation.navigate('Signup')}
              variant="text"
            /> 
    </View>
        );
    }
    const styles = StyleSheet.create({
        //   image: {
        //   height:'100%',
        //   width:'100%',
        // },
        nithin: {
          flex:1,
          alignItems: 'center',
          justifyContent: 'center',  
        },
        input_container:{
          position:'relative'
        },
        uinput: {
          alignItems: 'center',
          justifyContent: 'center',
          height: 40,
          width: 300,
          marginTop:10,
          padding:10,
        },

        pinput: {
          alignItems: 'center',
          justifyContent: 'center',
          height: 40,
          width: 300,
          margin:50,
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
           justifyContent: 'center',
           paddingVertical: 5,
           width: 95,
           paddingHorizontal: 5,
           borderRadius: 4,
           elevation: 2,
           backgroundColor: '#5dadec',
           position:'relative',
           height:45,
        },
        newreg: {
          width:500,
          height:10,
          alignItems: 'center',
          marginTop:55,
        },
        eyeicon: {
          height:23,
          width:23,
          top:60,
          right:68,
          borderRightWidth:1,
          borderLeftWidth:1,
        } 

      });
      
      