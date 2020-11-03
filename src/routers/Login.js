import React from 'react';
import { View, TextInput, Button, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, ToastAndroid, ScrollView, createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
  return (
    <View style={styles.container}>
        <View style={styles.containerWrapper}>
            <View style ={styles.backSpace}>
                <Icon name="angle-left" size={35} style={{margin: 10}}/>
            </View>
          <View style={{flex:1}}>
            <Text style={styles.h1}>
              <Text style={styles.mainText}>LINE 로그인</Text>
              <Text style={styles.supText}>{"\n"}LINE을 시작하려면 이메일로 로그인해주세요.{"\n"}{"\n"}LINE 계정에 Facebook을 연결한 경우 해당 방법으로도 로그인할 수 있습니다.</Text>
            </Text>
          </View>
          <View style={styles.btnWrapper}>
            <View style ={styles.btn}>
              <TouchableOpacity style={[styles.btnSignIn]} onPress={()=>{navigation.navigate('Login')}}>
                <Text style={[styles.btnText, styles.btnSignInText]}>이메일로 로그인</Text>
              </TouchableOpacity>
            </View>
            <View style ={styles.btn}>
              <TouchableOpacity style={[styles.btnSignUp]} onPress={()=>{navigation.navigate('SignUp')}}>
                <Text style={[styles.btnText, styles.btnSignInText ]}>Facebook으로 로그인</Text>
              </TouchableOpacity>
            </View>
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
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  containerWrapper:{
    flex: 1,
    alignItems: 'center', 
    justifyContent:'center',
    backgroundColor: "#FFFFFF",
    height:"100%",
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
  btn: {
    justifyContent: 'center',
    textAlignVertical: "center",
    alignItems: 'center',
    width: "100%",
    flexDirection: 'row',
  },
  btnText: {
    color: '#000000',
    fontSize: 15,
    textAlign: "center",
    letterSpacing: 0.8,
    fontWeight: "bold",
  },
  btnSignInText: {
    color: "#ffffff",
  },
  btnSignIn: {
    justifyContent: 'center',
    width: '85%',
    height: 45,
    backgroundColor: "#3ACE00",
    borderColor: "#000000",
    borderRadius: 5,
  },

  btnSignUp: {
    justifyContent: 'center',
    width: '85%',
    height: 45,
    marginTop: 10,
    marginBottom: 30,
    backgroundColor: "blue",
    borderColor: "#000000",
    borderRadius: 5,
  },
});


export default Login;