import React from 'react';
import { View, TextInput, Button, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, ToastAndroid, ScrollView, createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Email = () => {
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <View style={styles.container}>
        <View style={styles.containerWrapper}>
            <View style ={styles.backSpace}>
                <Icon name="angle-left" size={35} style={{margin: 10}}/>
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
                  //  onChangeText={(text)=>{setEmail(text)}} onFocus={()=>{setFocusedInput("email")}} onBlur={()=>{setFocusedInput("")}}
                    />
            </View>
          </View>
          <View>
            
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
    fontSize: 14,
    lineHeight: 17,
    color: "#818181",
    marginBottom: 7,
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