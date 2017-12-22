import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import ViewContainer from '../../content/ViewContainer'
import StatusbarBackground from '../../content/StatusbarBackground'
import _ from 'lodash'
import { firebaseRef } from '../../services/Firebase'
import { styles } from './styles'
import { Actions, ActionConst } from 'react-native-router-flux'
export default class Login extends Component<{}> {
    constructor(props) {
      super(props)

      this.state = {
        email: '',
        password: ''
      }

      this._login = this._login.bind(this)
      this._register = this._register.bind(this)

    }

    _login() {
      firebaseRef.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
        console.log(error.code)
        console.log(error.message)
      })
      Actions.discover()
    }

    _register() {
      Actions.register()
    }

    _discover() {
      Actions.discover()
    }

    _onFocus() {

    }

  render() {
    return (
      <ViewContainer>
        <View style={styles.view}>
          <StatusbarBackground />
          <View style={styles.logo}>
            <Image style={styles.image} source={require('../../resources/Logo.png')} resizeMode="center" />
          </View>
          <View>
            <TextInput 
              style={styles.textInput} 
              onChangeText={(text) => this.setState({email: text})}
              value={this.state.email}
              placeholder="EMAIL"
              placeholderTextColor="black"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
            />
            <TextInput 
              style={styles.textInput} 
              onChangeText={(text) => this.setState({password: text})}
              value={this.state.password}
              placeholder="PASSWORD"
              placeholderTextColor="black"          
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="go"
            />
          </View>
          <View>
            <TouchableOpacity style={styles.fbLogin}>
              <Image style={styles.fbImage} source={require('../../resources/fbLogin.png')} resizeMode="center" />
            </TouchableOpacity>
          </View>
          <View style={styles.login}>
            <TouchableOpacity style={styles.loginButton} onPress={this._login}>
              <Text style={styles.loginButtonText}>LOG IN</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.register}>
            <TouchableOpacity style={styles.registerButton} onPress={this._discover}>
              <Text style={styles.registerButtonText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>      
      </ViewContainer>
    );
  }
}

