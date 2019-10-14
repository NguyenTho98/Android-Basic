import  React, {Fragment} from 'react';
import {View,TouchableOpacity,ScrollView,FlatList } from 'react-native';
import { Button,Text, Divider,Image,Icon,ListItem,  } from 'react-native-elements'
import styles from './styles';
const list = [
  {
    id:1,
    name: 'Công Ty Số 01',
    image: require('./image/vip.jpg'),
    phone: '+0357004230',
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },
  {
    id:2,
    name: 'Công Ty Số 02',
    image: require('./image/doan-vien.jpg'),
    phone: '+0999999999',
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },
  {
    id:3,
    name: 'Công Ty Số 03',
    image: require('./image/net-viet.jpg'),
    phone: '+0999999999',
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },
  {
    id:4,
    name: 'Công Ty Số 04',
    image: require('./image/den-long-2-banh.jpg'),
    phone: '+0999999999',
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },
  {
    id:5,
    name: 'Công Ty Số 04',
    image: require('./image/den-long-2-banh.jpg'),
    phone: '+0999999999',
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },
  {
    id:6,
    name: 'Công Ty Số 04',
    image: require('./image/den-long-2-banh.jpg'),
    phone: '+0999999999',
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },
  {
    id:7,
    name: 'Công Ty Số 04',
    image: require('./image/den-long-2-banh.jpg'),
    phone: '+0999999999',
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },
  {
    id:8,
    name: 'Công Ty Số 04',
    image: require('./image/den-long-2-banh.jpg'),
    phone: '+0999999999',
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },
  {
    id:9,
    name: 'Công Ty Số 04',
    image: require('./image/den-long-2-banh.jpg'),
    phone: '+0999999999',
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },
  {
    id:10,
    name: 'Công Ty Số 04',
    image: require('./image/den-long-2-banh.jpg'),
    phone: '+0999999999',
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },
  {
    id:11,
    name: 'Công Ty Số 04',
    image: require('./image/den-long-2-banh.jpg'),
    phone: '+0999999999',
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },
  {
    id:12,
    name: 'Công Ty Số 04',
    image: require('./image/den-long-2-banh.jpg'),
    phone: '+0999999999',
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },
]

keyExtractor = (item, index) => index.toString()

const ProductListScreen  = ({navigation}) => {


  renderItemList =({item})=>(
    <TouchableOpacity key={item.id} onPress={() => {
      navigation.navigate('ProductDetail')
    }} >
        <ListItem
        key={item.id}
        leftAvatar={{ avatarStyle:{ borderRadius:5 ,height:100 }, 
          source:  item.image
        ,containerStyle:{width:100,height:100} }}
        title={
          <View style={{flexDirection:'row',}}>
            <Text style={{fontWeight:'bold',flex:3,}}>
              {item.name}
            </Text>
            </View>
        }
        subtitle={
          <View>
            <View style={{ backgroundColor:'#137713',height:20,width:70,alignItems:'center',justifyContent:'center',borderRadius:5,marginBottom:3,marginTop:3}}>
              <Text style={{fontSize:12,color:'white'}}>Đã đăng ký</Text>
            </View>
            <View>
                <View style={{flexDirection:'row'}}>
                  <Icon
                  name='phone'
                  size={20}
                  color='#717171'
                  /> 
                  <Text style={{color:'#717171'}}>
                  {item.phone}
                  </Text>
                </View>
                
            </View>
            <View>
                <View style={{flexDirection:'row'}}>
                  <Icon
                  name='edit'
                  size={20}
                  color='#717171'
                  /> 
                  <Text style={{color:'#717171'}}>
                    {item.address}
                  </Text>
                </View>
                
            </View>
          </View>
        }
        bottomDivider
      />
  </TouchableOpacity>
  )
    return(
    <Fragment>
      <View>
        <FlatList
          keyExtractor={keyExtractor}
          data={list}
          renderItem={renderItemList}
        />
      </View> 
     
    </Fragment>  
    )

}
export default ProductListScreen;