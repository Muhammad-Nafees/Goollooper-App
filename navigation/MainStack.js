import React from 'react'
import SplashScreen from '../screens/SplashScreen'

import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from '../screens/LoginScreen'
import { createStackNavigator } from '@react-navigation/stack'
import ForgetSreen from '../screens/ForgetScreen'
import Signup from '../screens/Signup'
import VerificationScreen from '../screens/Verication'
import VerificationForgetScreen from '../screens/VerificationForgetScreen'
import ForgetResetSreen from '../screens/ResetPassword'
import Createprofile from '../screens/CreateProfile'

export const MainStack = () => {

    const Stack = createStackNavigator()

    return (
        
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Createprofile">
                <Stack.Screen name="Createprofile" component={Createprofile} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;
