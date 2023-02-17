import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Alert, Pressable,onPress } from 'react-native';
import Loginpage from './screens/loginscreen';
import Signuppage from './screens/signupscreen';
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

