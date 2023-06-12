import { View, Text } from 'react-native'
import React from 'react'
import { withUser } from './Context'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import HomeView from '../HomeView';
import LoginView from '../LoginView';

function Routing(props:any) {
    const {user, login} = props;
    console.log(props)
    return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {
                login
                ?<Stack.Screen name="Home" component={HomeView}  />
                :<Stack.Screen name="Login" component={LoginView}  />
            }
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default withUser(Routing);