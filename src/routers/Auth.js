import React, { useState } from 'react';
import { View, TextInput, Button, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, ToastAndroid, ScrollView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from '@react-native-community/checkbox';
import CustomModal, { ModalAsk } from '../components/CustomModal';

const Auth = ({ navigation }) => {
  const [ auth, setAuth ] = useState("");

  function setAuthInput( text ){ 
    setAuth(text);
  }
  
  return (
    <View style={styles.container}>
        <View style={styles.containerWrapper}>
          <View style ={styles.backSpace}>
              <Icon name="angle-left" size={35} style={{margin: 10}} onPress={()=>{ navigation.goBack() }}/>
          </View>
          <View style={{flex:1}}>
            <Text style={styles.h1}>
              <Text style={styles.mainText}>인증번호를 입력해주세요.</Text>
              <Text style={styles.supText}>{"\n"}이메일로 받은 인증번호 6자리를 입력해주세요.</Text>
            </Text>
            <View style={[styles.inputWrapper]}>
                <TextInput 
                    style={[styles.textInput]} 
                    placeholder={"인증번호를 입력해주세요."}
                    onChangeText={(text)=>{setAuthInput(text)}}
                    />
            </View>
          </View>
        <View>
      </View>
    <View>
      { auth.length == 6 ? 
      <Icon name="arrow-circle-right" size={60} style={{ position:"relative", left: 300, margin: 40 }} onPress={()=>{ console.log("성공") }}/>
      :<Icon name="exclamation" size={60} style={{ position:"relative", left: 300, margin: 40 }} onPress={()=>{ ToastAndroid.show("정확한 인증번호를 입력해주세요.", 1) }}/>
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
   
    backgroundColor: "#FFFFFF",
    height:"100%",
    },
  inputWrapper: {
    paddingLeft: 30, 
    paddingRight: 30,
  },
  textWrapper:{ 
      width: "100%",
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
    borderBottomColor: "#c4c4c4",
    borderBottomWidth: 1,
    padding: 0,
    paddingBottom: 3,
    lineHeight: 20,
    fontSize: 16,
  },
  backSpace: {
    width: '100%',
    height: 50
    },
  btnWrapper: {
    width:"100%",
    alignItems:"center",
    backgroundColor: "#FFFFFF",
    textAlign: "center",

  },
  checkboxContainer: {
    flexDirection: "row",
    marginLeft: 25,
    marginTop: 10,
    marginBottom: 5
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
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


export default Auth;