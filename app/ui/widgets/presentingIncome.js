import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Platform, Animated} from "react-native"
import color from "../shared/color"

import styled from 'styled-components/native'

const StyledView = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items:center;
  padding: 10px;
`
const Ezia = styled.View`
  width: 200px;
  height: 120px;
  border-radius: 5px;
  background-color: tomato;
  justify-content: center;
  align-items: center;
  position: absolute;
  shadowColor: '#000';
    shadowOffset: { width: .5, height: .5 };
    shadowOpacity: 0.2;
    shadowRadius: 3;
    elevation: 2;
`

const ModalH1 = styled.Text`
  color: white;
  font-weight: Platform.OS === "android"? bold:  900;
  font-size: 26;
`

const IncomeModalText = styled.Text`
  color: white;
  font-weight: Platform.OS === "android"? bold:  900;
  font-size: 26;
`

const IncomeYearText = styled.Text`
  color: white;
  font-weight: Platform.OS === "android"? bold:  900;
  font-size: 14;
`

interface checksProps {
  amount: number

}
interface incomeProps {
    year: number,
    checks: checksProps[]
}
const income = [
  {
    year: 2022,
    checks : [
    {
      amount: 4272.57,
      date: "Jun 23rd"
    },{
      amount: 4378.57,
      date: "Jun 6st"
    },
    {
      amount: 4317.93,
      date: "May 5th"
    },
    {
      amount : 4560.10,
      date: "Apr 6st"
    },
    ]
  }, {
    year: 2022,
    checks : [
    {
      amount: 4378.57
    },
    {
      amount: 4317.93
    },
    {
      "amount" : 4560.10
    },
    ]}
]

export default function rotatingModal() {
  
  const [rexAnimated, setRexAnimated] = useState(new Animated.Value(0))
    rotateAR = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.loop(Animated.timing(rexAnimated, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    })).start();
  };

  useEffect(() => {
    rotateAR();
  }, [])


  return (<StyledView style={{
            }}>
      {income[0].checks.map((next, index) => (<View style={{width: 200,
  height: 120,
  borderRadius: 5,
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  margin:0,
  top: (index * 10) + 200,
  left: (index * 10) + 100,
  backgroundColor: "#333",
  borderWidth: 3,
  borderColor: "#333",
  shadowColor: '#000',
    shadowOffset: { width: .5, height: .5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2}}>
        <Text style={{color:'#fff'}}>
          ::: Merchant Copy :::
        </Text>
  <IncomeModalText>${Math.ceil(next.amount)}</IncomeModalText>
  <Animated.Text style={{marginVertical:20, color:'white', fontSize:11, transform: [
                { 
                  rotate: rexAnimated.interpolate({
            
          inputRange:[0,1],
          outputRange:["0deg", "720deg"]
        })
      }],}}>2021</Animated.Text>
      </View>))}
    </StyledView>);
}