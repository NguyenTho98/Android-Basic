import  React,{Fragment,useState}  from 'react';
import { View,ScrollView    } from 'react-native';
import { Text,Input,Icon,Header,Card } from 'react-native-elements'
import styles from './styles';
const ThongTinScreen  = ({navigation}) => {   

    return(
        <Fragment>
            <Header
                containerStyle={{height:50,backgroundColor:'#fff'}}
                placement="left"
                centerComponent={{ text: 'Thông Tin', style: { color: '#000',fontSize:20,marginLeft:10 } }}
                centerContainerStyle={{marginBottom:15}}
            />
            <ScrollView  >
                
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
                    }}>
                <Input
                    placeholder='Người nhận'
                    leftIcon={
                        <Icon
                        name='person'
                        size={24}
                        color='black'
                        />
                    }
                    inputContainerStyle={{borderBottomColor:'red',borderBottomWidth:0.6}}
                    errorMessage='Cần nhập tên người mua'
                   
                />
                <Input
                    placeholder='+84'
                    leftIcon={
                        <Icon
                        name='call'
                        size={24}
                        color='black'
                        />
                    }
                    inputContainerStyle={{borderBottomColor:'red',borderBottomWidth:0.6}}
                    errorMessage='Số điện thoại không hợp lệ'
                   
                />
                <Input
                    placeholder='Đường phố'
                    leftIcon={
                        <Icon
                        name='place'
                        size={24}
                        color='black'
                        />
                    }
                    inputContainerStyle={{borderBottomColor:'red',borderBottomWidth:0.6}}
                    errorMessage='Cần lập địa chỉ giao hàng'
                   
                />
                 <Input
                    placeholder='Chọn tỉnh/thành phố'
                    label="Tỉnh/Thành Phố: "
                    labelStyle={{color:'black'}}
                    inputContainerStyle={{borderBottomColor:'red',borderBottomWidth:0.6}}
                    rightIcon={
                        <Icon
                        name='arrow-downward'
                        size={24}
                        color='black'
                        />
                    }
                />
                 <Input
                    placeholder='Quận/Huyện'
                    label="Chọn quận/huyện: "
                    labelStyle={{color:'black'}}
                    inputContainerStyle={{borderBottomColor:'red',borderBottomWidth:0.6}}
                    rightIcon={
                        <Icon
                        name='arrow-downward'
                        size={24}
                        color='black'
                        />
                    }
                />
                 <Input
                    placeholder='Phường/Xã'
                    label="Chọn phường/xã: "
                    labelStyle={{color:'black'}}
                    inputContainerStyle={{borderBottomColor:'red',borderBottomWidth:0.6}}
                    rightIcon={
                        <Icon
                        name='arrow-downward'
                        size={24}
                        color='black'
                        />
                    }
                />
            </Card>
            <Card 
                containerStyle={{
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
                title="Dịch vụ thiệp đích kèm"
                titleStyle={{fontWeight:'bold'}}
            >
                <Input
                    placeholder='Người gửi'
                    leftIcon={
                        <Icon
                        name='person'
                        size={24}
                        color='black'
                        />
                    }
                    inputContainerStyle={{borderBottomColor:'red',borderBottomWidth:0.6}}
                  
                   
                />
                <Input
                    placeholder='+84'
                    leftIcon={
                        <Icon
                        name='call'
                        size={24}
                        color='black'
                        />
                    }
                    inputContainerStyle={{borderBottomWidth:0.6}}
                    errorMessage='Cần nhập số điện thoại người nhận'
                   
                />
                <Input
                    placeholder='Địa chỉ người gửi'
                    leftIcon={
                        <Icon
                        name='place'
                        size={24}
                        color='black'
                        />
                    }
                    inputContainerStyle={{borderBottomWidth:0.6}}
                   
                   
                />
                </Card>
            <View>
               
            </View>
            </ScrollView   >
        </Fragment>
    )
}

export default ThongTinScreen;
  