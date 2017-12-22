import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from './scenes/Authentication/Login'
import Register from './scenes/Authentication/Register'
import Profile from './scenes/Profile/Profile'
import Discover from './scenes/Discover/Discover'
import { Router, Scene } from 'react-native-router-flux'

export default class App extends Component<{}> {
  render() {
    return (
      <Router>
        <Scene key={'root'}>
          <Scene
            key={'login'}
            component={Login}
            initial={true}
            hideNavBar={true}
          />
          <Scene
            key={'register'}
            component={Register}
            hideNavBar={true}
          />
          <Scene
            key={'profile'}
            component={Profile}
            hideNavBar={true}
          />
          <Scene
            key={'discover'}
            component={Discover}
            hideNavBar={true}
          />
        </Scene>
      </Router>
    );
  }
}
