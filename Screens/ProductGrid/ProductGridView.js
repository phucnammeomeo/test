// import React, { useEffect, useState } from "react";
// import { Text, View, Image, TouchableOpacity, TextInput,
//      FlatList} from "react-native";;
// import GridItem from "./GridItem";
// function ProducGridView (props) {
//      const [products,setProducts]=useState([
//           {
//                productsname:'samsung sc5573',
//                url:'https://images.samsung.com/is/image/samsung/assets/sa_en/p6_gro3/p6_initial_pcd/p6_initial_vacuum-cleane/MO_long_lasting_power1.jpg?$720_1080_JPG$',
//                price:75,
//                specification:[
//                     'Dry clean',
//                     'cyclone filter',
//                     'convenience cord storage',
//                ],
//                review:19,
//                stars:5,
//           },
//           {
//                productsname:'MC-CL609HN49',
//                url:'https://www.panasonic.com/content/dam/pim/vn/en/MC/MC-CL6/MC-CL609/ast-1913887.png.pub.png?resize=272%3A204',
//                price:75,
//                specification:[
//                     'Dry clean',
//                     'cyclone filter',
//                     'convenience cord storage',
//                ],
//                review:56,
//                stars:5,
//           },
//           {
//                productsname:'MC-CL607RN49',
//                url:'https://www.panasonic.com/content/dam/pim/vn/en/MC/MC-CL6/MC-CL607/ast-1913886.png.pub.png?resize=272%3A204',
//                price:75,
//                specification:[
//                     'Dry clean',
//                     'cyclone filter',
//                     'convenience cord storage',
//                ],
//                review:13,
//                stars:5,
//           },
//           {
//                productsname:'MC-CL605KN49',
//                url:'https://www.panasonic.com/content/dam/pim/vn/en/MC/MC-CL6/MC-CL605/ast-1913885.png.pub.png?resize=272%3A204',
//                price:75,
//                specification:[
//                     'Dry clean',
//                     'cyclone filter',
//                     'convenience cord storage',
//                ],
//                review:19,
//                stars:3,
//           },
//           {
//                productsname:'MC-CL603GN49',
//                url:'https://www.panasonic.com/content/dam/pim/vn/en/MC/MC-CL6/MC-CL603/ast-1913884.png.pub.png?resize=272%3A204',
//                price:78,
//                specification:[
//                     'heavy',
//                     'work on carpet',
//                     'exelent filtration',
//                ],
//                review:125,
//                stars:5,
//           },
//           {
//                productsname:'MC-CL601AN49',
//                url:'https://www.panasonic.com/content/dam/pim/vn/en/MC/MC-CL6/MC-CL601/ast-1913882.png.pub.png?resize=272%3A204',
//                price:87,
//                specification:[
//                     'light weight',
//                     'work on carpet',
//                     'exelent filtration',
//                ],
//                review:189,
//                stars:1,
//           },
//           {
//                productsname:'MC-CL789RN49',
//                url:'https://www.panasonic.com/content/dam/pim/vn/en/MC/MC-CL7/MC-CL789/ast-1201850.png.pub.png?resize=272%3A204',
//                price:9187,
//                specification:[
//                     'quiet',
//                     'work on carpet',
//                     'exelent filtration',
//                ],
//                review:111,
//                stars:3,
//           },
//           {
//                productsname:'MC-CL787TN49',
//                url:'https://www.panasonic.com/content/dam/pim/vn/en/MC/MC-CL7/MC-CL787/ast-1201849.png.pub.png?resize=272%3A204',
//                price:98,
//                specification:[
//                     'comes in white and black',
//                     'work on carpet',
//                     'exelent filtration',
//                ],
//                review:182,
//                stars:4,
//           },
//           {
//                productsname:'MC-CL575KN49',
//                url:'https://www.panasonic.com/content/dam/pim/vn/en/MC/MC-CL5/MC-CL575/ast-1201848.png.pub.png?resize=272%3A204',
//                price:80,
//                specification:[
//                     'heavy',
//                     'work on carpet',
//                     'exelent filtration',
//                ],
//                review:85,
//                stars:5,
//           },
//           {
//                productsname:'MC-CL573AN49',
//                url:'https://www.panasonic.com/content/dam/pim/vn/en/MC/MC-CL5/MC-CL573/ast-1201847.png.pub.png?resize=272%3A204',
//                price:90,
//                specification:[
//                     'high quality',
//                     'work on carpet',
//                     'exelent filtration',
//                ],
//                review:125,
//                stars:2,
//           },
//           {
//                productsname:'MC-CL571GN49',
//                url:'https://www.panasonic.com/content/dam/pim/vn/en/MC/MC-CL5/MC-CL571/ast-1140310.jpg.pub.crop.pc.thumb.640.1200.jpg',
//                price:100,
//                specification:[
//                     'small',
//                     'powerful',
//                     'exelent filtration',
//                ],
//                review:165,
//                stars:3,
//           },
//      ])
//      return <View style={{
//           flex:1,
//           backgroundColor:'white',
//      }}>
//           <FlatList 
//           style={{marginTop:5}}
//           data={products}
//           numColumns={2}
//           keyExtractor={item=>item.productsname}
//           renderItem={({item,index})=><GridItem
//            item={item} index={index}
//            onPress={()=>{
//                let clonedProducts = products.map(eachProduct => {
//                     if (item.productsname == eachProduct.productsname) {
//                         // return {...eachProduct,isSaved:true}
//                         return {
//                             ...eachProduct, isSaved: eachProduct.isSaved == false
//                                 || eachProduct.isSaved == undefined ? true : false
//                          // nếu eachproduct.issaved=false hoặc || product.issaved =undefined 
//                          // thì(?) nó trả về true hoặc trả về false
//                         }
//                     }
//                     return eachProduct
//                 })
//                 setProducts(clonedProducts)
//            }}
//            />}
//           />
//      </View>
// }
// export default ProducGridView