import  React,{Fragment,useState}  from 'react';
import {View,Button,TouchableOpacity,FlatList} from 'react-native';
import { ListItem,Text } from 'react-native-elements'

const list = [
  {
    name: 'Amy Farha',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amy Farha',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amy Farha',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

const HomeScreen  = ({navigation}) => {   
    
keyExtractor = (item, index) => index.toString()

renderItem = ({ item }) => (
  <ListItem
    title={item.name}
    subtitle={item.subtitle}
    leftAvatar={{
      source: item.avatar_url && { uri: item.avatar_url },
      title: item.name[0]
    }}
    chevron
  />
)
    return(
        <Fragment>
            <View>
                <Text>Xin chào Thọ!! Đây là trang Home</Text>
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

export default HomeScreen;
  