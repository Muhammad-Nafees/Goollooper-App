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

export const AuthStack = () => {

  const Stack = createStackNavigator()

  return (
    // <SplashScreen />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loginscreen">
        <Stack.Screen name="Loginscreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgetSreen" component={ForgetSreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="VerificationScreen" component={VerificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="VerificationForgetScreen" component={VerificationForgetScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgetResetSreen" component={ForgetResetSreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthStack;
