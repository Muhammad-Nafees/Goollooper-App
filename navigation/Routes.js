import React from 'react'
import { AuthStack } from './AuthStack'
import { NavigationContainer } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import MainStack from './MainStack'



export const Routes = () => {

  const state = useSelector((state) => state.userLogin)
  console.log("state---", state)
  return (

    !state.name ? <AuthStack /> : <MainStack />

  )
}

export default Routes;
