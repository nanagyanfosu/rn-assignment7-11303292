import React from'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image,FlatList} from 'react-native';
import Products from './Products';
import ProductScreen from './ProductScreen';
import { useState,useEffect } from 'react';
import {useNavigation} from '@react-navigation/native';
import Cart from './Cart';



const Homepage = ({navigation}) => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(Array.isArray(data) ? data : []); // Assuming the API returns an array
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
        setProducts([]); // Ensure products is reset to an empty array on error
      });
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.item} onPress={()=> navigation.navigate('ProductScreen', {product: item})}>
      <Products key={item.id} 
      image={item.image} 
      title={item.title} 
      rating={item.rating} 
      price={item.price} 
      onAddToCart={()=> handleAddToCart(item)}
      />
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
<TouchableOpacity>
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
 
     <View>
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
      padding:15,
      
    
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