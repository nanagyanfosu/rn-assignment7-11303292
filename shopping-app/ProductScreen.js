import React from "react";
import { ScrollView, Text, Image, StyleSheet,View, } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {useCart} from './CartContext';

const ProductScreen = ({route}) => {
    const {addToCart} = useCart();
    const {product} = route.params;
    return (
        <ScrollView style={styles.container}>
            <Image source={{uri: product.image}} style={styles.image} />
            <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
            <Text style={styles.title}>{product.title}</Text>
            <TouchableOpacity><Image source={require('./assets/Export.png')} size={10} /></TouchableOpacity>
            </View>
            <View style={styles.textcontainer}>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <View style={styles.materials}>
                <Text style={{fontSize: 22, marginBottom: 10}}>MATERIALS</Text>
               <Text style={styles.text}>We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.</Text>
            </View>
            <View style={styles.itemscare}>
                <View style={styles.row}>
                <Image source={require('./assets/Do Not Bleach.png')} style={{marginRight: 10}}/><Text style={styles.text}>Do not use bleach</Text>
                </View>
                <View style={styles.row}>
                <Image source={require('./assets/Iron Low Temperature.png')} style={{marginRight: 10}}/><Text style={styles.text}>Iron at a maximum of 110oC/230oF</Text>
                </View>
                <View style={styles.row}>
                <Image source={require('./assets/Do Not Wash.png')} style={{marginRight: 10}}/><Text style={styles.text}>Dry clean with tetrachloroethylene</Text>
                </View>
                <View style={styles.row}>
                <Image source={require('./assets/Do Not Tumble Dry.png')} style={{marginRight: 10}}/><Text style={styles.text}>Do Not Tumble Dry</Text>
                </View>
            </View>
            <View style={styles.shipping}>
                <View style={{flexDirection:'row', marginBottom: 15,justifyContent:'space-between' }}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('./assets/Shipping.png')} size={20} style={{marginRight: 10}}/>
                        <Text>Free Flat Rate Shipping</Text>   
                    </View>
                        <Image source={require('./assets/Up.png')}/>
                </View>
               
                        <Text style={{fontSize: 16}}>Estimated to be delivered on</Text>
                        <Text style={{fontSize: 16}}>09/11/2024 - 12/11/2024.</Text>   
                         
            </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={{flexDirection: 'row'}} onPress={addToCart}>
                    <Image source={require('./assets/Plus.png')}/>
                
                <Text style={{fontSize: 18, marginLeft: 10}}>ADD TO BASKET</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('./assets/Heart.png')}/>
                </TouchableOpacity>
            </View>
          
        </ScrollView>
            );
};

const styles = StyleSheet.create({
    container: {    
        padding: 15,
        flex: 1,
        
    },
    textcontainer: {
        width: '85%',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 5,
        
    },
    image:{
        width:'100%',
        height: 400, 
        alignSelf: 'center',
        resizeMode: 'cover',     
        marginBottom: 20,

    },
    price: {
        fontSize: 25,
        color: 'red',
        marginBottom: 10,
        fontWeight: '400'
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
        lineHeight: 25,
        textAlign: 'justify',
        fontWeight: '300',
    },
    materials: {
        marginBottom: 20,
        marginTop: 25,       
        color: 'gray',      
    },
    itemscare: {
        flexDirection: 'column',
        marginBottom: 20,
        marginTop: 15,     
        fontSize: 18,
        borderBottomWidth: 1,
        padding: 10,
        borderColor: 'gray',
    },
    row:{
        flexDirection: 'row',
        marginBottom: 10,     
        alignItems: 'center',
      
    },
    text:{
lineHeight: 25,
fontSize: 16, 
fontWeight: '300',
    },
    shipping:{
        flexDirection: 'column',
        marginBottom: 200,
        marginTop: 15,     
        padding: 10,
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    footer:{
        padding: 30,
        backgroundColor: 'gray',
        width: '100%',
        color: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    }
})

export default ProductScreen;