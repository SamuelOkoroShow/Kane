import React, {Component, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Oshee33 from './app/ui/healhomes'
//import Router from './app/ui/router'
import GithubCigarette from './app/ui/outbound'

const navigatieFAR = () => {

}

const App = () => {
	const [changeID, useChangeID] = useState("Admin")
	return (<View style={{flex:1}}>
		{/* <Watermelon navigateFAR={navigatieFAR} changeID={changeID} /> */}
		{/* <GithubCigarette idUser = "AdminSam" /> */}
		<Oshee33 />
		</View>
	)
}

export default App

