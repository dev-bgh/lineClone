import React, { useState } from 'react';
import { View, TextInput, Button, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, ToastAndroid, ScrollView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from '@react-native-community/checkbox';
import CustomModal, { ModalAsk } from '../components/CustomModal';

const Email = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  const [isLineAgree, setIsLineAgree ] = useState(false);
  const [isUserAgree, setIsUserAgree ] = useState(false);
  const [ email, setEmail ] = useState("");
  const [ isVisible, setIsVisible ] = useState(false);
  const [ isEmail, setIsEmail ] = useState(false);

  function setEmailInput( text ){ 
    if( isEmailCheck(text) ) { 
      setEmail(text)
      setIsEmail(true);
    }
  }

  function isEmailCheck(asValue) {
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴	
  }
  
  return (
    <View style={styles.container}>
        <View style={styles.containerWrapper}>
          <View style ={styles.backSpace}>
              <Icon name="angle-left" size={35} style={{margin: 10}} onPress={()=>{ navigation.goBack() }}/>
          </View>
          <View style={{flex:1}}>
            <Text style={styles.h1}>
              <Text style={styles.mainText}>이메일을 입력해주세요.</Text>
              <Text style={styles.supText}>{"\n"}다음 사항에 동의할 경우 이메일을 입력하고 화살표 아이콘을 탭해 주세요</Text>
            </Text>
            <View style={[styles.inputWrapper]}>
                <TextInput 
                    keyboardType="email-address"  
                    style={[styles.textInput]} 
                    placeholder={"이메일 계정을 입력해주세요."}
                    onChangeText={(text)=>{setEmailInput(text)}}
                    />
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <Text style={styles.label}>만 14세 이상입니다.</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isLineAgree}
                onValueChange={setIsLineAgree}
                style={styles.checkbox}
              />
              <Text style={styles.label}>LINE 이용약관에 동의합니다.</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isUserAgree}
                onValueChange={setIsUserAgree}
                style={styles.checkbox}
              />
              <Text style={styles.label}>LINE 개인정보 처리방침에 동의합니다.</Text>
            </View>
          </View>
        <View>
      </View>
    <View> 
      { isEmail ?  
        isSelected && isLineAgree && isUserAgree ? 
          <Icon name="arrow-circle-right" size={60} style={{ position:"relative", left: 150, margin: 40 }} onPress={()=>{ setIsVisible(true)}}/>
          :<Icon name="exclamation" size={60} style={{ position:"relative", left: 150, margin: 40 }} onPress={()=>{ ToastAndroid.show("체크를 완료해주세요.", 1) }}/>
        :  <Icon name="exclamation" size={60} style={{ position:"relative", left: 150, margin: 40 }} onPress={()=>{ ToastAndroid.show("정확한 이메일을 입력해주세요.", 1) }}/>
      }
    </View>
    <CustomModal visible={isVisible} >
      <ModalAsk
          title={<Text>{email}{"\n"} 이 이메일로 인증번호를 보냅니다. </Text>}
          onConfirm={() => {navigation.navigate('Auth'); setIsVisible(false);}}
          onCancel={ () => setIsVisible(false)}/>
    </CustomModal>
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


export default Email;