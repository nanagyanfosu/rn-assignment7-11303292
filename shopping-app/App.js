import Homepage from './Homepage';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { CartProvider } from './home/CartContext';
import Cart from './Cart';
import ProductScreen from './ProductScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// function Root(){
//   return(
//     <NavigationContainer>
//     <Drawer.Navigator>
//       <Drawer.Screen name="Store" /> 
//       <Drawer.Screen name="Locations" /> 
//       <Drawer.Screen name="Blog"/> 
//       <Drawer.Screen name="Jewelry"/> 
//       <Drawer.Screen name="Electronic"/> 
//       <Drawer.Screen name="Clothing"/> 
//     </Drawer.Navigator>
//     </NavigationContainer>
//   )
// }

function App() {
  return (
    // <CartProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Homepage} options={{headerShown: false}}/>
      <Stack.Screen name="Cart" component={Cart} options={{headerShown: false}} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    // </CartProvider>

  );
}

export default App;