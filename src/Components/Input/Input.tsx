import React from 'react';
import {View, TextInput} from "react-native";
import style from './Input.style';

function Input({placeholder, onType}:any){

  return(
    <View style={style.container}>
       <TextInput placeholder={placeholder} onChangeText={onType} maxLength={40} keyboardAppearance={"dark"}/>
    </View>

  );

}
export default Input;
