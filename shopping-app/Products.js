import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { useCart } from "./CartContext";

  const Products = ({image, title, description, price}) => {
    const {addItemToCart} = useCart();
const item ={image, title, description, price}
    return (
      <View style={styles.card}>
        <Image source={{ uri: image }} style={styles.image} />
        <TouchableOpacity style={styles.addToCartButton} onPress={() => addItemToCart(item)}>
          <Image source={require('./assets/add_circle.png')} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>${price}</Text>
        
      </View>
    );
  
  }

const styles = StyleSheet.create({
    card: {
      width: '50%',
      marginBottom: 10,
     
    },
    image: {
      width:'100%',
      height: 100,
      resizeMode: 'contain',
      position: 'relative',
    },
    title: {
      fontSize: 11,
      fontWeight: 'bold',
     flexWrap: 'wrap',
    },
    description: {
      fontSize: 19,
      marginBottom: 5,
    },
    price: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 5,
      color: 'red',
    },
    addToCartButton: {
    position: 'relative',
   bottom: -180,
   right: -80,
    width: 30,
    height: 30,
 
    },
   });

export default Products;