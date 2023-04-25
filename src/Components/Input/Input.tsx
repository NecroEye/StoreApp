import React from 'react';
import {View, TextInput} from "react-native";
import style from './Input.style';

function Input({placeholder, onType, value}:any){

  return(
    <View style={style.container}>
       <TextInput placeholder={placeholder} onChangeText={onType} maxLength={40} keyboardAppearance={"dark"} value={value}/>
    </View>

  );

}
export default Input;
