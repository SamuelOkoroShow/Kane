import { StatusBar } from 'expo-status-bar';
import React, {Component, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Oshee33 from './app/ui/healhomes'
//import Router from './app/ui/router'
import GithubCigar from './app/ui/outgoing'
import QB from './app/ui/qb'
import { AnimatedCircles } from './app/AnimatedCircles/AnimateGeo.component';


const navigatieFAR = () => {

}




const App = () => {
	const [changeID, useChangeID] = useState("Sam")

	const _AdminSam = (samuelUser) => {
		useChangeID(samuelUser)
	};


	// return (<View style={{flex:1}}>
	// 	 {changeID === "Admin"?
	// 	<Oshee33 route={_AdminSam} />:
	// 	<GithubCigar samuelUser = {"AdminSam"} />
	// 	} 
	// 	<StatusBar />
	// 	</View>
	// )
	return (
		<AnimatedCircles />
	)
}

export default App

