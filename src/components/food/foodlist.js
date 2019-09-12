/*
 *@description:
 *@author: Wai HoYu
 *@date: 2019-09-11 20:20:29
 *@version: V1.0.5
*/

                                                     
import Taro, {Component} from '@tarojs/taro'         
import {View, Text, Image} from '@tarojs/components' 
import './foodlist.less'
import AddCut from '../addcut/addcut.js'
class FoodList  extends Component {                
   constructor(){                                    
       super(...arguments)                           
       this.state = {}                              
 }                                                   
   render(){   
       let {selectCata, currentList} = this.props 
                             
       return (
                <View className="foodlist">
                    <Text className="foodlist_cata">
                        {selectCata? selectCata.name:""}
                    </Text>
                    <View className="foodlist_forlist">
                            {
                                currentList.map((item, index)=>{
                                    return (
                                        <View key={item.id} className="foodlist_item">
                                                <Image className="foodlist_item_img" src={item.img == 2 ? require('../../assets/img/2.jpg'): require('../../assets/img/1.jpg')}></Image>
                                                <View className="foodlist_item_info">
                                                    <Text>{item.title}</Text>
                                                    <Text>月售：{item.sole}</Text>
                                                    <Text className="price">价格：{item.price}</Text>
                                                    <AddCut food={item}></AddCut>
                                                </View>
                                        </View>
                                    )
                                })
                            }
                    </View>
                </View>
       )                
   }                                                 
 }
 export default FoodList                             