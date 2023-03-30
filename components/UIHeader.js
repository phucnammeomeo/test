import { TouchableOpacity, Text, View, } from "react-native";
import React, { Component } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, fontsizes } from '../constants';
function UIHeader(props) {
    const { title,
        leftIconName = "",
        rightIconName = "",
        onPressLeftIcon,
        onPressRightIcon
    } = props
    return <View style={{
        height: 55,
        backgroundColor: colors.backgroundcolor,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
    }}>
        {leftIconName !=undefined?<Icon
            name={leftIconName}
            style={{ padding: 10 }}
            size={25} color={'white'} 
            onPress={onPressLeftIcon}
            />:<View style={{width:50,height:50,backgroundColor:'white'}}/>}
        <Text style={{
            fontSize: fontsizes.h4,
            alignSelf: 'center',
            lineHeight: 42,
            color: 'white',
        }}>{title}</Text>
        {rightIconName !=undefined?<Icon
            name={rightIconName}
            style={{ padding: 10 }}
            size={25} color={'white'} 
            onPress={onPressRightIcon}
            />:<View style={{width:50,height:50,backgroundColor:'white'}}/>}
    </View>
}
export default UIHeader