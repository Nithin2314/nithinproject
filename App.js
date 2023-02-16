import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Alert, Pressable,onPress } from 'react-native';
import Loginpage from './loginscreen';
import Signuppage from './signupscreen';
export default function App(){

  return (
  <View>
    <Loginpage/>
  </View>,
  <View>
      <Signuppage/>
  </View>
  )
}

