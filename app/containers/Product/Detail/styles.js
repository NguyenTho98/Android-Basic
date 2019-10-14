import {StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    viewProduct:{
        flexDirection:'row',
        width:'90%',
        alignSelf:'center',
    },
    viewInfo:{
        flex:3,
        
    },
    imageProduct:{
        flex:2,     
    },
    viewImgae:{
        width: 100, 
        height: 100,
        borderRadius:10,
        overflow: 'hidden',
    },
    animatedHeaderContainer: {
        position: 'absolute',
        top: (Platform.OS == 'ios') ? 20 : 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        zIndex:1
      },
      headerText: {
        justifyContent:'center',
        color: '#000',
        fontSize: 22
      },
  });
export default styles