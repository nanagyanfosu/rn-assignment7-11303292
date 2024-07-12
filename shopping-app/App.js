import Homepage from './Homepage';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Cart from './Cart';
import Blog from './Blog';
import ProductScreen from './ProductScreen';
import 'react-native-gesture-handler';
import DrawerComponent from './DrawerComponent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



function App() {
  return(
    <NavigationContainer>
    <Drawer.Navigator initialRouteName='Home' drawerContent={(props) => <DrawerComponent {...props}/>}>
      <Drawer.Screen name="Home" component={Homepage} options={{headerShown:false, drawerItemStyle: {height: 0}}}/>
      <Drawer.Screen name="Cart" component={Cart} options={{headerShown:false, drawerItemStyle: {height: 0}}} />
      <Drawer.Screen name="ProductScreen" component={ProductScreen} options={{headerShown:false, drawerItemStyle: {height: 0}}}/>    

 
    </Drawer.Navigator>
    </NavigationContainer>
  )
}

// function App() {
//   return (
 
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen name="Home" component={Homepage} options={{headerShown: false}}/>
//       <Stack.Screen name="Cart" component={Cart} options={{headerShown: false}} />
//       <Stack.Screen name="ProductScreen" component={ProductScreen} options={{headerShown:false}}/>
//       </Stack.Navigator>
//     </NavigationContainer>


//   );
// }


export default App;