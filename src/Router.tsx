import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import LoginScreen from "./Pages/LoginScreen";
import MainMenu from "./Pages/MainMenu";

const Router = () =>{

  const Stack = createNativeStackNavigator();

  return(

    <NavigationContainer>

      <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{headerShown:false}}>
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='MainMenu' component={MainMenu} />
      </Stack.Navigator>

    </NavigationContainer>

  );


}

export default Router;
