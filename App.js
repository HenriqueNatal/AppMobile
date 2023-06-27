import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login/index.js';
import Home from './src/pages/Home/index.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Descarte from './src/pages/Descarte/indesx.js';
import Saiba from './src/pages/Saiba/index.js';
import Info from './src/pages/Info/index.js';

const Stack= createNativeStackNavigator();


export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
        name= 'Login'
        component={Login}/>

        <Stack.Screen
        name= 'Home'
        component={Home}/>
         <Stack.Screen
        name= 'Descarte'
        component={Descarte}/>
         <Stack.Screen
        name= 'Saiba'
        component={Saiba}/>
          <Stack.Screen
        name= 'Info'
        component={Info}/>
      </Stack.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
//  container: {
  //  flex: 1,
  //  backgroundColor: '#fff',
  //  alignItems: 'center',
  //  justifyContent: 'center',
 // },
});
