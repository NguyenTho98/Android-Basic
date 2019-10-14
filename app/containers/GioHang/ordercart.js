import  React,{Fragment,useState,useEffect}  from 'react';
import { View, FlatList ,TouchableOpacity,Text} from 'react-native';
import { Divider,CheckBox, Icon ,Header, Button,} from 'react-native-elements'
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


const GioHangScreen  = ({navigation}) => {   
   const [checkBox,setChekBox]=useState(false);
   const [list,setList]=useState([]);
   const [tongTamTinh,setTongTamTinh]=useState(0);
   useEffect(()=>{
     setList(navigation.state.params.dataCart)
    
   },[])

  const Test  = () => {  
    var tongTamTinh1=0;
    for (let index = 0; index < list.length; index++) {
     
      tongTamTinh1=tongTamTinh1+list[index].total
    }
    return tongTamTinh1
  }
    onClickCheckBox  = () => {
        if(checkBox===false){
          setChekBox(true)
        }
        else
        {
          setChekBox(false)
        }
    }
     renderItemList =({item})=>(
        <View key={item.id} style={{flexDirection:'row',marginTop:10}}>
                <Text style={{flex:1}}>{item.quantity}x</Text>
                <Text style={{flex:9}}>{item.name}</Text>
               <Text>{item.price}đ</Text>
        </View>
      )

    const NavigationDrawerStructure  = ({navigationProps}) => { 
        toggleDrawer = () => {
          navigationProps.toggleDrawer();
        };
          return (
            <View >
              <TouchableOpacity onPress={toggleDrawer}>
                  <Icon
                  name='menu'
                  size={23}
                  color='black'
                  />
              </TouchableOpacity>
            </View>
          );
      }
    return(
        <Fragment>
            <Header
                containerStyle={{height:50,backgroundColor:'white'}}
                placement="left"
                leftComponent={<NavigationDrawerStructure navigationProps={navigation} />}
                leftContainerStyle={{marginBottom:25}}
                centerComponent={{ text: 'Giỏ Hàng', style: { fontSize:20, color: '#000' } }}
                centerContainerStyle={{marginBottom:15}}
                rightComponent={{ icon: 'home', color: '#fff' }}
                rightContainerStyle={{marginBottom:20}}
            />
           
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
                    <View style={{flexDirection:'row'}}>
                        <Text style={{flex:1}}>Tổng tạm tính</Text>
                      
                        <Text><Test></Test>đ</Text>
                    </View>
                   
                    <View>
                      <Text style={{position:'absolute',marginTop:20}}>Sử dụng dịch vụ thiệp đích kèm</Text>
                      <CheckBox
                        right
                        iconType='material'
                        checkedIcon='check-box'
                        uncheckedIcon='check-box-outline-blank'
                        checkedColor='red'
                        checked={checkBox}
                        onIconPress={onClickCheckBox}
                      />
                    </View>
                    </View>
                </View>
        </Fragment>
    )
}

export default GioHangScreen;
  