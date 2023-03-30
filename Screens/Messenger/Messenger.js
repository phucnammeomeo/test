import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Keyboard,
} from 'react-native';
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
import {images, colors, icons, fontsizes} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {UIHeader} from '../../components';
import MessengerItem from './MessengerItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
function Messenger(props) {
  const [typedText, setTypedText] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      url: 'https://randomuser.me/api/portraits/men/70.jpg',
      showUrl: true,
      isSender: false,
      messenger: 'hello',
      timestamp: 1678674163000,
    },
  ]);
  useEffect(() => {
    onValue(firebaseDatabaseRef(firebaseDatabase, 'chats'), async snapshot => {
      if (snapshot.exists()) {
        let snapshotObject = snapshot.val();
        let stringUser = await AsyncStorage.getItem('user');
        let myUserId = JSON.parse(stringUser).userId;
        let updatedChatHistory = Object.keys(snapshotObject)
          .filter(item => item.includes(myUserId))
          .map(eachKey => {
            return {
              ...snapshotObject[eachKey],
              isSender: eachKey.split('-')[0] == myUserId,
              url: 'https://randomuser.me/api/portraits/men/70.jpg',
            };
          })
          .sort((item1, item2) => item1.timestamp - item2.timestamp);
        for (let i = 0; i < updatedChatHistory.length; i++) {
          let item = updatedChatHistory[i];
          item.showUrl =
            (i == 0) ? true : item.isSender != updatedChatHistory[i].isSender;
        }
        setChatHistory(updatedChatHistory);
      } else {
        console.log('No data available');
      }
    });
  }, []);
  const {url, userId, name} = props.route.params.user;
  const {navigate, goBack} = props.navigation;

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <UIHeader
        title={name}
        leftIconName={'chevron-left'}
        rightIconName={'ellipsis-v'}
        onPressLeftIcon={() => {
          goBack();
        }}
        onPressRightIcon={() => {}}
      />

      <FlatList
        style={{
          flex: 1,
        }}
        data={chatHistory}
        renderItem={({item}) => (
          <MessengerItem
            onPress={() => {
              alert(`you press item's name:${item.timestamp}`);
            }}
            item={item}
            key={`${item.timestamp}`}
          />
        )}
      />
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          position: 'absolute',
          justifyContent: 'space-between',
          bottom: 0,
          right: 0,
          left: 0,
          alignItems: 'center',
        }}>
        <TextInput
          value={typedText}
          onChangeText={typedText => {
            setTypedText(typedText);
          }}
          style={{
            color: 'black',
            paddingStart: 10,
          }}
          placeholder="enter your message"
          placeholderTextColor={'#rgba(0,0,0,0.6)'}
        />
        <TouchableOpacity
          onPress={async () => {
            if (typedText.trim().length == 0) {
              return;
            }
            let stringUser = await AsyncStorage.getItem('user');
            let myUserId = JSON.parse(stringUser).userId;
            let myFriendUserId = props.route.params.user.userId;
            let newMessengerObject = {
              url: 'https://randomuser.me/api/portraits/men/70.jpg',
              showUrl: false,
              messenger: typedText,
              timestamp: new Date().getTime(),
            };
            Keyboard.dismiss();
            firebaseSet(
              firebaseDatabaseRef(
                firebaseDatabase,
                `chats/${myUserId}-${myFriendUserId}`,
                //"ID1-ID2":(messenger object)
              ),
              newMessengerObject,
            ).then(() => {
              setTypedText('');
            });
          }}>
          <Icon
            name="paper-plane"
            size={25}
            color={colors.primary}
            style={{padding: 10, backgroundColor: colors.inactive}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Messenger;
