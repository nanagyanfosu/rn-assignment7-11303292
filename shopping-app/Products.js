import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";


  const Products = ({image, title, description, price, onAddToCart}) => {
    return (
      <View style={styles.card}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>${price}</Text>
        <TouchableOpacity style={styles.addToCartButton} onPress={onAddToCart}>
          <Image source={require('./assets/add_circle.png')} />
        </TouchableOpacity>
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
    position: 'absolute',
   bottom: -180,
   right: -80,
    width: 30,
    height: 30,
    
  
      
    },
   });

export default Products;