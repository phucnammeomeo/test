import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Platform,
  Keyboard,
} from 'react-native';
import {images, colors, icons, fontsizes} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

function ChatItem(props) {
  let {name, url, message, 
    numberOfUnreadMessages,userId
  } = props.user;
  const {onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingTop: 20,
        paddingStart: 10,
        flexDirection: 'row',
      }}>
      <View>
        <Image
          style={{
            width: 60,
            height: 60,
            resizeMode: 'cover',
            borderRadius: 30,
            marginRight: 15,
            marginStart: 10,
          }}
          source={{
            uri: url,
          }}></Image>
        {numberOfUnreadMessages > 0 && (
          <Text
            style={{
              color: 'white',
              backgroundColor: 'red',
              position: 'absolute',
              right: 10,
              fontSize: fontsizes.h6,
              borderRadius: 10,
              paddingHorizontal: numberOfUnreadMessages > 9 ? 2 : 4,
            }}>
            {numberOfUnreadMessages}
          </Text>
        )}
      </View>
      <View style={{
        flexDirection:'column',
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: fontsizes.h5,
          fontWeight: 'bold',
        }}>
        {name}
      </Text>
      <Text
        style={{
          color: colors.inactive,
          fontSize: fontsizes.h4,
        }}>
        {message}
      </Text>
      </View>
      <View style={{
        flexDirection:'column',
        flex:1,
        justifyContent:'center',
        alignItems:'flex-end',
        marginRight:10,
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: fontsizes.h6,
          padding:6,
        }}>
        4 minutes ago
      </Text>
      </View>
    </TouchableOpacity>
  );
}
export default ChatItem;
