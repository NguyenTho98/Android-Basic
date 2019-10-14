import  React,{Fragment,useState}  from 'react';
import {View,Text} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import GioHangScreen from './giohang';
import ThongTinScreen from './thongtin';
import ThanhToanScreen from './thanhtoan';

const TabNavigator = createBottomTabNavigator({
    GioHang: GioHangScreen,
    ThongTin: ThongTinScreen,
    ThanhToan:ThanhToanScreen,
    });
   

export default createAppContainer(TabNavigator);
  