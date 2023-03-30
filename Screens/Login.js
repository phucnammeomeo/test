import React, { useEffect, useState } from "react";
import { Text, View, Image, ImageBackground, TouchableOpacity, TextInput, Keyboard } from "react-native";
import { images, colors, icons, fontsizes } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { isValidEmail, isValidPassword } from '../utilies/validations';
import {  auth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    firebaseDatabaseRef,
    firebaseSet,
    firebaseDatabase,
    sendEmailVerification,
    signInWithEmailAndPassword,
} from "../firebase/firebase";
import { UIHeader } from '../components'
function Login(props) {
    const [keyboardIsShown, setKeyboardIsShown] = useState(false)
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('12345678')
    const isValidationOK =()=>email.length>0 && password.length>0
                            && isValidEmail(email)== true
                            && isValidPassword(password)==true
    useEffect(() => {
        //componentDidMount
        Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardIsShown(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardIsShown(false)
        })
    })
    const{navigation,route}=props
    const{navigate,goBack}=navigation
    return <View
        style={{
            flex: 100,
            backgroundColor: colors.backgroundcolor,
        }}>
         <UIHeader
        title={'LOGIN'}
        leftIconName={'chevron-left'}
        onPressLeftIcon={() => {goBack()}}
      />    
        <View style={{
            flex: 35,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
        }}>
            <Text style={{
                color: 'black',
                fontSize: fontsizes.h1,
                fontWeight: 'bold',
                width: '50%',
            }}>Already have an account?</Text>
            <Image
                tintColor={colors.primary}
                source={
                    images.mail
                } style={{
                    width: 120,
                    height: 120,
                    alignSelf: 'center',
                }} />
        </View>
        <View style={{
            flex: 25,
        }}>
            <View style={{
                marginHorizontal: 15,
            }}>
                <Text style={{
                    color: colors.primary,
                    fontSize: fontsizes.h6,
                }}>Email:</Text>
                <TextInput
                    value={email}
                    onChangeText={(text) => {
                        console.log(isValidEmail(text));
                        setErrorEmail(isValidEmail(text) == true ? '' : 'email not correct format')
                        setEmail(text)
                    }}
                    keyboardType='email'
                    placeholder='example@gmail.com'
                    placeholderTextColor={'#rgba(0,0,0,0.6)'}
                />
                {errorEmail ? <Text style={{
                    color: 'red',
                    fontSize: fontsizes.h6,
                }}>{errorEmail}</Text> : null}
                <View style={{
                    height: 1,
                    backgroundColor: colors.primary,
                    width: '100%',
                    marginBottom: 10,
                    marginHorizontal: 15,
                    alignSelf: 'center',
                }}>
                </View>
            </View>
            <View style={{
                marginHorizontal: 15,
            }}>
                <Text style={{
                    color: colors.primary,
                    fontSize: fontsizes.h6,
                }}>Password:</Text>
                <TextInput
                    value={password}
                    onChangeText={(text) => {
                        console.log(isValidPassword(text))
                        setErrorPassword(isValidPassword(text) == true ? '' : 'Password must be at least 8 characters')
                        setPassword(text)
                    }}
                    
                    placeholder='password'
                    secureTextEntry={true}
                    placeholderTextColor={'#rgba(0,0,0,0.6)'}
                />
                {errorPassword ? <Text style={{
                    color: 'red',
                    fontSize: fontsizes.h6,
                }}>{errorPassword}</Text> :null}
                <View style={{
                    height: 1,
                    backgroundColor: colors.primary,
                    width: '100%',
                    marginBottom: 10,
                    marginHorizontal: 15,
                    alignSelf: 'center',
                }}></View>
            </View>
        </View>
        {keyboardIsShown == false && <View style={{
            flex: 15,
        }}>
            <TouchableOpacity
                disabled={isValidationOK()==false}
                onPress={() => {
                    console.log(email,password);
                    signInWithEmailAndPassword(auth,email,password)
                    .then((userCredential)=>{
                        const user=userCredential.user
                        navigate('UITab')
                    }).catch((error)=>{
                        alert(`cannot signin,error:${error.message}`)
                    })
                    
                }}
                style={{
                    backgroundColor: isValidationOK()==true 
                                        ?colors.inactive:colors.inactive,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 50,
                    borderRadius: 5,
                    
                }}>
                <Text style={{
                    padding: 10,
                    fontSize: fontsizes.h5,
                    fontWeight: 'bold',
                    color: 'white'
                }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigate('Register')
                }}
                style={{ padding: 5 }}>
                <Text style={{
                    padding: 10,
                    fontSize: fontsizes.h6,
                    color: colors.primary,
                    alignSelf: 'center',
                }}>New user? Register now</Text>
            </TouchableOpacity>
        </View>}
        {keyboardIsShown == false && <View style={{
            flex: 25,
        }}>
            <View style={{
                height: 40,
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 20,
            }}>
                <View style={{ height: 1, backgroundColor: 'black', flex: 1, }}></View>
                <Text style={{
                    padding: 10,
                    fontSize: fontsizes.h6,
                    color: 'black',
                    alignSelf: 'center',
                    marginHorizontal: 5,
                }}>User other methods?</Text>
                <View style={{ height: 1, backgroundColor: 'black', flex: 1, }}></View>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                <Icon name='facebook' size={35} color={colors.facebook} />
                <View style={{ width: 15 }}></View>
                <Icon name='google' size={35} color={colors.google} />
            </View>
        </View>}
    </View>
}
export default Login

