import React, { useState } from 'react';
import { View, TextInput, Button, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, ToastAndroid, ScrollView, Modal } from 'react-native';

const Chat = ({ navigation }) => {

  return (
    <View style={styles.container}>
        <View style={styles.banner}>
        <View style={{flex:1}}>
            <Text style={styles.mainText}>대화</Text>
        </View>
        </View>
        <ScrollView style={[styles.inputWrapper]}>
            <View style={styles.searchWrapper}>
                <TouchableOpacity style={styles.search}>
                    <Text style={{ margin: 5, color:'#11264f' }}>검색</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
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


export default Chat;