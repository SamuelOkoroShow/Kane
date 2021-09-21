import { StatusBar } from 'expo-status-bar';
import React, {Component, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Oshee33 from './app/ui/healhomes'
//import Router from './app/ui/router'
import GithubCigarette from './app/ui/outgoing'

const navigatieFAR = () => {

}




const App = () => {
	const [changeID, useChangeID] = useState("Admin")

	const _AdminSam = (samuelUser) => {
		useChangeID(samuelUser)
	};


	return (<View style={{flex:1}}>
		{changeID === "Admin"?
		<Oshee33 route={_AdminSam} />:
		<GithubCigarette samuelUser = {changeID} />
		}
		<StatusBar hidden />
		</View>
	)
}

export default App

