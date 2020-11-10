import { red } from '@material-ui/core/colors';
import React, { useState } from 'react';
import { View, TextInput, Button, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, ToastAndroid, ScrollView, Modal } from 'react-native';
import img from '../assets/image/default.png';
import Icon from 'react-native-vector-icons/FontAwesome';

const Friend = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <View style={{flex:1}}>
            <Text style={styles.mainText}>친구</Text>
        </View>
      </View>
      <ScrollView style={[styles.inputWrapper]}>
        <View style={styles.searchWrapper}>
          <TouchableOpacity style={styles.search}>
            <Text style={{ margin: 5, color:'#11264f' }}>검색</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.myProfile}> 
          <TouchableOpacity style={styles.myProfileWrapper}>
            <Image source={img} style={styles.myProfileImg}/> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.myProfileTextWrapper}>
            <Text style={styles.myProfileText}>테스트계정</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.myGroup}> 
          <TouchableOpacity style={styles.myGroupWrapper}>
            <Icon name="users" size={20} style={{ marginLeft: 15, marginRight: 10}}/>
            <Text>그룹</Text>
            <Icon name="chevron-down" size={15} style={{ marginLeft: 300, marginRight: 10}}/>
          </TouchableOpacity>
        </View>

        <View style={styles.myFriend}> 
          <TouchableOpacity style={styles.myFriendWrapper} >
            <Icon name="user" size={20} style={{ marginLeft: 27, marginRight: 15}}/>
            <Text>친구</Text>
            <Icon name="chevron-down" size={15} style={{ marginLeft: 300, marginRight: 10}}/>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
    // 
      );
    }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  banner: {
    backgroundColor: '#11264f',
    width: '100%',
    height: 50
  },
  inputWrapper: {
    height: '100%',
    width: '100%',
    backgroundColor: '#FFFFFF'
  },
  searchWrapper: {
    backgroundColor: '#11264f',
    height: 35
  },
  search: {
    backgroundColor: '#627193',
    width: '95%',
    height: 30,
    borderRadius: 5,
    marginLeft: 10
  }, 
  myProfile: {
    flexDirection: 'row',
    width: "100%",
    height: 100,
    borderBottomColor: '#627193',
    borderBottomWidth: 0.5,
  },
  myProfileWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
  },
  myProfileTextWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  myProfileImg: {
    width: 60,
    height: 60,
    borderRadius: 100
  },  
  myProfileText: {
    fontSize: 15,
    fontWeight: 'bold'
  },  

  myGroup: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
  myGroupWrapper: {
    flexDirection: "row",
    width: "95%",
    height: 30,
    borderBottomColor: '#627193',
    borderBottomWidth: 0.5,
    margin: 10
  },
  myFriend: {
    width: "100%",
    height: "100%",
  },
  myFriendWrapper: {
    flexDirection: "row",
    width: "95%",
    height: 30,
  },
  inputBox: {
       fontSize: 30,
       color:'#000000',
  },

  mainText: {
    fontSize: 20, 
    lineHeight: 46,
    marginLeft: 10, 
    color: '#FFFFFF'
  },
});


export default Friend;