import React from "react";
import { ScrollView, Text, Image, StyleSheet } from "react-native";

const ProductScreen = () => {
    const {product} = route.params;
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>Price: ${product.price}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Image source={{uri: product.image}} style={{width: 200, height: 200}} />
            </ScrollView>
            )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    image:{
        width: '100%',
        height: 10,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    price: {
        fontSize: 18
    },
    description: {
        marginTop: 10,
        fontSize: 16
    }
})

export default ProductScreen;