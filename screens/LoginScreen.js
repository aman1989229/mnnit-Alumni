import React, { Component } from "react";
import { 
    StyleSheet, 
    Text,
     View,
     ImageBackground,
     Image,
     TextInput,
     Dimensions,
     TouchableOpacity,
     Button
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
const {width:WIDTH}=Dimensions.get('window');
const LoginScreen = () => {
    
    return (
        <ImageBackground source={require('../images/back.png')} style={styles.container}>
      
       <View style={styles.logocontainer}>
          <Image source={require('../images/mnnitlogo.png')} style={styles.logo}></Image>
          <Text style={styles.logotext}>Mnnit Alumni welcome</Text>
       </View>

        {/*Input 1*/}
       <View style={styles.inputcontainer}>
         <Icon name={'ios-person'} size={28} color={'rgba(255,255,255,0.7)'}
         style={styles.inputIcon}/>
       <TextInput 
       style={styles.input}
       placeholder={'Username'}
       placeholderTextColor={'rgba(255,255,255,0.7)'}
       underlineColorAndroid='transparent'
       />
       </View>

 {/*Input 2*/}
       <View style={styles.inputcontainer}>
         <Icon name={'ios-lock'} size={28} color={'rgba(255,255,255,0.7)'}
         style={styles.inputIcon}/>
       <TextInput 
       style={styles.input}
       placeholder={'Password'}
       secureTextEntry={true}
       placeholderTextColor={'rgba(255,255,255,0.7)'}
       underlineColorAndroid='transparent'
       />
       {/*eye icon */}
       <TouchableOpacity style={styles.btnEye}>
         <Icon name={'ios-eye'} size={26} color={'rgba(255,255,255,0.7)'}
         />
       </TouchableOpacity>
       </View>

  {/*Login button */}
       <TouchableOpacity style={styles.btnLogin}>
         <Text style={styles.text}>Login</Text>
       </TouchableOpacity>

    </ImageBackground>
    );

}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:null,
      height:null,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logocontainer:{
      alignItems:'center',
      marginBottom:50
    },
    logo:{
       height:120,
       width:120
    },
    logotext:{
     color:'white',
     fontSize:20,
     marginTop: 10,
     opacity:0.5
    },
    inputcontainer:{
   marginTop:10
    },
    input:{
    width:WIDTH-55,
    height:45,
    borderRadius:25,
    fontSize:16,
    paddingLeft:45,
    backgroundColor:'rgba(0,0,0,0.35)',
    color:'rgba(255,255,255,0.7)',
    marginHorizontal:25
    },
    inputIcon:{
      position:'absolute',
      top:10,
      left:37
    },
    btnEye:{
   position:'absolute',
   top:8,
   right:37
    },
    btnLogin:{
      width:WIDTH-55,
    height:45,
    borderRadius:25,
    backgroundColor:'#432577',
    justifyContent:'center',
    marginTop:20
    },
    text:{
  color:'rgba(255,255,255,0.7)',
  fontSize:16,
  textAlign:'center'
    },
  });
  