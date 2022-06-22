import React from 'react';
import {View, Text, TouchableOpacity, Platform} from "react-native"

import styled from 'styled-components/native'

const StyledView = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items:center;
`
const Ezia = styled.View`
  width: 200px;
  height: 100px;
  border-radius: 5px;
  background-color: tomato;
  justify-content: center;
  align-items: center;
  position: absolute;
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
      amount: 4378.57
    },
    {
      amount: 4317.93
    },
    {
      "amount" : 4560.10
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


  return <StyledView>
    {income[0].checks.map((next) => (<Ezia>
<IncomeModalText>${Math.ceil(next.amount)}</IncomeModalText>
<IncomeYearText>2021</IncomeYearText>
    </Ezia>))}
  </StyledView>;
}