import React from 'react';
import { View, Text, FlatList,Image, StyleSheet} from 'react-native';
import { useCart } from './CartContext';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Cart = () => {
    const { cart } = useCart();
    const { removeItemFromCart } = useCart();


    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
      };

      return (
        <View style={styles.container}>
          <FlatList
            data={cart}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Image source={{ uri: item.image }} style={{width: 100, height: 100}} />
                <View style={styles.texts}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
                <Text style={styles.price}>${item.price}</Text>
                </View>
                <TouchableOpacity onPress={() => removeItemFromCart(item.id)} style={styles.removeItemFromCart}>
            <Image source={require('./assets/remove.png')}/>
          </TouchableOpacity>
              </View>
            )}
          />
         
        
        <View style={{flexDirection: 'row', alignContent:'center', marginBottom: 20, justifyContent:'space-between',}}>
        <Text style={{ fontSize: 23}}>EST. TOTAL</Text>
        <Text style={{ fontSize: 25}}>${calculateTotal()}</Text>
        </View>

        <TouchableOpacity>
     <View style={{flexDirection: 'row', justifyContent:'center', columnGap: 15,alignContent: 'center',padding: 20, backgroundColor: 'grey', color: 'white'}}>
        <Image source={require('./assets/shoppingBag.png')} />
        <Text style={{color:'white', textAlign:'center', fontSize:20, textTransform: 'uppercase' }}>Checkout</Text>
     </View>
     </TouchableOpacity>
        </View>
      );
    };

const styles = StyleSheet.create({
    container: {
      flex: 1,
     backgroundColor: 'white',
      padding: 15,
      fontFamily: 'Helvetica Neue',
    },
    cartItem: {
        marginBottom: 10,   
        padding: 20,
        flexDirection: 'row',
        width: '70%',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    texts: {
        flexDirection: 'column',
        padding: 10,
    },
    title:{
        fontSize: 13,
        fontWeight: 'bold',
    },
    quantity: {
        fontSize: 12,
    },
    removeItemFromCart:{
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
      
    },
    price: {
        fontSize: 13,
    },
    total: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    }

  });

    
export default Cart;