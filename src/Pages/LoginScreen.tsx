import React from "react";
import { SafeAreaView, View, StyleSheet, Image, Dimensions, Platform, KeyboardAvoidingView} from "react-native";
import Input from "../Components/Input";
import {Formik} from "formik";
import Button from "../Components/Button";




const LoginScreen = ({navigation}:any) => {

  function handleLogin(values:any){

    if(values.password === "murat" && values.username === "murat"){

       navigation.navigate('MainMenu');

    }


    console.log(values);

  }


  return (

    <SafeAreaView style={style.container}>

      <View style={style.logo_container}>
        <Image style={style.logo} source={require('../Assets/shop.icon.png')} />
      </View>
      <Formik initialValues={{username:'', password:''}} onSubmit={values => handleLogin(values)} >
        {({handleSubmit, handleChange,values}) =>
          (<View style={style.body_container}>
        <Input placeholder='Enter User Name' value={values.username} onType={handleChange('username')} iconName='account' isSecure={false} />

        <Input placeholder='Enter Password' value={values.password} onType={handleChange('password')} iconName='key' isSecure={true}/>
        <Button title='Login in' onTouched={handleSubmit} />
      </View>)}

      </Formik>

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
