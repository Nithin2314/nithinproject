import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Alert, Pressable,onPress } from 'react-native';
import Forgetpassscreen from './screens/forgetpassscreen';
import Loginpage from './screens/loginscreen';
import Signupscreen from './screens/signupscreen';
import Signuppage from './screens/signupscreen';

import Loginscreen from './screens/loginscreen';



export default function App(){

  return (
  <View>
    <Loginpage/>
  </View>,
  <View>
      <Signuppage/>
  </View>,
  <View>
    <Forgetpassscreen/>
  </View>


//     <View>
//   <Router>
//   <Scene key="root">
//     <Scene key="Loginpage"
//       component={Loginpage}
//       title="loginpage"
//       initial
//     />
//     <Scene
//       key="Signuppage"
//       component={Signuppage}
//       title="Signuppage"
//     />
//   </Scene>
// </Router>
// </View>
  )
}

