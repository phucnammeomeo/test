import React, { Component, useState } from "react";
import {
    SafeAreaView,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    FlatList,

} from "react-native";
import  {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {creatBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Welcome,Login,Register,Messenger, language } from "../Screens";
import UITab from "./UITab";
const Stack= createNativeStackNavigator()
function App (props){
   return <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name={"Welcome"} component={Welcome}/>
            <Stack.Screen name={"Login"} component={Login}options={{
                headerShown:false
            }}/>
            <Stack.Screen name={"Register"} component={Register}options={{
                headerShown:false
            }} />
            <Stack.Screen name={"UITab"} component={UITab} options={{
                headerShown:false
            }}/>
            <Stack.Screen name={"Messenger"} component={Messenger}/>
            <Stack.Screen name={"language"} component={language}/>
        </Stack.Navigator>
    </NavigationContainer>
}
export default App