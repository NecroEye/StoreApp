import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from "react-native";
import ButtonStyle from "./Button.style";

function Button({title, onTouched}: any) {

    return (
        <TouchableOpacity style={ButtonStyle.container} onPress={onTouched} >
            <Text style={ButtonStyle.title}>{title}</Text>

        </TouchableOpacity>
    );

}

export default Button;
