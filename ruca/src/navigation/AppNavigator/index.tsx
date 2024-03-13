import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from '../MainNavigator';
//import { useSelector } from "react-redux";


export default function AppNavigator() {
    //const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    
    return (
        <NavigationContainer>
            <MainNavigator/>
        </NavigationContainer>
    )
}
