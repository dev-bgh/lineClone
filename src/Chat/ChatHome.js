import React, { useState } from 'react';
import { View, TextInput, Button, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, ToastAndroid, ScrollView, Modal } from 'react-native';
import img from '../assets/image/default.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import Plus from '../assets/image/plus.png';
import Camera from '../assets/image/camera.png';
import Album from '../assets/image/album.png';
import Send from '../assets/image/send.png';

const ChatHome = ({ navigation }) => {

    const [ sendText, setSendText ] = useState(""); 
    const test = [ 
            {
                nickname: 'Bot',
                date: '11월 12일 (목)'
            }
      ]

    function onChangeSendText(data) { 
        setSendText(data);
    }

  return (
    <View style={styles.container}>
        <View style={styles.banner}>
            <View style={{flex:1}}>
                {test.map((data, key)=> {
                    return(
                        <View key={key} style={{ flexDirection: 'row' }}>
                            <Icon name="chevron-left" size={20} color='white' style={{ margin: 15 }} onPress={()=>navigation.goBack()}/>
                            <Text style={styles.mainText}>{data.nickname}</Text>
                        </View>
                    )
                })}
            </View>
        </View>
        <ScrollView style={[styles.inputWrapper]}>
        </ScrollView>
        <View style={styles.bottomChat}>
            <View style={{ flexDirection:"row",}}>
                <Image source={Plus} style={{ margin: 13, width:25, height: 25}}/>
                <Image source={Camera} style={{ margin: 13, width:25, height: 25}}/>
                <Image source={Album} style={{ margin: 13, width:25, height: 25}}/>
                <TextInput style={{ backgroundColor: '#E2E2E2', width: '50%', height: 40, marginTop: 5, borderRadius: 80}} onChangeText={text => onChangeSendText(text)}/>
                <Image source={Send} style={{ margin: 13, width:25, height: 25}} />
            </View>
        </View>
    </View>
  );
    }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
      },
      banner: {
        backgroundColor: '#11264f',
        width: '100%',
        height: 50
      },
      inputWrapper: {
        height: '100%',
        width: '100%',
        backgroundColor: '#ABCDEF'
      },
      bottomChat: {
          backgroundColor:'#FFFFFF',
          justifyContent:'flex-end'
          
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
        fontWeight: 'bold',
        fontSize: 22, 
        lineHeight: 46,
        marginLeft: 10, 
        color: '#FFFFFF'
      },
});


export default ChatHome;