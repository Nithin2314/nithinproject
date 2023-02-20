import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Alert, Pressable,onPress } from 'react-native';
import Forgetpassscreen from './screens/forgetpassscreen';
import Loginpage from './screens/loginscreen';
import Signupscreen from './screens/signupscreen';
import Signuppage from './screens/signupscreen';
import Loginscreen from './screens/loginscreen';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SIGNUP">
        <Stack.Screen name="Login" component={Loginscreen} options={{title: 'Nithin Application'}}/>
        <Stack.Screen name="Signup" component={Signupscreen}options={{title: 'Welcome'}} />
        <Stack.Screen name="Forgetscreen" component={Forgetpassscreen}options={{title: 'Enter correct details'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// export default function App(){

//   return (
//   <View>
//     <Loginpage/>
//   </View>
//   // <View>
//   //     <Signuppage/>
//   // </View>
//   // <View>
//   //   <Forgetpassscreen/>
//   // </View>
//   )
// }

