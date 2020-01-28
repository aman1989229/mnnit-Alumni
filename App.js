import React from 'react';
import * as  firebase from 'firebase';
import {
   StyleSheet, 
   Text,
    View,
    ImageBackground,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity
   } from 'react-native';
   {/*importing navigation*/}
  
   
   {/*importing SCreens*/}
  
   {/*importing icons*/}
 

{/*Database setup*/}

firebase.initializeApp({
apiKey: 'AIzaSyDr-HJ-Ybic94tjAtqW_8FbVOYro887bKw',
authDomain: 'mnnit-alumni-9b013.firebaseapp.com',
databaseURL: 'https://mnnit-alumni-9b013.firebaseio.com',
projectId: 'mnnit-alumni-9b013',
storageBucket: 'mnnit-alumni-9b013.appspot.com',
messagingSenderId: '665936192753',
appId: '1:665936192753:web:929d7aeaf416b12921b550',
measurementId: 'G-D2BMD8NZWP'
});
import { createAppContainer } from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
{/*Database setup finish here*/}
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';





const AppNavigator = createStackNavigator(
  {
    Loading: LoadingScreen,
    Login: LoginScreen,
    Dashboard: DashboardScreen
  },
  {
    initialRouteName: "Login"
  }
);
export default createAppContainer(AppNavigator);




