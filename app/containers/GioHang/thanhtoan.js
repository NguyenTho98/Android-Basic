import  React,{Fragment,useState}  from 'react';
import { View,ScrollView,Switch } from 'react-native';
import { Text,Header } from 'react-native-elements'
import styles from './styles';

const ThanhToanScreen  = ({navigation}) => {   
    const [switchGiaoHang,setSwitchGiaoHang]=useState(false);
    const [switchChiuPhi,setSwitchChiuPhi]=useState(false);
    const [switchHoaDon,setSwitchHoaDon]=useState(false);
    onSwitchGiaoHang  = () => {
        if(switchGiaoHang===false){
            setSwitchGiaoHang(true)
        }
        else
        {
            setSwitchGiaoHang(false)
        }
    }
    onSwitchChiuPhi  = () => {
        if(switchChiuPhi===false){
            setSwitchChiuPhi(true)
        }
        else
        {
            setSwitchChiuPhi(false)
        }
    }
    onSwitchHoaDon  = () => {
        if(switchHoaDon===false){
            setSwitchHoaDon(true)
        }
        else
        {
            setSwitchHoaDon(false)
        }
    }
    return(
        <Fragment>
            <Header
                containerStyle={{height:50,backgroundColor:'#fff'}}
                placement="left"
                centerComponent={{ text: 'Thanh Toán', style: { color: '#000',fontSize:20,marginLeft:10 } }}
                centerContainerStyle={{marginBottom:15}}
            />
            <ScrollView style={styles.container}>
                
               
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
                        <Text style={{flex:1}}>Giao hàng tận nơi </Text>
                        <Switch value={switchGiaoHang} onChange={onSwitchGiaoHang}></Switch>
                    </View>
                    <View style={styles.item}>
                        <Text style={{flex:1}}>Phí giao hàng</Text>
                        <Text>0 đ</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={{flex:1}}>CTV chịu phí </Text>
                        <Switch value={switchChiuPhi} onChange={onSwitchChiuPhi}   ></Switch>
                    </View>
                </View>
                <View>
                    
                    <View style={styles.contentTieude}>
                        <Text style={styles.tieude}>Phương thức thanh toán</Text>
                    </View>
                    <Text style={{fontSize:13,color:'#'}}>* Miễn phí giao hàng nếu thanh toán trực tuyến</Text>
                    <View style={styles.item}>
                        <Text style={{flex:1}}>Giao hàng tận nơi </Text>
                        <Text>0 đ</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.contentTieude}>
                        <Text style={styles.tieude}>Thông tin khác</Text>
                    </View>
                    <View>
                        <Text>Ghi chú</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={{flex:1}}>Cần xuất hóa đơn </Text>
                        <Switch value={switchHoaDon} onChange={onSwitchHoaDon}></Switch>
                    </View>
                </View>
            </ScrollView>
        </Fragment>
    )
}

export default ThanhToanScreen;
  