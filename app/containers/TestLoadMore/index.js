import React, { useState,useEffect } from 'react'
import { StyleSheet, View,FlatList,Image,Text, ActivityIndicator } from 'react-native';

const  Home  = () => {
  const [data,setData]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  useEffect(()=>{
    setIsLoading(true)
    getData()  
  },[])
  
  getData = async()=>{
    console.log("is Loading Value: ",isLoading);
    const url='https://dog.ceo/api/breeds/image/random/14';
    fetch(url)
    .then((response)=>response.json())
    .then((responseJson)=>{
      setData(data.concat(responseJson.message))
      setIsLoading(flase)
    })
  }

  renderRow  = ({item}) => {
    return(
      <View style={styles.item}>
        <Image  style={styles.itemImage} source={{uri:item}}></Image>
      </View>
    )
  }
  handleLoadMore  = () => { 
    setIsLoading(true);  
    getData()
  }
  renderFooter  = () => {
    return(
      isLoading ?
      <View style={styles.loader}>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
      :null
    )
  }
    return (
        <FlatList
          style={styles.container}
          data={data}
          renderItem={renderRow}
          keyExtractor={(item,index)=>index.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
        >
        </FlatList>
    )
  }
export default Home;
const styles =StyleSheet.create({
  container:{
    marginTop:20,
    backgroundColor:'#F5FCFF',
  },
  loader:{
    marginTop:10,
    alignItems:'center'
  },
  item:{
    borderBottomColor:'#ccc',
    marginBottom:10,
    borderBottomWidth:1,
  },
  itemImage:{
    width:'100%',
    height:200,
    resizeMode:'cover'
  },
  itemText:{
    fontSize:16,
    padding:5,
  }
})