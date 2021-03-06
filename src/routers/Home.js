import React from 'react';
import { View, TextInput, Button, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, ToastAndroid, ScrollView } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.containerWrapper}>
          <View style={{flex:1, justifyContent:"center", alignItems: "center"}}>
            <Image style={{width: 100, height: 100, alignSelf:"center"}} source={require("../assets/image/lineIcon.png")} />
            <Text style={styles.h1}>
              <Text style={styles.mainText}>환영합니다.</Text>
              <Text style={styles.supText}>{"\n"}무료 메시지와 영상통화, 음성통화를 부담 없이{"\n"}즐겨보세요!</Text>
            </Text>
          </View>
          <View style={styles.btnWrapper}>
            <View style ={styles.btn}>
              <TouchableOpacity style={[styles.btnSignIn]} onPress={()=>{navigation.navigate('Login')}}>
                <Text style={[styles.btnText, styles.btnSignInText]}>로그인</Text>
              </TouchableOpacity>
            </View>
            <View style ={styles.btn}>
              <TouchableOpacity style={[styles.btnSignUp]} onPress={()=>{navigation.navigate('Email')}}>
                <Text style={[styles.btnText]}>가입</Text>
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
  btnWrapper: {
    width:"100%",
    alignItems:"center",
    backgroundColor: "#FFFFFF",
    textAlign: "center",

  },
  h1: {
    marginTop: 20,
    letterSpacing: -0.3,
    textAlign: "center",
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
    width: '100%',
    height: 40,
    marginTop: 10,
    marginBottom: 30,
    backgroundColor: "#ffffff",
    borderColor: "#000000"
  },
});


export default Home;