import  React,{Fragment,useState}  from 'react';
import {Icon} from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import OrderCartScreen from './ordercart.js';
import ThongTinScreen from './thongtin.js';
import ThanhToanScreen from './thanhtoan.js';
import KiemTraScreen from './kiemtradonhang.js';
const TabNavigator = createBottomTabNavigator({
    OrderCart: OrderCartScreen,
    ThongTin: ThongTinScreen,
    ThanhToan:ThanhToanScreen,
    KiemTra:KiemTraScreen,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'OrderCart') {
              iconName = 'shopping-cart';
             
            } else if (routeName === 'ThongTin') {
              iconName = 'person';
            } else if (routeName === 'ThanhToan') {
                iconName = 'monetization-on';
            }else if (routeName === 'KiemTra') {
              iconName = 'check';
            }
    
           
            return <Icon name={iconName} size={25} color={tintColor} />;
          },
        }),
        tabBarOptions: {
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        },
      }
);
   

export default createAppContainer(TabNavigator);
  