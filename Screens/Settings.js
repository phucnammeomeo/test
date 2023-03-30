import React, { useEffect, useState } from "react";
import {
    Text, View, Image, TouchableOpacity, TextInput,
    FlatList,Switch,
    ScrollView
} from "react-native";
import { images, colors, icons, fontsizes } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { UIHeader } from "../components";
import {auth,
    firebaseDatabase,
    firebaseDatabaseRef,
} from '../firebase/firebase'
import { StackActions } from "@react-navigation/native";
function Settings(props) {
    const [isEnabledLockApp,setEnabledLockApp]=useState(true)
    const [isUseFingerprint,setUseFingerprint]=useState(false)
    const [isEnabledChagePassword,setEnabledChangePassword]=useState(true)
    const {navigation,route}=props
    const {navigate,goBack}=navigation
    return <View style={{
        flex: 1,
    }}>
        <UIHeader title={"Settings"} />
        <ScrollView>
            <View style={{
                height: 40,
                backgroundColor: '#rgba(0,0,0,0.2)',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontsizes.h6,
                    color: 'black',
                    fontWeight: 'bold',
                    paddingStart: 10,
                }}>Common</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon
                    name='globe'
                    style={{ marginStart: 10 }}
                    size={20} color={'black'}
                />
                <Text style={{
                    color: 'black',
                    fontSize: fontsizes.h6,
                    color: 'black',
                    paddingStart: 10,
                }}>Language</Text>
                <View style={{ flex: 1 }} />
                <Text style={{
                    color: 'black',
                    fontSize: fontsizes.h6,
                    color: 'black',
                    paddingEnd: 10,
                    opacity: 0.5,
                }}>English</Text>
                <Icon
                    name='chevron-right'
                    onPress={()=>{
                        alert(`you press item's name:${icons.name}` )
                    }}
                    style={{
                        paddingEnd: 10,
                        opacity: 0.5,
                    }}
                    size={20} color={'black'}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon
                    name='cloud'
                    style={{ marginStart: 10 }}
                    size={18} color={'black'}
                />
                <Text style={{
                    color: 'black',
                    fontSize: fontsizes.h6,
                    color: 'black',
                    paddingStart: 10,
                }}>Environment</Text>
                <View style={{ flex: 1 }} />
                <Text style={{
                    color: 'black',
                    fontSize: fontsizes.h6,
                    color: 'black',
                    paddingEnd: 10,
                    opacity: 0.5,
                }}>production</Text>
                <Icon
                    name='chevron-right'
                    style={{
                        paddingEnd: 10,
                        opacity: 0.5,
                    }}
                    size={20} color={'black'}
                />
            </View>
            <View style={{
                height: 40,
                backgroundColor: '#rgba(0,0,0,0.2)',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontsizes.h6,
                    color: 'black',
                    fontWeight: 'bold',
                    paddingStart: 10,
                }}>Account</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon
                    name='phone'
                    style={{ marginStart: 10 }}
                    size={18} color={'black'}
                />
                <Text style={{
                    color: 'black',
                    fontSize: fontsizes.h6,
                    color: 'black',
                    paddingStart: 10,
                }}>Phone number</Text>
                <View style={{ flex: 1 }} />
                <Icon
                    name='chevron-right'
                    style={{
                        paddingEnd: 10,
                        opacity: 0.5,
                    }}
                    size={20} color={'black'}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon
                    name='envelope'
                    style={{ marginStart: 10 }}
                    size={18} color={'black'}
                />
                <Text style={{
                    color: 'black',
                    fontSize: fontsizes.h6,
                    color: 'black',
                    paddingStart: 10,
                }}>Email</Text>
                <View style={{ flex: 1 }} />
                <Text style={{
                    color: 'black',
                    fontSize: fontsizes.h6,
                    color: 'black',
                    paddingEnd: 10,
                    opacity: 0.5,
                }}></Text>
                <Icon
                    name='chevron-right'
                    style={{
                        paddingEnd: 10,
                        opacity: 0.5,
                    }}
                    size={20} color={'black'}
                />
            </View>
            <TouchableOpacity style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }} onPress={()=>{
                // auth.signOut()
                // navigation.dispatch(StackActions.popToTop)
                navigate('Welcome')
            }}>
                <Icon
                    name='sign-out-alt'
                    style={{ marginStart: 10 }}
                    size={18} color={'black'}
                />
                <Text style={{
                    color: 'black',
                    fontSize: fontsizes.h6,
                    color: 'black',
                    paddingStart: 10,
                }}>Sign out</Text>
                <View style={{ flex: 1 }} />
                <Icon
                    name='chevron-right'
                    style={{
                        paddingEnd: 10,
                        opacity: 0.5,
                    }}
                    size={20} color={'black'}
                />
            </TouchableOpacity>
            <View style={{
                height: 40,
                backgroundColor: '#rgba(0,0,0,0.2)',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontsizes.h6,
                    color: 'black',
                    fontWeight: 'bold',
                    paddingStart: 10,
                }}>Security</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon
                    name='door-closed'
                    style={{ marginStart: 10 }}
                    size={18} color={'black'}
                />
                <Text style={{
                    color: 'black',
                    fontSize: fontsizes.h6,
                    color: 'black',
                    paddingStart: 10,
                }}>Lock app in background</Text>
                <View style={{ flex: 1 }} />
                <Switch
                    trackColor={{ false: '#767577', true: colors.backgroundcolor }}
                    thumbColor={isEnabledLockApp ? colors.primary : 'black'}
                    //ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>{
                        setEnabledLockApp(!isEnabledLockApp)
                    }}
                    value={isEnabledLockApp}
                    style={{marginEnd:10}}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon
                    name='fingerprint'
                    style={{ marginStart: 10 }}
                    size={18} color={'black'}
                />
                <Text style={{
                    color: 'black',
                    fontSize: fontsizes.h6,
                    color: 'black',
                    paddingStart: 10,
                }}>Use Fingerprint</Text>
                <View style={{ flex: 1 }} />
                <Switch
                    trackColor={{ false: '#767577', true: colors.backgroundcolor }}
                    thumbColor={isUseFingerprint ? colors.primary : 'black'}
                    //ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>{
                        setUseFingerprint(!isUseFingerprint)
                    }}
                    value={isUseFingerprint}
                    style={{marginEnd:10}}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon
                    name='lock'
                    style={{ marginStart: 10 }}
                    size={18} color={'black'}
                />
                <Text style={{
                    color: 'black',
                    fontSize: fontsizes.h6,
                    color: 'black',
                    paddingStart: 10,
                }}>Change Password</Text>
                <View style={{ flex: 1 }} />
                <Switch
                    trackColor={{ false: '#767577', true: colors.backgroundcolor }}
                    thumbColor={isEnabledChagePassword ? colors.primary : 'black'}
                    //ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>{
                        setEnabledChangePassword(!isEnabledChagePassword)
                    }}
                    value={isEnabledChagePassword}
                    style={{marginEnd:10}}
                />
            </View>
            <View style={{
                height: 40,
                backgroundColor: '#rgba(0,0,0,0.2)',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontsizes.h6,
                    color: 'black',
                    fontWeight: 'bold',
                    paddingStart: 10,
                }}>Misc</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon
                    name='file'
                    style={{ marginStart: 10 }}
                    size={20} color={'black'}
                />
                <Text style={{
                    color: 'black',
                    fontSize: fontsizes.h6,
                    color: 'black',
                    paddingStart: 10,
                }}>Terms of Service</Text>
                <View style={{ flex: 1 }} />
                <Icon
                    name='chevron-right'
                    style={{
                        paddingEnd: 10,
                        opacity: 0.5,
                    }}
                    size={20} color={'black'}/>
            </View> 
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon
                    name='file-contract'
                    style={{ marginStart: 10 }}
                    size={20} color={'black'}
                />
                <Text style={{
                    color: 'black',
                    fontSize: fontsizes.h6,
                    color: 'black',
                    paddingStart: 10,
                }}>Open source licenses</Text>
                <View style={{ flex: 1 }} />
                <Icon
                    name='chevron-right'
                    style={{
                        paddingEnd: 10,
                        opacity: 0.5,
                    }}
                    size={20} color={'black'}/>
            </View> 
        </ScrollView>
    </View>
}
export default Settings