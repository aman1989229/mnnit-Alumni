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

class StartScreen extends Component {
    render() {
    
            return (
                <ImageBackground source={require('../images/back.png')} style={styles.container}>
              
               <View style={styles.logocontainer}>
                  <Image source={require('../images/mnnitlogo.png')} style={styles.logo}></Image>
                  <Text style={styles.logotext}>Mnnit Alumni welcome</Text>
               </View>
        
               <View style={{marginTop:10}}>
                   <TouchableOpacity style={styles.btnLogin} onPress={()=>this.props.navigation.navigate('AdminScreen')}>
                       <Text style={styles.text}>Alumni</Text>
                   </TouchableOpacity>
              
              
                   <TouchableOpacity style={styles.btnLogin} onPress={()=>this.props.navigation.navigate('FacultyScreen')}>
                       <Text style={styles.text}>Faculty</Text>
                   </TouchableOpacity>
              
             
                   <TouchableOpacity style={styles.btnLogin} onPress={()=>this.props.navigation.navigate('Login')}>
                       <Text style={styles.text}>Admin</Text>
                   </TouchableOpacity>

            </View>
        
        
            </ImageBackground>
            );
        
        
    }
}
export default StartScreen;

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
       width:120,
       borderRadius: 200/2
    },
    logotext:{
     color:'#581845',
     fontSize:20,
     marginTop: 10,
     opacity:1,
     fontWeight:"bold"
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
  