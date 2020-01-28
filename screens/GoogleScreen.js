import React, { Component } from "react";
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class GoogleScreen extends Component {
   
 
    render() {
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={this._signIn}
        disabled={this.state.isSigninInProgress} />
    }
}
export default GoogleScreen;

