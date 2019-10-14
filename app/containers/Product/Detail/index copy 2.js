import  React, {Fragment,useState} from 'react';
import {View,Text,TouchableOpacity,FlatList, ScrollView} from 'react-native';
import {Icon, Card,Button,ListItem,Overlay,Divider,Input } from 'react-native-elements';
import styles from './styles';
const list = [
  {
    id:1,
    name: 'Hộp trung thu Cúc đại cát',
    image: require('./image/vip.jpg'),
    phone: '+0357004230',
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },
  {
    id:2,
    name: 'Hộp trung thu Nét Việt',
    image: require('./image/doan-vien.jpg'),
    phone: '+0999999999',
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },
  {
    id:3,
    name: 'Hộp trung thu Sen phú quý',
    image: require('./image/net-viet.jpg'),
    phone: '+0999999999',
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },
  {
    id:4,
    name: 'Hộp trung thu Sen vạn phúc',
    image: require('./image/den-long-2-banh.jpg'),
    phone: '+0999999999',
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },
  {
    id:5,
    name: 'Hộp trung thu Nét Việt',
    image: require('./image/doan-vien.jpg'),
    phone: '+0999999999',
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },
  {
    id:6,
    name: 'Hộp trung thu Sen phú quý',
    image: require('./image/net-viet.jpg'),
    phone: '+0999999999',
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },
  {
    id:7,
    name: 'Hộp trung thu Cúc đại cát',
    image: require('./image/vip.jpg'),
    phone: '+0357004230',
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },
  {
    id:9,
    name: 'Hộp trung thu Nét Việt',
    image: require('./image/doan-vien.jpg'),
    phone: '+0999999999',
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },

]

keyExtractor = (item, index) => index.toString()

const DetailListScreen  = ({navigation}) => {
  
  const [viewModel,setViewModel]=useState(false)
  onClickViewModel  = () => {
    
    if(viewModel===false){
      setViewModel(true)
    }else{
      setViewModel(false)
    }
  }

  renderItemDetail =({item})=>(
    <TouchableOpacity key={item.id} onPress={onClickViewModel} >
    <ListItem
    key={item.id}
    leftAvatar={{ avatarStyle:{ borderRadius:5 ,height:100 }, 
      source:  item.image
    ,containerStyle:{width:100,height:100} }}
    title={
        <View >
            <Text style={{fontWeight:'bold'}}>
              {item.name}
            </Text>
        </View>
    }
    subtitle={
        <View key={item.id}>
            <View style={styles.viewProduct}>               
                <View style={styles.viewInfo}>  
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row'}}>
                            <Icon
                            name='arrow-back'
                            size={20}
                            color='#717171'
                            /> 
                            <Text style={{marginLeft:5}}>Đơn giá</Text>
                        </View>
                        <Text>352000</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row'}}>
                            <Icon
                            name='tv'
                            size={20}
                            color='#717171'  
                            /> 
                            <Text style={{marginLeft:5}}>Số lượng</Text>
                        </View>
                        <Text>0</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row'}}>
                            <Icon
                            name='edit'
                            size={20}
                            color='#717171'
                            
                            /> 
                            <Text style={{marginLeft:5}}>Thành tiền</Text>
                        </View>
                        <Text>0</Text>
                    </View>
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
          <ScrollView>
            <View >
              <Card>
                <Text>
                    Công Ty Số 01
                </Text>
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
                        +0357004230
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
                        Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội
                      </Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',alignSelf:'center',}}>
                  <Text style={{marginRight:5}}>Đơn hàng</Text>
                  <Text style={{marginLeft:5}}>Doanh thu</Text>
                </View>
              </Card>
            </View>
            <View>
                <FlatList
                  keyExtractor={keyExtractor}
                  data={list}
                  renderItem={renderItemDetail}
                />
                <Overlay
                        isVisible={viewModel}
                        onBackdropPress={onClickViewModel}
                        windowBackgroundColor="rgba(0.2,0.2,0.2,0.2)"
                        overlayBackgroundColor="white"
                        width="80%"
                        height={180}
                        borderRadius={10}
                      >
                        <View style={{flexDirection:'row'}}>
                          <Text style={{flex:1}}>Hộp trung thu Nét Việt</Text>
                          <Text>352000</Text>
                        </View>
                       
                        <Divider></Divider>
                        <View style={{flexDirection:'row',justifyContent:'center',marginTop:30}}>
                          <Button
                            containerStyle={{width:40}}
                            icon={
                              <Icon
                                name="remove"
                                size={20}
                                color="white"
                              />
                            }
                          />
                          <Input 
                              inputContainerStyle={{borderBottomWidth:0}}
                              containerStyle={{borderColor:'black',borderWidth:1,width:50,height:37,marginLeft:10,marginRight:10,borderRadius:5}}
                          />
                           <Button
                            containerStyle={{width:40}}
                            icon={
                              <Icon
                                name="add"
                                size={20}
                                color="white"
                              />
                            }
                          />
                        </View>
                        <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center',backgroundColor:'#f99f1a',height:40,marginTop:20,borderRadius:5}}>
                         
                          <Text style={{color:'white',paddingLeft:10,paddingRight:10}}>
                            Thêm vào giỏ hàng - 352000
                          </Text>
                        </View>
                    </Overlay>   
            </View>  
          
          </ScrollView> 
            <View style={{position:'absolute',bottom:0,width: '100%',}}>
              <Button
                  title="Go to Product Detail"
                  onPress={onClickViewModel}
              />
          </View>    
    </Fragment>  
    )

}
export default DetailListScreen;