import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import {images, colors, icons, fontsizes} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {UIHeader} from '../../components';
import ChatItem from './ChatItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
function language(props){
    const {navigation, route} = props;
    const {navigate, goBack} = navigation;

}
export default language