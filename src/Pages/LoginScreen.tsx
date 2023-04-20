import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions} from "react-native";
import Input from "../Components/Input";
import Button from "../Components/Button";


const LoginScreen = () => {

  return (

    <SafeAreaView style={style.container}>
      <View style={style.logo_container}>
        <Image style={style.logo} source={require('../Assets/shop.icon.png')} />
      </View>
      <View style={style.body_container}>
        <Input placeholder='Enter User Name' />
        <Input placeholder='Enter Password'/>
        <Button title='Login in'/>
      </View>
    </SafeAreaView>

  );

};

const style = StyleSheet.create({
  container:{flex:1,
  backgroundColor:'#ffb6c1'
  },
  body_container:{
    flex:1,
  },
  logo:{
    width:Dimensions.get('window').width ,
    height:Dimensions.get('window').height / 3,
    resizeMode:'contain',
    margin:5,
    alignSelf:'center',

  },
  logo_container:{
    flex:0.7,



  },


});

export default LoginScreen;
