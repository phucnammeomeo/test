import React, { useEffect, useState } from "react";
import { Text, View, Image, ImageBackground, TouchableOpacity } from "react-native";
import { images, icons,colors,fontsizes } from "../constants";
import { UIbutton } from "../components";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { 
    auth,
    onAuthStateChanged,
    firebaseDatabaseRef,
    firebaseSet,
    firebaseDatabase,
} from "../firebase/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
function Welcome(props) {
    //state thay doi=> UI reload
    const [accountTypes, setAccountTypes] = useState([
        /*accountTypes=biến state count
        setAccountTypes=hàm cập nhật state count
        */
        {
            name: 'Influencer',
            isSelected: true,
        },
        {
            name: 'Business',
            isSelected: false,
        },
        {
            name: 'Individual',
            isSelected: false,
        },
    ])
    const{navigation,route}=props
    const{navigate,goBack}=navigation
    useEffect(()=>{
        onAuthStateChanged(auth,(responseUser)=>{
            if(responseUser){
               
                //save data to firebase
                let user={
                    userId:responseUser.uid,
                    email:responseUser.email,
                    tokenKey:responseUser.emailVerified,
                    accessToken:responseUser.accessToken,
                    
                }
                firebaseSet(firebaseDatabaseRef(
                    firebaseDatabase,
                    `user/${responseUser.uid}`
                ),user)
                AsyncStorage.setItem("user",JSON.stringify(user))
                navigate('UITab')
            }
        })
    })
    return <View style={{
        backgroundColor: 'white',
        flex: 100
    }}>
        <ImageBackground
            source={
                images.background
            }
            resizeMode='cover'
            style={{
                flex: 100,

            }}
        >
            <View style={{
                flex: 20,


            }}>
                <View style={{
                    flexDirection: 'row',
                    height: 50,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <Image
                        source={
                            icons.fire
                        }
                        style={{
                            width: 30,
                            height: 30,
                            marginHorizontal: 10,
                            tintColor: 'orange'
                        }}
                    />
                    <Text style={{
                        color: 'white'
                    }}>FRIENDLY CHAT</Text>
                    <View style={{
                        flex: 1
                    }} />
                </View>
            </View>
            <View style={{
                flex: 20,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    color: 'white',
                    marginBottom: 7,
                    fontSize: fontsizes.h5,
                }}>Welcome to</Text>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',//font chữ đậm
                    fontSize:fontsizes.h2,
                }}>FRIENDLY CHAT!</Text>
            </View>
            <View style={{
                flex: 40,
            }} >
               <UIbutton style={{backgroundColor:colors.inactive}}
                    onPress={() => {
                        navigate('Login')
                    }}
                    title={'Login'.toUpperCase()}/>
                <Text style={{                     
                    color: 'white',
                    fontSize:fontsizes.h6, 
                    alignSelf: 'center'
                }}>Want to register new Account ?</Text>
                <TouchableOpacity 
                    onPress={()=>{
                        navigate('Register')
                    }}
                    style={{
                    padding: 5
                    }
                }>
                    <Text style={{
                        color: colors.primary,
                        alignSelf: 'center',
                        fontSize: fontsizes.h5,
                        textDecorationLine: 'underline',
                    }}>Register</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
}
export default Welcome