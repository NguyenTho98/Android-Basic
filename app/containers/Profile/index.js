import  React,{Fragment,useState}  from 'react';
import {View,Image,TouchableOpacity,FlatList} from 'react-native';
import { ListItem,Text } from 'react-native-elements'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

const ProfileScreen  = ({navigation}) => {   
    
keyExtractor = (item, index) => index.toString()

renderItem = ({ item }) => (
 <View style={{width:200,height:200,marginLeft:50}}>
     <Image source={{uri:item.avatar_url}} style={{height:150}}></Image>
     <Text >{item.name}</Text>
 </View>
)
    return(
        <Fragment>
            <View>
                <Text>Xin chào Thọ!! Đây là trang Profile</Text>
            </View>
            <View>
                <FlatList
                keyExtractor={keyExtractor}
                data={list}
                horizontal
                renderItem={renderItem}
                />
            </View>
        </Fragment>
    )
}

export default ProfileScreen;
  