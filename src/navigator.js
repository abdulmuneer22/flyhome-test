import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from './routes';
import Home from './screens/home';
import SplashScreen from './screens/splash-screen';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={ROUTES.SPLASH_SCREEEN}
                screenOptions={{
                    header: () => null
                }}>
                {/* <Stack.Screen
                    name={ROUTES.SPLASH_SCREEN}
                    component={SplashScreen}
                /> */}

                <Stack.Screen
                    name={ROUTES.HOME}
                    component={Home}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}