import  React,{useEffect,useState,Fragment}  from 'react';
import {View,Text,TouchableOpacity,FlatList,Animated,TextInput } from 'react-native';
import {Icon, Card,Image,Button,ListItem,Overlay,Divider,Input } from 'react-native-elements';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import styles from './styles';
const list = [
  {
    id:1,
    name: 'Hộp trung thu Cúc đại cát',
    image: require('./image/vip.jpg'),
    phone: '+0357004230',
    price:1000,
    quantity:0,
    total:0,
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },
  {
    id:2,
    name: 'Hộp trung thu Nét Việt',
    image: require('./image/doan-vien.jpg'),
    phone: '+0999999999',
    price:2000,
    quantity:0,
    total:0,
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },
  {
    id:3,
    name: 'Hộp trung thu Sen phú quý',
    image: require('./image/net-viet.jpg'),
    phone: '+0999999999',
    price:3000,
    quantity:0,
    total:0,
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },
  {
    id:4,
    name: 'Hộp trung thu Sen vạn phúc',
    image: require('./image/den-long-2-banh.jpg'),
    phone: '+0999999999',
    price:4000,
    quantity:0,
    total:0,
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },
  {
    id:5,
    name: 'Hộp trung thu Nét Việt',
    image: require('./image/doan-vien.jpg'),
    phone: '+0999999999',
    price:8000,
    quantity:0,
    total:0,
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },
  {
    id:6,
    name: 'Hộp trung thu Sen phú quý',
    image: require('./image/net-viet.jpg'),
    phone: '+0999999999',
    price:6000,
    quantity:0,
    total:0,
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },
  {
    id:7,
    name: 'Hộp trung thu Cúc đại cát',
    image: require('./image/vip.jpg'),
    phone: '+0357004230',
    price:8000,
    quantity:0,
    total:0,
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },
  {
    id:9,
    name: 'Hộp trung thu Nét Việt',
    image: require('./image/doan-vien.jpg'),
    phone: '+0999999999',
    price:8000,
    quantity:0,
    total:0,
    address:'Nhà A24/D7 KDT mới Dịch Vọng,Cầu Giấy,Hà Nội'
  },

]


keyExtractor = (item, index) => index.toString();

const ProductDetailScreen  = ({navigation}) => {
  const [dataProduct,setDataProduct]=useState([])
  const [viewModel,setViewModel]=useState(false);
  const [viewButtonCart,setViewButtonCart]=useState(false);
  const [item,setItem]=useState({});
  const [itemTG,setItemTG]=useState({})
  const [dataCart,setDataCart]=useState([]);
  const [scrollYAnimatedValue,setScrollYAnimatedValue]=useState(new Animated.Value(0));
  // load data đầu tiên
  useEffect(()=>{
    setDataProduct(list)
  },[])
  
    onClickViewModel  = (item) => {
      const tg={};
      tg.id=item.id;
      tg.name=item.name;
      tg.image=item.image;
      tg.phone=item.phone;
      tg.price=item.price;
      if(item.quantity===0){
        tg.quantity=item.quantity+1;
      }else{
        tg.quantity=item.quantity      
      }
      tg.total=item.total+item.price
      setItem(tg);
      setItemTG(tg);
      if(viewModel===false){
        setViewModel(true)
      }else{
        setViewModel(false)
      }
    }
   const addQuantity  = () => {
    const tg={};
      tg.id=item.id;
      tg.name=item.name;
      tg.image=item.image;
      tg.phone=item.phone;
      tg.price=item.price;
      tg.quantity=item.quantity+1;
      tg.total=item.price * tg.quantity;
      setItemTG(tg);
      setItem(tg);
    }
   const removeQuantity  = () => {
     if(item.quantity!==0){
      const tg={};
      tg.id=item.id;
      tg.name=item.name;
      tg.image=item.image;
      tg.phone=item.phone;
      tg.price=item.price;
      tg.quantity=item.quantity-1;
      tg.total=item.price*tg.quantity;
      setItem(tg);
      setItemTG(tg);
     }}
   const renderButtonCart  = () => {
      setViewModel(false)
      setViewButtonCart(true)
      const item=itemTG;
      const items=dataCart;
      items.push(item);
      setDataCart(items);
     
      dataProduct.forEach((value,key)=>{
        if(value.id===item.id){
          value.name=item.name;
          value.image=item.image;
          value.phone=item.phone;
          value.price=item.price;
          value.quantity=item.quantity
          value.total=item.total;
        }
      })
   }
   const renderButtonQuayLai  = () => {
    setViewModel(false)
    
    var tempData= dataCart;
    tempData = tempData.filter(item => item.id !== itemTG.id)
    setDataCart(tempData);
    if(tempData.length===0){
      setViewButtonCart(false)
    };
    dataProduct.forEach((value,key)=>{
      if(value.id===itemTG.id){
        value.name=item.name;
        value.image=item.image;
        value.phone=item.phone;
        value.price=item.price;
        value.quantity=item.quantity
        value.total=item.total;
      }
    })
 }

   const ButtonAddGioHang  = () => {
      if(item.quantity===0){
        return(
          <TouchableOpacity 
          style={{justifyContent:'center',alignItems:'center',alignSelf:'center',backgroundColor:'#f99f1a',height:40,marginTop:20,borderRadius:5}}
          onPress={renderButtonQuayLai}
        >
        <Text style={{color:'white',paddingLeft:10,paddingRight:10}}>
            Quay Lại
        </Text>   
        </TouchableOpacity>  
        )}
        else
        {
          return(
            <TouchableOpacity 
                  style={{justifyContent:'center',alignItems:'center',alignSelf:'center',backgroundColor:'#f99f1a',height:40,marginTop:20,borderRadius:5}}
                  onPress={renderButtonCart}
                >
                <Text style={{color:'white',paddingLeft:10,paddingRight:10}}>
                    Thêm vào giỏ hàng - {item.total}
                </Text>   
            </TouchableOpacity>  
        )}
   }
   const ButtonCart  = () => {
    //  console.log("xin chào:",test);
     if( viewButtonCart===false){
       return null
     }else{
       return(
        <View style={{position:'absolute',bottom:0,width:'100%',backgroundColor:'white',height:60,justifyContent:'center',alignItems:'center'}}>
            <Button title="Xem giỏ hàng " onPress={()=>navigation.navigate('Test',{ dataCart: dataCart })} containerStyle={{width:'80%'}} ></Button>
       </View>
       )
     }
      
   
   }
   const renderImage=()=>(
      <View style={{flex:1,top:20,zIndex:77}}>
         <Image
            source={require('./image/logo.png')}
            style={{height:80,width:'100%'}}
          />  
        </View>
      )

    const renderButton  = () => {
      return(   
        <View style={{top:0,left:0,zIndex:99,alignSelf:'flex-start'}}>
          <Icon
            onPress={() =>navigation.goBack()}
            name="arrow-back"
            size={30}
            color="#000"
          />
         </View>
      )
    }
  renderItemCard  = () =>{
    return(
    <View style={{ flex: 1,bottom:10,position:'absolute',justifyContent:'center',alignSelf:'center' }}>
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
  )}
  renderItemDetail =({item})=>(
      <TouchableOpacity key={item.id} onPress={()=>onClickViewModel(item)} >
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
                    <Text>{item.price}</Text>
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
                    <Text>{item.quantity}</Text>
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
                    <Text>{item.total}</Text>
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
        <ParallaxScrollView
          scrollEvent={Animated.event([{nativeEvent: {contentOffset: {y:scrollYAnimatedValue}}}])}
          parallaxHeaderHeight={250}
          contentContainerStyle={styles.testttt}
          contentBackgroundColor="#fff"
          renderFixedHeader={renderButton}
          renderBackground={renderImage}
          backgroundColor="#fff"
          renderForeground={renderItemCard}> 
            <View>
              <FlatList
                keyExtractor={keyExtractor}
                data={dataProduct}
                renderItem={renderItemDetail}
              />
          </View>
        </ParallaxScrollView>
      <View>
      <Overlay
                isVisible={viewModel}
                onBackdropPress={onClickViewModel}
                windowBackgroundColor="rgba(0.2,0.2,0.2,0.2)"
                overlayBackgroundColor="white"
                width="80%"
                height={180}
                borderRadius={10}
                // containerStyle={{width:'100%',marginLeft:0}}
                
              >
                <View style={{flexDirection:'row'}}>
                  <Text style={{flex:1}}>{item.name}</Text>
                  <Text>{item.price}</Text>
                </View>
                
                <Divider></Divider>
                <View style={{flexDirection:'row',justifyContent:'center',marginTop:30}}>
                  <Button
                    containerStyle={{width:40}}
                    onPress={removeQuantity}
                    icon={
                      <Icon
                        name="remove"
                        size={20}
                        color="white"
                      />
                    }
                  />
                 
                  <View style={{borderColor:'black',borderWidth:1,width:50,height:37,marginLeft:10,marginRight:10,borderRadius:5,justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                      <Text style={{fontSize:16,fontWeight:'bold'}}>{item.quantity}</Text>
                  </View>
                
                    <Button
                    containerStyle={{width:40}}
                    onPress={addQuantity}
                    icon={
                      <Icon
                        name="add"
                        size={20}
                        color="white"
                      />
                    }
                  />
                </View>
                
                <ButtonAddGioHang></ButtonAddGioHang>
            </Overlay>      
      </View>
     <ButtonCart></ButtonCart>
    
    </Fragment>  
    )
}
export default ProductDetailScreen;