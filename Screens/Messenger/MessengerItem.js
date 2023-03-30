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
  Dimensions,
} from 'react-native';
import {images, colors, icons, fontsizes} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {screenWidth} from '../../utilies/validations';

function MessengerItem(props) {
  const {onPress} = props;
  const {url, isSender, messenger, timestamp, showUrl} = props.item;
  return isSender == false ? (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
      }}>
      {showUrl == true ? (
        <Image
          style={{
            width: 40,
            height: 40,
            resizeMode: 'cover',
            borderRadius: 20,
            marginRight: 15,
            marginStart: 10,
          }}
          source={{
            uri: url,
          }}
        />
      ) : (
        <View
          style={{width: 40, height: 40, marginRight: 15, marginStart: 10}}
        />
      )}
      <View
        style={{
          width: screenWidth * 0.7,
          flexDirection: 'row',
        }}>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: fontsizes.h4,
              paddingVertical: 7,
              backgroundColor: colors.messenger,
              paddingHorizontal: 7,
              borderRadius: 10,
            }}>
            {messenger}
          </Text>
        </View>
        <View style={{width: 20}}></View>
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: screenWidth * 0.7,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <View style={{width: 40}}></View>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: fontsizes.h4,
              paddingVertical: 7,
              backgroundColor: colors.messenger,
              paddingHorizontal: 7,
              borderRadius: 10,
            }}>
            {messenger}
          </Text>
        </View>
      </View>
      {showUrl == false ? (
        <Image
          style={{
            width: 40,
            height: 40,
            resizeMode: 'cover',
            borderRadius: 20,
            marginRight: 15,
            marginStart: 10,
          }}
          source={{
            uri: url,
          }}
        />
      ) : (
        <View
          style={{width: 40, height: 40, marginRight: 15, marginStart: 10}}
        />
      )}
    </TouchableOpacity>
  );
}
export default MessengerItem;
