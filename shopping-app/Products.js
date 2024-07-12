import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";

import { useState,useEffect } from "react";

 
// const Products = () => {
    // const [products, setProducts] = useState([]);
  
    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products/1')
    //       .then(response => {
    //         if (!response.ok) {
    //           throw new Error('Network response was not ok');
    //         }
    //         return response.json();
    //       })
    //       .then(data => {
    //         setProducts(Array.isArray(data) ? data : []); // Assuming the API returns an array
    //       })
    //       .catch(error => {
    //         console.error('There was a problem with your fetch operation:', error);
    //         setProducts([]); // Ensure products is reset to an empty array on error
    //       });
    //   }, []);
  
    // return  (
//    <ScrollView>
//   {Array.isArray(products) && products.map((product) => (
//     <Product key={product.id} image={product.image} title={product.title} description={product.description} price={product.price} onAddToCart={()=> handleAddToCart(product)}/>
//   ))}
//    </ScrollView>
  
//   )};

  const Products = ({image, title, description, price, onAddToCart}) => {
    return (
      <View style={styles.card}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>${price}</Text>
        <TouchableOpacity style={styles.addToCartButton} onPress={onAddToCart}>
          <Text>+</Text>
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
      height: 200,
      resizeMode: 'contain',
       //maintains aspect ratio while scaling
      position: 'relative',
    },
    title: {
      fontSize: 13,
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
   bottom: -160,
   right: -110,
    width: 30,
    height: 30,
    
  
      
    },
   });

export default Products;