import React from 'react'
import { View } from 'react-native';
import {Text,Card } from 'react-native-elements';
const TheoDoiDoanhThuScreen  = () =>  {

    return (
        <View>
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
                    marginBottom:20
                    }}       
            >     
                <View style={{flexDirection:'row',marginBottom:5}}>
                    <Text style={{flex:1}}> Chọn công ty</Text>
                    <Text style={{flex:1,textAlign:'right'}}> 09/2019</Text>
                </View> 
                <View style={{flexDirection:'row',marginBottom:5}}>
                    <Text style={{flex:1}}> Số lượng</Text>
                    <Text style={{flex:1,textAlign:'right'}}> 0</Text>
                </View> 
                <View style={{flexDirection:'row',marginBottom:5}}>
                    <Text style={{flex:1}}> Tổng tiền</Text>
                    <Text style={{flex:1,textAlign:'right'}}> 0đ</Text>
                </View> 
            </Card>
            <View style={{marginLeft:10}}>
                <Text style={{fontWeight:'bold'}}>Đơn hàng đã chốt</Text>
            </View>
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
                    marginBottom:20
                    }}       
            >     
                <View style={{flexDirection:'row',marginBottom:5}}>
                    <Text style={{flex:1}}> Số Lượng</Text>
                    <Text style={{flex:1,textAlign:'right'}}> 0</Text>
                </View> 
                <View style={{flexDirection:'row',marginBottom:5}}>
                    <Text style={{flex:1}}> Tổng doanh thu</Text>
                    <Text style={{flex:1,textAlign:'right'}}> 0đ</Text>
                </View> 
                <View style={{flexDirection:'row',marginBottom:5}}>
                    <Text style={{flex:1}}> Tỉ lệ hoa hồng</Text>
                    <Text style={{flex:1,textAlign:'right'}}> 0 %</Text>
                </View> 
                <View style={{flexDirection:'row',marginBottom:5}}>
                    <Text style={{flex:1}}> Hoa hồng tạm tính</Text>
                    <Text style={{flex:1,textAlign:'right'}}> 0 đ</Text>
                </View>
                <View style={{flexDirection:'row',marginBottom:5}}>
                    <Text style={{flex:1}}> Đã thanh toán</Text>
                    <Text style={{flex:1,textAlign:'right'}}> 0 %</Text>
                </View>
            </Card>
        </View>
    )
}
export default TheoDoiDoanhThuScreen