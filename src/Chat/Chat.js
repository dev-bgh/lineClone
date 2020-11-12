import React, { useState } from 'react';
import { View, TextInput, Button, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, ToastAndroid, ScrollView, Modal } from 'react-native';
import img from '../assets/image/default.png';

const Chat = ({ navigation }) => {

  const test = [ 
    {
      testimg: img,
      name: "테스트1",
      lastText: "그래"
    },
    {
      testimg: img,
      name: "테스트2",
      lastText: "ㅇ"
    },
    {
      testimg: img,
      name: "테스트3",
      lastText: "ㄴㄴ"
    },
    {
      testimg: img,
      name: "테스트4",
      lastText: "잘가"
    },
    {
      testimg: img,
      name: "테스트5",
      lastText: "ㅂㅇ"
    },

  ]
  
  function clickChat( data, index) {
    console.log("데이터",data,index);
  }

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
            <View >
              {test.map((data, index) => { 
                return ( 
                <TouchableOpacity style={styles.chatStyle} key={index} onPress={()=>clickChat(data, index)}>
                  <View>
                    <Image source={data.testimg} style={{ width: 40, height: 40, borderRadius: 100, marginLeft: 20}} />
                  </View>
                  <View style={{ marginLeft: 10 }}>
                    <Text>{data.name}</Text>
                    <Text style={{ marginLeft: 5, fontSize: 13, color: 'gray'}}>{data.lastText}</Text>
                  </View>
                </TouchableOpacity>
                )
              })}
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
      chatStyle: {
        marginTop: 15,
        marginBottom: 2,
        flexDirection: 'row',
        width: "100%",
        height: 50,
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