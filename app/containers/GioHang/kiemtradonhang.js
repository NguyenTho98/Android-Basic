import React  from 'react'
import { View,ScrollView,FlatList } from 'react-native'
import {Text,Card,Icon,Divider,Header} from 'react-native-elements'
import styles from './styles';
const list = [
    {
      id:1,
      quantity:1,   
      name: 'Bánh Trung Thu Số 01',
      price:60000,
    },
    {
        id:2,
        quantity:1,   
        name: 'Bánh Trung Thu Số 01',
        price:60000,
    },
    {
        id:3,
        quantity:1,   
        name: 'Bánh Trung Thu Số 01',
        price:60000,
    },    
  ]
keyExtractor = (item, index) => index.toString()
const KiemTraDonHang  = () =>  {
    renderItemList =({item})=>(
        <View key={item.id} style={{flexDirection:'row',marginTop:10}}>
                <Text style={{flex:1}}>{item.quantity}x</Text>
                <Text style={{flex:9}}>{item.name}</Text>
               <Text>{item.price}đ</Text>
        </View>
      )  
    return (
        <ScrollView>
            <Header
                containerStyle={{height:50,backgroundColor:'#fff'}}
                placement="left"
                centerComponent={{ text: 'Kiểm tra đơn hàng', style: { color: '#000',fontSize:20,marginLeft:10 } }}
                centerContainerStyle={{marginBottom:15}}
            />
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
                <Text> +8435704230</Text>
            </View> 
            <View style={{flexDirection:'row'}}>
                <Icon
                    name='room'
                    size={20}
                ></Icon> 
                <Text> Bắc Ninh</Text>
            </View> 
            </Card>
            <View style={[styles.container]}>
                 <View>                  
                    <View style={styles.contentTieude}>
                        <Text style={styles.tieude}>Công ty Cổ phần Helen Recipe</Text>
                    </View>
                    <FlatList
                    keyExtractor={keyExtractor}
                    data={list}
                    renderItem={renderItemList}
                    />
                    <Divider style={{ backgroundColor: 'blue',marginTop:10,marginBottom:10 }} />
                    <View style={styles.item}>
                    <Text style={{flex:1}}>Tổng tạm tính</Text>
                    <Text>352000 đ</Text>
                </View>
                <View style={styles.item}>
                    <Text style={{flex:1}}>Chiết khấu</Text>
                    <Text>0 đ</Text>
                </View>
                <View>
                    <View style={styles.contentTieude}>
                        <Text style={styles.tieude} >Giao Hàng</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={{flex:1}}>Phí giao hàng</Text>
                        <Text>0 đ</Text>
                    </View>
                   
                </View>
                <View>
                    
                    <View style={styles.contentTieude}>
                        <Text style={styles.tieude}>Phương thức thanh toán</Text>
                    </View>
                   
                    <View style={styles.item}>
                        <Text style={{flex:1}}>Giao hàng tận nơi </Text>
                       
                    </View>
                </View>
                <View>
                    <View style={styles.contentTieude}>
                        <Text style={styles.tieude}>Ghi chú</Text>
                    </View>
                    
                </View>
                   
                </View>
            </View>
        </ScrollView>
    )
}
export default KiemTraDonHang