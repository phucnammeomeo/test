import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import { UIHeader } from '../components'
import {images, colors, icons, fontsizes} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {  auth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    firebaseDatabaseRef,
    firebaseSet,
    firebaseDatabase,
    sendEmailVerification,
    signInWithEmailAndPassword,
} from "../firebase/firebase";
import {
  isValidEmail,
  isValidPassword,
  iaValidRePassword,
} from '../utilies/validations';
function Register(props) {
  const [keyboardIsShown, setKeyboardIsShown] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorRePassword, setErrorRePassword] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('12345678');
  const [repassword, setRePassword] = useState('12345678');
  const isValidationOK = () =>
    email.length > 0 &&
    password.length > 0 &&
    isValidEmail(email) == true &&
    isValidPassword(password) == true &&
    password == repassword;
  useEffect(() => {
    //componentDidMount
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShown(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShown(false);
    });
  });
    const{navigation,route}=props
    const{navigate,goBack}=navigation
  return (
    <View
      style={{
        flex: 100,
        backgroundColor:colors.backgroundcolor,
      }}>
        <UIHeader
        title={'REGISTER'}
        leftIconName={'chevron-left'}
        onPressLeftIcon={() => {goBack()}}
      />
      <View
        style={{
          flex: 25,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: fontsizes.h1,
            fontWeight: 'bold',
            width: '50%',
          }}>
          Register now
        </Text>
        <Image
          tintColor="white"
          source={images.email}
          style={{
            width: 120,
            height: 120,
            alignSelf: 'center',
          }}
        />
      </View>
      <View
        style={{
          flex: 50,
          backgroundColor: 'white',
          margin: 10,
          borderRadius: 10,
        }}>
        <View
          style={{
            marginHorizontal: 15,
            marginTop: 20,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: fontsizes.h6,
            }}>
            Email:
          </Text>
          <TextInput
            onChangeText={text => {
              console.log(isValidEmail(text));
              setErrorEmail(
                isValidEmail(text) == true ? '' : 'email not correct format',
              );
              setEmail(text);
            }}
            placeholder='example@gmail.com'
            value={email}
            placeholderTextColor={'#rgba(0,0,0,0.6)'}
          />
          {errorEmail ? (
            <Text
              style={{
                color: 'red',
                fontSize: fontsizes.h6,
              }}>
              {errorEmail}
            </Text>
          ) : null}
          <View
            style={{
              height: 1,
              backgroundColor: colors.inactive,
              width: '100%',
              marginBottom: 10,
              marginHorizontal: 20,
              alignSelf: 'center',
            }}></View>
        </View>
        <View
          style={{
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: fontsizes.h6,
            }}>
            Password:
          </Text>
          <TextInput
            value={password}
            onChangeText={text => {
              console.log(isValidPassword(text));
              setErrorPassword(
                isValidPassword(text) == true
                  ? ''
                  : 'Password must be at least 8 characters',
              );
              setPassword(text);
            }}
            placeholder="password"
            secureTextEntry={true}
            placeholderTextColor={'#rgba(0,0,0,0.6)'}
          />
          {errorPassword ? (
            <Text
              style={{
                color: 'red',
                fontSize: fontsizes.h6,
              }}>
              {errorPassword}
            </Text>
          ) : null}
          <View
            style={{
              height: 1,
              backgroundColor: colors.inactive,
              width: '100%',
              marginBottom: 10,
              marginHorizontal: 15,
              alignSelf: 'center',
            }}></View>
        </View>
        <View
          style={{
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: fontsizes.h6,
            }}>
            Retype Password:
          </Text>
          <TextInput
            value={repassword}
            onChangeText={text => {
              if (password != text)
                setErrorRePassword('retype password incorrect');
              else setErrorRePassword('');
              setRePassword(text);
            }}
            placeholder="Re-enter your password"
            secureTextEntry={true}
            placeholderTextColor={'#rgba(0,0,0,0.6)'}
          />
          {errorRePassword ? (
            <Text
              style={{
                color: 'red',
                fontSize: fontsizes.h6,
              }}>
              {errorRePassword}
            </Text>
          ) : null}
          <View
            style={{
              height: 1,
              backgroundColor: 'black',
              width: '100%',
              marginBottom: 30,
              marginHorizontal: 15,
              alignSelf: 'center',
            }}></View>
        </View>
        <TouchableOpacity
          disabled={isValidationOK() == false}
          onPress={() => {
            createUserWithEmailAndPassword(auth,email,password)
            .then((userCredential)=>{
                const user=userCredential.user
                sendEmailVerification(user).then(()=>{
                  console.log('Email verification sent')
                })
               
                navigate('Login')
            }).catch((error)=>{
                alert(`cannot signin,error:${error.message}`)
            })
          }}
          style={{
            backgroundColor:
              isValidationOK() == true ? colors.inactive : colors.inactive,
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
            alignSelf: 'center',
            borderRadius: 18,
          }}>
          <Text
            style={{
              padding: 10,
              fontSize: fontsizes.h5,
              fontWeight: 'bold',
              color: 'white',
            }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>

      {keyboardIsShown == false && (
        <View
          style={{
            flex: 25,
          }}>
          <View
            style={{
              height: 40,
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <View style={{height: 1, backgroundColor: 'black', flex: 1}}></View>
            <Text
              style={{
                padding: 10,
                fontSize: fontsizes.h6,
                color: 'black',
                alignSelf: 'center',
                marginHorizontal: 5,
              }}>
              User other methods?
            </Text>
            <View style={{height: 1, backgroundColor: 'black', flex: 1}}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Icon name="facebook" size={35} color={colors.facebook} />
            <View style={{width: 15}}></View>
            <Icon name="google" size={35} color={colors.google} />
          </View>
        </View>
      )}
    </View>
  );
}
export default Register;
