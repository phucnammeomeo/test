// import React, { useEffect, useState } from "react";
// import { Text, View, Image, ImageBackground,
//      TouchableOpacity, 
//      TextInput,
//       Platform,
//      Keyboard } from "react-native";
// import { images, colors, icons, fontsizes } from '../../constants';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// function _getColorFromStatus(status){
//     if(status.toLowerCase().trim()== 'opening now'){
//         return colors.success
//     }else if(status.toLowerCase().trim()== 'closing soon'){
//         return colors.alert
//     }else if(status.toLowerCase().trim()== 'coming soon'){
//         return colors.warning
//     }
// }
// function FoodItem(props){
//     let {name,url,status,price,website,socialNetworks}=props.food
//     const {onPress}=props
//     return( <TouchableOpacity 
//         onPress={onPress}
//         style={{
//         height:150,
//         paddingTop:20,
//         paddingStart:10,
//         flexDirection:'row'
//     }}>
//         <Image
//             style={{
//                 width: 100,
//                 height: 100,
//                 resizeMode: 'cover',
//                 borderRadius: 10,
//                 marginRight: 15,
//             }}
//             source={{
//                 uri: url,
//             }} />
//         <View style={{
//             flex: 1,
//             marginRight:10,
//         }}>
//             <Text style={{
//                 color:'black',
//                 fontSize:fontsizes.h6,
//                 fontWeight:'bold',
//             }}>{name}</Text>
//             <View style={{
//                 height:1,
//                 backgroundColor:'black',                     
//             }}/>
//             <View style={{
//                 flexDirection:'row'
//             }}>
//                 <Text style={{
//                     color: colors.inactive,
//                     fontSize: fontsizes.h6,
//                     fontWeight: 'bold',
//                 }}>Status:</Text>
//                 <Text style={{
//                     color: _getColorFromStatus(status),
//                     fontSize: fontsizes.h6,
//                     fontWeight: 'bold',
//                 }}>{status}</Text>
                
//             </View>
//             <Text style={{
//                     color: colors.inactive,
//                     fontSize: fontsizes.h6,
//                     fontWeight: 'bold',
//                 }}>Price:{price} $</Text>
//                 <Text style={{
//                     color: colors.inactive,
//                     fontSize: fontsizes.h6,
//                     fontWeight: 'bold',
//                 }}>Foodtype:</Text>
//                 <Text style={{
//                     color: colors.inactive,
//                     fontSize: fontsizes.h6,
//                     fontWeight: 'bold',
//                 }}>website:{website}</Text>
//             <View style={{
//                 flexDirection:'row'
//             }}>
//                 {socialNetworks['facebook'] != undefined && <Icon
//                     style={{ paddingEnd: 5 }}
//                     name='facebook'
//                     size={18}
//                     color={colors.inactive} />}
//                 {socialNetworks['twitter'] != undefined && <Icon
//                     style={{ paddingEnd: 5 }}
//                     name='twitter' size={18}
//                     color={colors.inactive}></Icon>}
//                 {socialNetworks['instagram'] != undefined && <Icon
//                     name='instagram'
//                     size={18}
//                     color={colors.inactive}></Icon>}
//             </View>
//         </View>
//     </TouchableOpacity>)
// }
// export default FoodItem