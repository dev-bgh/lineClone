import React from 'react';
import { View, TextInput, Button, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, ToastAndroid, ScrollView } from 'react-native';
const Home = () => {
  return (
    <View style={styles.container}>
        <View style={styles.containerWrapper}>
          <View style={{flex:1, justifyContent:"center", alignItems: "center"}}>
            <Image style={{width: 100, height: 100, alignSelf:"center" }} source={require("../assets/image/lineIcon.png")} />
            <Text style={styles.h1}>
              <Text style={styles.mainText}>환영합니다.</Text>
              <Text style={styles.supText}>{"\n"}무료 메시지와 영상통화, 음성통화를 부담 없이{"\n"}즐겨보세요!</Text>
            </Text>
          </View>
          <View style={styles.btnWrapper}>
            <TouchableOpacity activeOpacity={0.8} style={[styles.btn, styles.btnSignIn]} onPress={()=>{navigation.navigate('SignIn')}}>
              <Text style={[styles.btnText, styles.btnSignInText]}>로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={[styles.btn, styles.btnSignUp]} onPress={()=>{navigation.navigate('SignUp')}}>
              <Text style={[styles.btnText]}>계정 만들기</Text>
            </TouchableOpacity>
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
  btnWrapper: {
    width:"100%",
    alignItems:"center",
    backgroundColor: "#FFFFFF",
  },
  h1: {
    marginTop: 30,
    // marginBottom: 60,
    letterSpacing: -0.3,
    textAlign: "center",
},
  mainText: {
    fontWeight: "bold", 
    fontSize: 28, 
    lineHeight: 40, 
    color: '#000000'
  },
  supText: {
    fontSize: 15, 
    lineHeight: 25, 
    color: '#000000'
  },
  btn: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    backgroundColor: '#000000',
  },
  btnText: {
    color: '#000000',
    fontSize: 14,
    textAlign: "center",
    letterSpacing: 0.8,
    fontWeight: "bold",
  },
  btnSignInText: {
    color: "#000000"
  },
  btnSignIn: {
    width: '100%',
    marginTop: 10,
    backgroundColor: "#F00",
    borderWidth: 1.5,
    borderColor: "#000000"
  },
  btnSignUp: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#ff0",
    borderWidth: 1.5,
    borderColor: "#000000"
  },
});


export default Home;