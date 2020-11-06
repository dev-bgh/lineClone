import React, { useState } from 'react';
import { View, TextInput, Button, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, ToastAndroid, ScrollView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import defaultImg from '../assets/image/default.png';
import ImagePicker from 'react-native-image-picker';

const Profile = ({ navigation }) => {
  const [ name, setName ] = useState("");
  const [ img, setImageSource ] = useState(""); 
  function setNameInput( text ){ 
    setName(text);
  }

  function pickImg() { 
    const options = {
        title: 'Load Photo',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
          Alert.alert(response.customButton);
        } else {
          setImageSource(response.uri);
        }
      });
  }
  

  return (
    <View style={styles.container}>
        <View style={styles.containerWrapper}>
          <View style ={styles.backSpace}>
              <Icon name="angle-left" size={35} style={{margin: 10}} onPress={()=>{ navigation.goBack() }}/>
          </View>
          <View style={{flex:1}}>
            <Text style={styles.h1}>
              <Text style={styles.supText}>다른 LINE 사용자가 내 이름과 프로필을 볼 수 있습니다.</Text>
            </Text>
            {img ?  
            <TouchableOpacity style={styles.imgWrapper} onPress={()=>pickImg()}>
                <Image source={{uri: img}} style={styles.imgStyle}/>
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.imgWrapper} onPress={()=>pickImg()}>
                <Image source={defaultImg} style={styles.imgStyle}/>
            </TouchableOpacity>
                }
            <View style={[styles.inputWrapper]}>
                <TextInput 
                    keyboardType="email-address"  
                    style={[styles.textInput]} 
                    placeholder={"사용자 이름 입력"}
                    onChangeText={(text)=>{setNameInput(text)}}
                    />
            </View>
          </View>
        <View>
      </View>
    <View>
      { name.length > 0 ? 
      <Icon name="arrow-circle-right" size={60} style={{ position:"relative", left: 150, margin: 40 }} onPress={()=>{ navigation.navigate('Pass') }}/>
      :<Icon name="exclamation" size={60} style={{ position:"relative", left: 150, margin: 40 }} onPress={()=>{ ToastAndroid.show("체크를 완료해주세요.", 1) }}/>
      }
    </View>
  </View>
</View> 
  );
    }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView:{
    flex: 1,
  },
  containerWrapper:{
    flex: 1,
    alignItems: 'center', 
    justifyContent:'center',
    backgroundColor: "#FFFFFF",
    height:"100%",
    },
  inputWrapper: {
    paddingLeft: 30, 
    paddingRight: 50,
  },
  imgWrapper: {
    width: 150,
    height: 150,
    marginLeft: 30,
  },
  textWrapper:{ 
      width: "100%",
  },
  imgStyle: {
      borderRadius: 100,
      width: 130,
      height: 130
  },
  inputBox: {
       fontSize: 30,
       color:'#000000',
  },
  label: {
    fontWeight: "bold", 
    fontSize: 20,
    color: "#000000",
},
  textInput: {
    padding: 0,
    paddingBottom: 3,
    lineHeight: 20,
    fontSize: 16,
  },
  backSpace: {
    width: '100%',
    height: 50
    },
  h1: {
    margin: 30,
    letterSpacing: -0.3,
},
  mainText: {
    fontWeight: "bold", 
    fontSize: 28, 
    lineHeight: 46, 
    color: '#000000'
  },
  supText: {
    fontSize: 15, 
    color: '#808080',
    lineHeight: 17
  },
});


export default Profile;