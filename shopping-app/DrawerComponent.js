import React from "react";
import {View, Text,Image, TouchableOpacity} from "react-native";
import { DrawerContentScrollView, DrawerItemList,DrawerItem } from "@react-navigation/drawer";
function DrawerComponent(props){
    return (
        <DrawerContentScrollView {...props}>
            <View style={{flex: 1, paddingTop: 15}}>
                <View style={{flexDirection: 'column', rowGap: 15}}>
            <TouchableOpacity onPress={() => props.navigation.closeDrawer()} >
                <Image source={require('./assets/Close.png')} size={25} style={{padding: 20}}/>
                </TouchableOpacity>

              
                <Text style={{fontSize: 20, padding: 15,borderBottomWidth: 1, borderBottomColor: 'red',marginRight: 50, marginLeft: 15}}>Nana Gyanfosu</Text>
              
                </View>
                <DrawerItemList {...props} />
                <DrawerItem label="Store" onPress={() => props.navigation.navigate('')}/>
                <DrawerItem label="Location" onPress={() => props.navigation.navigate('')}/>
                <DrawerItem label="Blog" onPress={() => props.navigation.navigate('')}/>
                <DrawerItem label="Jewelry" onPress={() => props.navigation.navigate('')}/>
                <DrawerItem label="Clothing" onPress={() => props.navigation.navigate('')}/>
                <DrawerItem label="Electronic" onPress={() => props.navigation.navigate('')}/>
            </View>
        </DrawerContentScrollView>
    );
}


export default DrawerComponent;