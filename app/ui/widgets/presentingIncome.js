import React from 'react';
import {View, Text, TouchableOpacity, Platform} from "react-native"

import styled from 'styled-components/native'

const StyledView = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items:center;
`
const Modal = styled.View`
  width: 200px;
  height: 100px;
  border-radius: 5px;
  background-color: tomato;
`

const ModalH1 = styled.Text`
  color: white;
  font-weight: Platform.OS === "android"? bold:  900;
  font-size: 26;
`

interface checksProps {
  amount: number

}
interface incomeProps {
  {
    year: number,
    checks: checksProps[]
  }
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
    ]}, {
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
  const   

  return <StyledView>
    <Modal>
      
    </Modal>
  </StyledView>;
}