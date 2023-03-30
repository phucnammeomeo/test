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
import {
  onAuthStateChanged,
  firebaseDatabaseRef,
  firebaseSet,
  firebaseDatabase,
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  child,
  get,
  onValue,
} from '../../firebase/firebase';
function Chat(props) {
  const [users, setUsers] = useState([]);
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;
  const [searchText, setSearchtext] = useState('');
  const filteredUsers = () =>
    users.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  useEffect(() => {
    onValue(firebaseDatabaseRef(firebaseDatabase, 'users'), async snapshot => {
      if (snapshot.exists()) {
        let snapshotObject = snapshot.val();
        let stringUser = await AsyncStorage.getItem('user');
        let myUserId = JSON.parse(stringUser).userIdf;
        setUsers(
          Object.keys(snapshotObject)
            .filter(item => item != myUserId)
            .map(eachKey => {
              let eachObject = snapshotObject[eachKey];
              return {
                url: 'https://www.w3schools.com/howto/img_avatar.png',
                name: eachObject.email,
                email: eachObject.email,
                accessToken: eachObject.accessToken,
                numberOfUnreadMessages: 0,
                userId: eachKey,
              };
            }),
        );
      } else {
        console.log('No data available');
      }
    });
  }, []);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <UIHeader
        title={'Notifications'}
        leftIconName={'chevron-left'}
        rightIconName={'search'}
        onPressLeftIcon={() => {
          goBack();
        }}
        onPressRightIcon={() => {}}
      />
      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon
          name="search"
          size={18}
          color={'black'}
          style={{
            position: 'absolute',
            top: 18,
            left: 15,
          }}
        />
        <TextInput
          autoCorrect={false}
          onChangeText={text => {
            setSearchtext(text);
          }}
          style={{
            flex: 1,
            marginEnd: 5,
            backgroundColor: colors.inactive,
            height: 40,
            borderRadius: 5,
            margin: 8,
            opacity: 0.3,
            paddingStart: 30,
          }}
        />
       
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginStart: 10,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: fontsizes.h3,
          }}>
          6 unread messages
        </Text>
        <Icon
          name={'trash'}
          style={{padding: 15}}
          size={15}
          color={'black'}
          onPress={() => {
            alert('you pressed delete');
          }}
        />
      </View>
      <FlatList
        style={{
          flex: 1,
        }}
        data={users}
        renderItem={({item}) => (
          <ChatItem
            onPress={() => {
              navigate('Messenger', {user: item});
            }}
            user={item}
            key={item.url}></ChatItem>           
        )}
        keyExtractor={item => item.url}
      />
    </View>
  );
}
export default Chat;
