import Taro ,{Component} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import Top from './top'


class Head extends Component{
    render(){
        return (
            <View>
                <Top/>
            </View>
        )
    }
}

export default Head
