import React, { useState } from 'react';
import { View, TextInput, Button, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, ToastAndroid, ScrollView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Pass = ({ navigation }) => {
  const [ pass, setPass ] = useState("");
  const [ passCehck, setPassCheck ] = useState(false);

  function setPassInput( text ){ 
    setPass(text);
  }

  function setPassCheckInput ( text ) { 
    setPassCheck(text);
  }


  return (
    <View style={styles.container}>
        <View style={styles.containerWrapper}>
          <View style ={styles.backSpace}>
              <Icon name="angle-left" size={35} style={{margin: 10}} onPress={()=>{ navigation.goBack() }}/>
          </View>
          <View style={{flex:1}}>
            <Text style={styles.h1}>
              <Text style={styles.mainText}>비밀번호 설정</Text>
              <Text style={styles.supText}>{"\n"}비밀번호는 최소 6자리에 영문자와 숫자가 최소 하나씩 포함되어야 합니다.</Text>
            </Text>
            <View style={[styles.inputWrapper]}>
                <TextInput 
                    keyboardType="default"
                    secureTextEntry={true}  
                    style={[styles.textInput]} 
                    placeholder={"비밀번호를 입력해주세요."}
                    onChangeText={(text)=>{setPassInput(text)}}
                />
                <TextInput 
                    keyboardType="default"
                    secureTextEntry={true} 
                    style={[styles.textInput]} 
                    placeholder={"비밀번호를 재입력해주세요."}
                    onChangeText={(text)=>{setPassCheckInput(text)}}
                />
            </View>
      </View>
    <View>
      { pass === passCehck ? 
      <Icon name="arrow-circle-right" size={60} style={{ position:"relative", left: 150, margin: 30 }} onPress={()=>{ setIsVisible(true)}}/>
      :<Icon name="exclamation" size={60} style={{ position:"relative", left: 150, margin: 30 }} onPress={()=>{ ToastAndroid.show("체크를 완료해주세요.", 1) }}/>
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
    paddingTop: 15,
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


export default Pass;