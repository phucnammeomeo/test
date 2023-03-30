import { TouchableOpacity,Text } from "react-native";
import React,{Component} from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../constants';
function UIbutton(props){
    const {onPress,title,isSelected}=props 
    return <TouchableOpacity
        onPress={() => {
            onPress()
        }}
        style={{
            borderColor: colors.backgroundcolor,
            borderWidth: 2,
            height: 45,
            borderRadius: 10,
            marginHorizontal: 20,
            marginVertical: 10,
            alignItems: 'center',
            justifyContent:'center',
            backgroundColor: isSelected ==true?colors.backgroundcolor:null,
        }}>

        {isSelected==true&&<Icon
            size={20}
            name={"check"}
            style={{
                color: 'green',
                position: 'absolute',
                left: 10,
                top: 10,
            }} />}
        <Text style={{
            color: isSelected==true ?colors.primary:'white',
            fontSize: 20,
            alignItems: 'center',
            justifyContent: 'center',

        }}>
            {props.title}
        </Text>
    </TouchableOpacity>
}
export default UIbutton