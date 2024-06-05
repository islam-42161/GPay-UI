import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import Profile from './screens/Profile'

const {Navigator,Screen} = createNativeStackNavigator()
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar style='light'/>
<Navigator screenOptions={{
  header:()=>null
}} initialRouteName='home'>
<Screen name='home' component={Home}/>
<Screen name='profile' component={Profile}/>
</Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation