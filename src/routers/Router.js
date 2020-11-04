import React from 'react';
import Home from '../routers/Home';
import Login from '../routers/Login';
import Email from '../routers/Email';
import Auth from '../routers/Auth';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';

enableScreens();
const Stack = createNativeStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Email" component={Email}/>
                <Stack.Screen name="Auth" component={Auth} i/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Router;