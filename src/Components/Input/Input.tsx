import React from 'react';
import {View, TextInput} from "react-native";
import style from './Input.style';
// @ts-ignore
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

function Input({placeholder, onType, value, iconName, isSecure}:any){

  return(
    <View style={style.container}>
       <TextInput style={style.input}  placeholder={placeholder} onChangeText={onType}
                  maxLength={40} keyboardAppearance={"dark"} value={value} secureTextEntry={isSecure}/>
            <Icons name={iconName} size={30} />
    </View>

  );

}
export default Input;
