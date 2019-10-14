import React, { useState,useEffect,Fragment } from 'react'
import { StyleSheet, View, FlatList,TouchableOpacity } from 'react-native';
import { Icon,Text, Divider,ListItem } from 'react-native-elements';

const list = [
    {
      id:1,
      name: 'TO19101231',
      total:725000,
      status:'vừa tạo',
      person:'Nguyễn Xuân Thọ',
      address:'Bắc Ninh',
      date:'04/10/2019',
      statusThanhToan:'Chưa thanh toán',
      phone:'0357004230',
    },
    {
        id:2,
        name: 'TO19101231',
        total:725000,
        status:'vừa tạo',
        person:'Nguyễn Xuân Thọ',
        address:'Bắc Ninh',
        date:'04/10/2019',
        statusThanhToan:'Chưa thanh toán',
        phone:'0357004230',
      },
      {
        id:3,
        name: 'TO19101231',
        total:725000,
        status:'vừa tạo',
        person:'Nguyễn Xuân Thọ',
        address:'Bắc Ninh',
        date:'04/10/2019',
        statusThanhToan:'Chưa thanh toán',
        phone:'0357004230',
      },
      {
        id:4,
        name: 'TO19101231',
        total:725000,
        status:'vừa tạo',
        person:'Nguyễn Xuân Thọ',
        address:'Bắc Ninh',
        date:'04/10/2019',
        statusThanhToan:'Chưa thanh toán',
        phone:'0357004230',
      },
      {
        id:1,
        name: 'TO19101231',
        total:725000,
        status:'vừa tạo',
        person:'Nguyễn Xuân Thọ',
        address:'Bắc Ninh',
        date:'04/10/2019',
        statusThanhToan:'Chưa thanh toán',
        phone:'0357004230',
      },
      {
        id:5,
        name: 'TO19101231',
        total:725000,
        status:'vừa tạo',
        person:'Nguyễn Xuân Thọ',
        address:'Bắc Ninh',
        date:'04/10/2019',
        statusThanhToan:'Chưa thanh toán',
        phone:'0357004230',
      },
    
  ]
keyExtractor = (item, index) => index.toString()
const  DonHangScreen  = ({navigation}) => {
    renderItemList =({item})=>(

            // <ListItem 
            //  bottomDivider
            //         >
      <TouchableOpacity  key={item.id}
      onPress={() => {navigation.navigate('ChiTietDonHang')}}
      >
        <View style={{marginTop:10}}>
            <View style={{flexDirection:'row',marginLeft:10}}>
                <View style={{flex:1}}>
                    <Text>
                       {item.name}
                    </Text>
                   <View style={{flexDirection:'row'}}>
                           <Icon
                               name='check'
                               size={20}
                           ></Icon> 
                           <Text> {item.status}</Text>
                   </View>
                   <View style={{flexDirection:'row'}}>
                           <Icon
                               name='person'
                               size={20}
                           ></Icon> 
                           <Text> {item.person}</Text>
                   </View>
                   <View style={{flexDirection:'row'}}>
                           <Icon
                               name='room'
                               size={20}
                           ></Icon> 
                           <Text> {item.address}</Text>
                   </View>
                   <View style={{flexDirection:'row'}}>
                           <Icon
                               name='access-time'
                               size={20}
                           ></Icon> 
                           <Text> {item.date}</Text>
                   </View>
                </View>
                <View style={{flex:1}}>
                   <View style={{flexDirection:'row'}}>
                           <Icon
                               name='attach-money'
                               size={20}
                           ></Icon> 
                           <Text> {item.total} đ</Text>
                   </View>
                   <View style={{flexDirection:'row'}}>
                           <Icon
                               name='event-note'
                               size={20}
                           ></Icon> 
                           <Text> {item.statusThanhToan}</Text>
                   </View>
                   <View style={{flexDirection:'row'}}>
                           <Icon
                               name='phone'
                               size={20}
                           ></Icon> 
                           <Text> {item.phone}</Text>
                   </View>
       
                </View>
                   
            </View>
            <Divider style={{width:'100%',marginTop:5}} ></Divider>
        </View>
    </TouchableOpacity>
  )
    return (
    <Fragment>
        <FlatList
            keyExtractor={keyExtractor}
            data={list}
            renderItem={renderItemList}
            
        />
    </Fragment>
    )
  }
export default DonHangScreen