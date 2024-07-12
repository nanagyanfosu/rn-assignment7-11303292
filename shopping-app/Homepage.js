import React from'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image,FlatList} from 'react-native';
import Products from './Products';
import { useState,useEffect } from 'react';
import {useNavigation} from '@react-navigation/native';


const Homepage = () => {
  const [product, setProducts] = useState([]);
  const navigation = useNavigation();
  navigation.openDrawer();

  

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(Array.isArray(data) ? data : []);
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
        setProducts([]);
      });
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.item} onPress={()=> navigation.navigate('ProductScreen', {product: item})}>
      <Products key={item.id} 
      image={item.image} 
      title={item.title} 
     
      price={item.price} 
      onAddToCart={()=> handleAddToCart(item)}
      />
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
<TouchableOpacity onPress={() => navigation.openDrawer()}>
  <Image source ={require('./assets/Menu.png')} size={25}></Image>
</TouchableOpacity>

<Image source ={require('./assets/Logo.png')} size={25}></Image>

<View style={{flexDirection: 'row', columnGap: 15}}>
<TouchableOpacity>
  <Image source ={require('./assets/Search.png')} size={25}></Image>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Cart')}>
  <Image source ={require('./assets/shoppingBag.png')} size={25}></Image>
</TouchableOpacity>
</View>

      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
<Text style={{fontSize: 26}}>OUR STORY</Text>

<View style={{flexDirection: 'row', columnGap: 20}}>
<TouchableOpacity>
  <Image source ={require('./assets/Listview.png')} size={25}></Image>
</TouchableOpacity>
<TouchableOpacity>
  <Image source ={require('./assets/Filter.png')} size={25}></Image>
</TouchableOpacity>
</View>

</View>
 
     <View showsVerticalScrollIndicator={false}>
      <FlatList 
      data={product}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={styles.row}/>
     </View>
 
      </View>
)}

const styles = StyleSheet.create({
    container: {
      padding:25,
      flex: 1,
    
    },
    header:{
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    row:{
      flexDirection: 'row',
      justifyContent:'space-between',
      flexWrap: 'wrap',
    }
   
  });

export default Homepage;