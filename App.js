import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React, {Component, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Oshee33 from './app/ui/healhomes'
//import Router from './app/ui/router'
import GithubCigar from './app/ui/outdating'
import Sublime from './app/ui/sublime'
import QB from './app/ui/qb'
//import { AnimatedCircles } from './app/AnimatedCircles/AnimateGeo.component';
import * as Notifications from 'expo-notifications';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createStackNavigator();



const navigatieFAR = () => {

}




const App = () => {
	const [changeID, useChangeID] = useState("Admin")

	const _AdminSam = (samuelUser) => {
		useChangeID(samuelUser)
	};


	return (
		<NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={GithubCigar} />
          <Stack.Screen name="Sublime" component={Sublime} />
        </Stack.Navigator>
      </NavigationContainer>

	)
	// return (
	// 	<AnimatedCircles />
	// )
}

export default App

