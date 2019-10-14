import  React,{Fragment,useState}  from 'react';
import { View, ScrollView } from 'react-native';
import { Text,Card,Icon, Divider,ListItem } from 'react-native-elements'
import styles from './styles';
const ChiTietDonHangScreen  = ({navigation}) => {   
    return(
        <ScrollView>
            <Card containerStyle={{
                    borderRadius:7,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    elevation: 3,
                    }}
                title="Công ty Cổ Phần Helen Recipe"
                titleStyle={{textAlign:'left'}}        
            >
                    <View style={{flexDirection:'row'}}>
                           <Icon
                               name='event-note'
                               size={20}
                           ></Icon> 
                           <Text> T019000152</Text>
                   </View> 
                   <View style={{flexDirection:'row'}}>
                           <Icon
                               name='person'
                               size={20}
                           ></Icon> 
                           <Text> Nguyễn Xuân Thọ</Text>
                   </View>  
                   <View style={{flexDirection:'row'}}>
                           <Icon
                               name='phone'
                               size={20}
                           ></Icon> 
                           <Text> +84357004230</Text>
                   </View> 
                   <View style={{flexDirection:'row'}}>
                           <Icon
                               name='room'
                               size={20}
                           ></Icon> 
                           <Text> Bắc Ninh</Text>
                   </View>
                   <View style={{flexDirection:'row'}}>
                           <Icon
                               name='check'
                               size={20}
                           ></Icon> 
                           <Text> Vừa tạo</Text>
                   </View>  
                   <View style={{flexDirection:'row'}}>
                           <Icon
                               name='attach-money'
                               size={20}
                           ></Icon> 
                           <Text> 715000đ</Text>
                   </View> 
            
            </Card>
        <View style={{marginLeft:10,marginRight:10}}>
            <View style={{marginTop:10}}>
                <Text> CHI TIẾT HÀNG HÓA</Text>
                <Divider style={{width:'100%'}}></Divider>
            </View>

            <ListItem
                leftAvatar={{ avatarStyle:{ borderRadius:5 ,height:100, }, 
                    source: require('./image/doan-vien.jpg')
                ,
                containerStyle:{width:100,height:100} }}
                title={
                    <View >
                        <Text style={{fontWeight:'bold'}}>
                            Hộp Trung Cúc đại cát
                        </Text>
                    </View>
                }
                subtitle={
                    <View>
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
                                <Text>715000</Text>
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
                                <Text>1</Text>
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
                                <Text>715000</Text>
                            </View>
                        </View>
                        </View>
                    </View>
                    }
                    bottomDivider
                />
                 <View style={{flexDirection:'row'}}>
                    <Text style={{flex:1}}>Tổng tạm tính</Text>      
                    <Text style={{flex:1,textAlign:'right'}}> 715000đ</Text>
                </View> 
                <View style={{flexDirection:'row'}}>
                    <Text style={{flex:1}}>Tổng thanh toán</Text>      
                    <Text style={{flex:1,textAlign:'right'}}> 715000đ</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{flex:1}}>Chiết khấu</Text>      
                    <Text style={{flex:1,textAlign:'right'}}> 0đ</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{flex:1}}>Phí giao dịch</Text>      
                    <Text style={{flex:1,textAlign:'right'}}> 0đ</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default ChiTietDonHangScreen