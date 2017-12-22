import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Button, Icon } from 'native-base'
import ViewContainer from '../../content/ViewContainer'
import StatusbarBackground from '../../content/StatusbarBackground'
import { styles } from './styles'

export default class Profile extends Component<{}> {
    constructor(props) {
      super(props)
      this.state = { uri: require('../../resources/starIcon.png') }
    }
    changeFavourite() {
      this.setState({
        uri: require('../../resources/starIconYellow.png')
      })
    }
  render() {
    return (
      <ViewContainer>
        <StatusbarBackground />

        <View style={styles.profilePictureView}>
          <Image style={styles.profilePicture} source={require('../../resources/Profile.png')} />
        </View>
        <View style={styles.container}>
          <View style={styles.profileName}>
            <Text style={styles.profileNameText}>Christina Christiansen</Text>
          </View>
          <View style={styles.profileOccupation}>
            <Text style={styles.profileOccupationText}>AK Furniture Design | BA Entrepreneurship</Text>
            <Text style={styles.profileOccupationText}>VIA Design | VIA University College</Text>
          </View>
          <View style={styles.skillsContainer}>
            <View style={styles.icons}>
              <TouchableOpacity onPress={() => this.changeFavourite()}>
                <Image style={styles.starIcon} source={this.state.uri} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={styles.starIcon} source={require('../../resources/chatIcon.png')} />
              </TouchableOpacity>
              <Button transparent style={styles.profileSettingButton} >
                <Icon name='cog' />
              </Button>
            </View>
            <ScrollView style={styles.scrollView}>
              <View style={styles.skills}>
                <Text style={styles.skillsText}>Adobe Illustrator</Text>
                <View style={styles.box}></View>
              </View>
              <View style={styles.skills}>
                <Text style={styles.skillsText}>Adobe InDesign</Text>
                <View style={styles.box}></View>
              </View>
              <View style={styles.skills}>
                <Text style={styles.skillsText}>Networking</Text>
                <View style={styles.box}></View>
              </View>
              <View style={styles.skills}>
                <Text style={styles.skillsText}>Hand Drawing</Text>
                <View style={styles.box}></View>
              </View>
              <View style={styles.skills}>
                <Text style={styles.skillsText}>Prototyping</Text>
                <View style={styles.box}></View>
              </View>
              <View style={styles.skills}>
                <Text style={styles.skillsText}>Business Development</Text>
                <View style={styles.box}></View>
              </View>   
            </ScrollView>
          </View>
        </View>
      </ViewContainer>
    );
  }
}
