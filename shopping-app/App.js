import Homepage from './Homepage';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Cart from './Cart';
import { CartProvider } from './CartContext';
import ProductScreen from './ProductScreen';
import 'react-native-gesture-handler';
import DrawerComponent from './DrawerComponent';

const Drawer = createDrawerNavigator();



function App() {
  return(
    <CartProvider>
    <NavigationContainer>
     
    <Drawer.Navigator initialRouteName='Home' drawerContent={(props) => <DrawerComponent {...props}/>}>
      <Drawer.Screen name="Home" component={Homepage} options={{headerShown:false, drawerItemStyle: {height: 0}}}/>
      <Drawer.Screen name="Cart" component={Cart} options={{headerShown:false, drawerItemStyle: {height: 0}}} />
      <Drawer.Screen name="ProductScreen" component={ProductScreen} options={{headerShown:false, drawerItemStyle: {height: 0}}}/>    

 
    </Drawer.Navigator>
   
    </NavigationContainer>
    </CartProvider>
  )
}



export default App;