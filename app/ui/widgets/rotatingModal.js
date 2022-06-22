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

const income2022 = {
  "kangaroo": {
    amount: 4378.57
  },
  "m&ms": {
    amount: 4317.93
  },
  "anti" : {
    "amount" : 4560.10
  },
  
}

export default function rotatingModal() {
 

  return <StyledView>
    <Modal>
      
    </Modal>
  </StyledView>;
}