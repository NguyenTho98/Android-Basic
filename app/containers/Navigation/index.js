import React from 'react';
import { createAppContainer} from 'react-navigation'; 
import { createStackNavigator, } from 'react-navigation-stack';
import { createDrawerNavigator, } from 'react-navigation-drawer';
import HomeScreen from './../Home/index.js';
import ProductListScreen from './../Product/List/index.js';
import ProductDetailScreen from './../Product/Detail/index.js';
import {TouchableOpacity,Image,View,ScrollView} from 'react-native';
import {Icon, Avatar,Text} from 'react-native-elements';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import ProfileScreen from './../Profile/index.js';
import GioHangScreen from './../GioHang/index.js';
import DonHangScreen from './../DonHang/index.js';
import TheoDoiDoanhThuScreen from '../TheoDoiDoanhThu/index.js';
import VeUngDungScreen from '../VeUngDung/index.js';
import ChiTietDonHangScreen from '../ChiTietDonHang/index.js';
const NavigationDrawerStructure  = ({navigationProps}) => { 
  toggleDrawer = () => {
    navigationProps.toggleDrawer();
  };
    return (
      <View style={{ flexDirection: 'row',paddingLeft:15 }}>
        <TouchableOpacity onPress={toggleDrawer}>
            <Icon
            name='menu'
            size={30}
            color='black'
            />
        </TouchableOpacity>
      </View>
    );
}
const AppStackHome = createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Màn hình Home',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  });

const AppStackProductList = createStackNavigator({
    ProductList:{
        screen: ProductListScreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Màn hình Product',
          headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
          headerStyle: {
            backgroundColor: '#FF9800',
          },
          headerTintColor: '#fff',
        }),        
    },
    ProductDetail:{
      screen: ProductDetailScreen,   
      navigationOptions: ({ navigation }) => ({
          header:null,
      }), 
    },
    GioHang:{
      screen: GioHangScreen,
      navigationOptions: ({ navigation }) => ({
      header:null,
      }),        
  },
});
const AppStackProfile = createStackNavigator({
  Profile:{
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Màn hình Profile',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),        
  },
});
const AppStackDonHang = createStackNavigator({
  DonHang:{
    screen: DonHangScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Màn hình Đơn Hàng',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),       
  },
  ChiTietDonHang:{
    screen: ChiTietDonHangScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Chi Tiết Đơn Hàng',
      headerTintColor: '#000',
    }),       
  },
});
const AppStackTheoDoiDoanhThu = createStackNavigator({
  TheoDoiDoanhThu: {
    screen: TheoDoiDoanhThuScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Thông kê',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
const AppStackVeUngDung = createStackNavigator({
  VeUngDung: {
    screen: VeUngDungScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Ekko Bán Hàng',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
const AppDrawer = createDrawerNavigator({
  Home:{
    screen: AppStackHome,
    navigationOptions:{
      drawerLabel:'Trang chính',
      drawerIcon:(
          <Icon
          name='home'
          size={20}
          color='black'
          />
      ),
    }
  },
  Product:{
    screen: AppStackProductList,
    navigationOptions:{
      drawerLabel:'Danh Sách Công ty',
      drawerIcon:(
        <Icon
          name='location-city'
          size={20}
          color='black'
          />
      )

    }
  },
  Profile:{
    screen: AppStackProfile,
    navigationOptions:{
      drawerLabel:'Thông tin Cá nhân',
      drawerIcon:(
        <Icon
          name='account-circle'
          size={20}
          color='black'
          />
      )

    }
  },
  DonHang:{
    screen: AppStackDonHang,
    navigationOptions: ({ navigation }) => ({
      drawerLabel:'Quản lý đơn hàng',
      drawerIcon:(
        <Icon
          name='assignment'
          size={20}
          color='black'
          />
      )
    }), 
  },
  TheoDoiDoanhThu:{
    screen: AppStackTheoDoiDoanhThu,
    navigationOptions: ({ navigation }) => ({
      drawerLabel:'Theo dõi doanh thu',
      drawerIcon:(
        <Icon
          name='description'
          size={20}
          color='black'
          />
      )
    }), 
  },
  VeUngDung:{
    screen: AppStackVeUngDung,
    navigationOptions: ({ navigation }) => ({
      drawerLabel:'Về ứng dụng',
      drawerIcon:(
        <Icon
          name='stars'
          size={20}
          color='black'
          />
      )
    }), 
  },

},
{
initialRouteName:'Product',  
contentComponent: props=> {
    return(
   <ScrollView>
     <View style={{position:'relative'}}>
        <Image
          style={{height:200,width:'100%'}}
          source={{uri:'https://i-vnexpress.vnecdn.net/2019/09/27/onhiemkhongkhiwebp-1569574247-2946-1569574373_r_500x300.jpg'}}
        ></Image>
      <Avatar
        rounded
        size="medium"
        containerStyle={{position:'absolute',justifyContent:'center',alignSelf:'center',bottom:50}}
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        }}
      />
      <Text style={{position:'absolute',justifyContent:'center',alignSelf:'center',bottom:30,color:'white'}}>xin chào Thọ !!!</Text>
      <Text onPress={()=>props.navigation.navigate('Profile')} style={{justifyContent:'center',alignSelf:'center',bottom:5,color:'#fff',position:'absolute'}}>nxtho0109@gmail.com</Text>
     </View>
     
     <DrawerNavigatorItems {...props}></DrawerNavigatorItems>
     </ScrollView>
  )} ,
  }
);
export default createAppContainer(AppDrawer);