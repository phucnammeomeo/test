// import React, { useEffect, useState } from "react";
// import { Text, View, Image, TouchableOpacity, TextInput,
//      FlatList } from "react-native";
// import { images, colors, icons, fontsizes } from '../../constants';
// import FoodItem from "./FoodItem";
// import Icon from 'react-native-vector-icons/FontAwesome5';


// function Foodlist(props){
//     const[foods,setFoods]=useState([
//         {
//             name: 'Paela valenciana',
//             url: 'https://img.taste.com.au/gkxJPaGT/taste/2012/01/paella-valenciana-152527-2.jpg',
//             status: 'coming soon',
//             price: 5223.56,
//             website: 'https://edition.cnn.com',
//             socialNetworks:
//             {
//                 facebook: 'httpd://www.facebook.com/',
//                 twitter: 'https://twitter.com/LostinBrittany',
//                 instagram: 'https://www.instagram/'
//             }

//         },
//         {
//             name: 'Gazpacho',
//             url: 'https://www.acouplecooks.com/wp-content/uploads/2021/07/Gazpacho-002s.jpg',
//             status: 'opening now',
//             price: 1124.56,
//             website: 'https://edition.cnn.com',
//             socialNetworks:
//             {
//                 twitter: 'https://twitter.com/LostinBrittany',
//                 instagram: 'https://www.instagram/'
//             }

//         },
//         {
//             name: 'Pimientos de Pradon',
//             url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Pementos_de_Padron.jpg/1200px-Pementos_de_Padron.jpg',
//             status: 'coming soon',
//             price: 2342.56,
//             website: 'https://edition.cnn.com',
//             socialNetworks:
//             {
//                 facebook: 'httpd://www.facebook.com/',
//             }

//         },
//         {
//             name: 'Albondigas',
//             url: 'https://carlsbadcravings.com/wp-content/uploads/2019/10/albondigas-soup-23.jpg',
//             status: 'closing soon',
//             price: 2354.56,
//             website: 'https://edition.cnn.com',
//             socialNetworks:
//             {
//                 instagram: 'https://www.instagram/'
//             }

//         },
//         {
//             name: 'abxcc',
//             url: 'https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg',
//             status: 'closing soon',
//             price: 23152,
//             website: 'https://edition.cnn.com',
//             socialNetworks:
//             {
//                 instagram: 'https://www.instagram/'
//             }

//         },
//         {
//             name: 'Kim chi',
//             url: 'https://cdn.huongnghiepaau.com/wp-content/uploads/2022/06/kim-chi-cai-thao-chua-vi-han-quoc.jpg',
//             status: 'coming soon',
//             price: 179.6,
//             website: 'https://edition.cnn.com',
//             socialNetworks:
//             {
//                 twitter: 'https://twitter.com/LostinBrittany',
//                 instagram: 'https://www.instagram/'
//             }

//         },
//         {
//             name: 'Sushi',
//             url: 'https://vinmec-prod.s3.amazonaws.com/images/20210317_143609_055773_sushi.max-1800x1800.jpg',
//             status: 'opening now',
//             price: 1515,
//             website: 'https://edition.cnn.com',
//             socialNetworks:
//             {
//                 twitter: 'https://twitter.com/LostinBrittany',
//                 instagram: 'https://www.instagram/'
//             }
//         },
//     ])
//     const [categories,setCategories]=useState([
//         {
//             name:'BBQ',
//             url:'https://chefjob.vn/wp-content/uploads/2020/02/dinh-nghia-bbq-la-gi.jpg',
//         },
//         {
//             name:'Breakfast',
//             url:'https://simply-delicious-food.com/wp-content/uploads/2022/09/Breakfast-board28.jpg',
//         },
//         {
//             name:'Coffee',
//             url:'http://file.hstatic.net/1000075078/article/blog_f80b599183c340bca744c174e7ab2af8.jpg',
//         },
//         {
//             name:'noodle',
//             url:'https://static.onecms.io/wp-content/uploads/sites/43/2023/01/12/270770-garlic-noodles-ddmfs-4x3-0189.jpg',
//         },
//         {
//             name:'hotdog',
//             url:'https://kenh14cdn.com/2019/2/2/nationalhotdogdaydeals-1499647553-1549091257251304170997.jpg',
//         },
//         {
//             name:'dinner',
//             url:'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/roast_chicken_for_one_41998_16x9.jpg',
//         },
//         {
//             name:'beverages',
//             url:'https://www.bethlehem.edu/wp-content/uploads/2021/01/873._Types_of_Decorations_and_Accompaniments_for_Non-Alcoholic_Beverages-AJAR.id-01.jpg',
//         },
//         {
//             name:'desert',
//             url:'https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipes/retail/x17/17244-caramel-topped-ice-cream-dessert-760x580.jpg?ext=.jpg',
//         },
//         {
//             name:'lunch',
//             url:'http://img.taste.com.au/bkaitH9W/taste/2016/11/pork-and-bean-burrito-bowl-109208-1.jpeg',
//         },
//         {
//             name:'wine',
//             url:'https://images.immediate.co.uk/production/volatile/sites/30/2022/12/Wine-club-case-9619a91.jpg',
//         },
//         {
//             name:'barbecue',
//             url:'https://bioplanet.vn/wp-content/uploads/2020/08/Blog-post_barbecue.jpg'
//         },
//     ])
//     const [searchText,setSearchtext]=useState('')
//     const filteredFoods= ()=>foods.filter(eachFood=>eachFood.name.toLowerCase()
//                                     .includes(searchText.toLowerCase()))
//     return <View style={{flex:1, backgroundColor:'white'}}>
//         <View>
//             {/* {<ScrollView>
//                 {foods.map(eachfood=><FoodItem food={eachfood}key={eachfood.name}/>)}
//             </ScrollView>} */}
//             <View style={{
//                 marginHorizontal:10,
//                 marginVertical:10,
//                 flexDirection:'row',
//                 alignItems:'center',
//                 }}>
//             <Icon name='search' size={18} color={'black'} 
//                 style={{
//                     position:'absolute',
//                     top:18,
//                     left:15,
//                 }}
//             />
//                 <TextInput                  
//                     autoCorrect={false}
//                     onChangeText={(text)=>{
//                         setSearchtext(text)
//                     }}
//                     style={{flex:1,
//                             marginEnd:5,
//                             backgroundColor:colors.inactive,
//                             height:40,
//                             borderRadius:5,
//                             margin:8,
//                             opacity:0.3,
//                             paddingStart:30,
//                 }}/>
//             <Icon name='bars' size={30} color={'black'} />
//             </View>
//             <View style={{
//                 height:100,
//             }}>
//                 <View 
//                 style={{
//                     height:1,
//                     backgroundColor:colors.inactive
//                     }}/>
//                 <View style={{flex:1}}>
//                 <FlatList 
//                     horizontal={true}
//                     data={categories}
//                     keyExtractor={item=> item.name}
//                     renderItem={({item})=>{
//                         return<TouchableOpacity 
//                         onPress={()=>{
//                             alert(`press ${item.name}`)
//                         }}
//                         style={{
//                             justifyContent:'center',
//                             alignItems:'center',
//                         }}>
//                             <Image
//                                 style={{
//                                     width: 50,
//                                     height: 50,
//                                     resizeMode: 'cover',
//                                     borderRadius: 25,
//                                     margin:10
//                                 }}
//                                 source={{
//                                     uri:item.url
//                                 }} />
//                                 <Text style={{
//                                     color:'black',
//                                     fontSize:fontsizes.h6,
//                                 }}>{item.name}</Text>
//                         </TouchableOpacity>
//                     }}
//                     style={{flex:1,}}>

//                     </FlatList>
//                 </View>
//                 <View style={{height:1,backgroundColor:colors.inactive}}/>
//             </View>
//             </View>
            // <FlatList
            //     data={filteredFoods()}
            //     renderItem={({item})=>
            //     <FoodItem 
            //         onPress={()=>{
            //             alert(`you press item's name:${item.name}`) 
            //         }}    
            //         food={item} key={item.name}/>}
            //     keyExtractor={(eachFood,index)=> eachFood.name}
            //     ListEmptyComponent={
            //         <View style ={{flex:1,
            //             justifyContent:'center',
            //             alignItems:'center',
            //             }}>
            //             <Text style={{
            //                 color:'black',
            //                 fontSize:fontsizes.h3,
            //             }}>No foods found</Text>
            //         </View>}
            // />
       
//     </View>
// }
// export default Foodlist 