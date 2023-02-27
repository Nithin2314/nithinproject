import react from 'react';
import { StatusBar } from 'expo-status-bar';
import Forgetpassscreen from './screens/forgetpassscreen';
import Loginpage from './screens/loginscreen';
import Signupscreen from './screens/signupscreen';
import Signuppage from './screens/signupscreen';
import Loginscreen from './screens/loginscreen';
import Homescreen from './screens/homescreen';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homescreen} options={{headerStyle: {backgroundColor: '#006600', borderBottomWidth: 0, shadowColor: "transparent", elevation: 0,}, headerTitleStyle: {color: "#d9d9d9",fontWeight: "bold",}, headerTitleAlign: "center",title: 'Firstpage', headerTintColor: "#d9d9d9",}}/>
        <Stack.Screen name="Login" component={Loginscreen} options={{headerStyle: {backgroundColor: "#006600", borderBottomWidth: 0, shadowColor: "transparent", elevation:0,}, headerTitleStyle: {color: "#d9d9d9",fontWeight: "bold",},headerTitleAlign: "center",title: 'Loginscreen',headerTintColor: "#d9d9d9",}}/>
        <Stack.Screen name="Signup" component={Signupscreen}options={{headerStyle: {backgroundColor: '#006600', borderBottomWidth: 0, shadowColor: "transparent", elevation: 0,}, headerTitleStyle: {color: "#d9d9d9",fontWeight: "bold",}, headerTitleAlign: "center",title: 'Firstpage', headerTintColor: "#d9d9d9",title: 'Signupscreen'}} />
        <Stack.Screen name="Forgetscreen" component={Forgetpassscreen}options={{headerStyle: {backgroundColor: '#006600', borderBottomWidth: 0, shadowColor: "transparent", elevation: 0,}, headerTitleStyle: {color: "#d9d9d9",fontWeight: "bold",}, headerTitleAlign: "center",title: 'Firstpage', headerTintColor: "#d9d9d9",title: 'Forgetpassscreen'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// export default function App(){

//   return (
//   <View>
//     <Loginpage/>//   </View>
//   // <View>
//   //     <Signuppage/>
//   // </View>
//   // <View>
//   //   <Forgetpassscreen/>
//   // </View>
//   )
// }

