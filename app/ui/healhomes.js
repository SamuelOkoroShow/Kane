import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from "react-native";

import styled from "styled-components/native";
import Outbound from "./outbound";

// XO_COAT_CHL_QE;
export const ASIAN_BREASTED = [
  "#9B5DE5",
  "#F15BB5",
  "#FEE440",
  "#00BBF9",
  "#00F5D4",
  "#00BBF9",
];

const californiaSeaLion = [
  "AdminSam",
  "Kassie"
]

const Head1 = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

const FabFAR = styled.FlatList`
  flex:1
`
const MiniHead1 = styled.Text`
  font-size: 20px;
  font-weight: 300;
`;

const Hobo = styled.View`
  flex: 1;
  background-color: #ff6347;
  justify-content: center;
  align-items: center;
`;

const UserBlock = styled.View`
  height: 190px;
  padding: 5px;
  justify-content: center;
  align-items: flex-start;
`;

const ipsum = styled.Text`
  font-size: 20px;
  font-weight: 900;
`;

const Rockstar50 = styled.View`
  flex: 7.5;
`

const RunNY34 = styled.View`
  flex: 2.5;
`

const FullGoogleParrot = styled.View`
  flex: 1;
  background-color: ${ASIAN_BREASTED[3]};
  justify-content: flex-end;
  align-items: center;
`;
const FullEcowas29 = styled.View`
  flex: 1;
  background-color: ${ASIAN_BREASTED[3]};
  justify-content: center;
  align-items: center;
`;

//Loans and Products
const healHomes = (props) => {
  const [africanVanguard20, setAfricanVanguard20] = useState(false);
  const [binoboLava, setBinoboLava] = useState(true);
  const onPressUser_Key = (idUser) => {
    props.changeID(idUser);
    props.navigateFAR(idUser);
  };

  const westBreasted = (paleThroat) => {
    // 1. Controller Tests
    // Same UI as Sam
    // Different expenses from Sam
    // Seemless or Playing Difficult

    // paleThroat is a Limit

    var samUi = (<Outbound idUser={paleThroat} />);
    

    return (
      <View>
        <samUi />
      </View>
    );

  }
  const parrotBreasted = useCallback(() => {
    },
    [],
  )
  const LondonUsers = () => {
    // Add PaleThroat
    return (
      <RunNY34>
        <TouchableOpacity onPress={parrotBreasted}>
          <Text>Lorem ipsum dolor</Text>
        </TouchableOpacity>
      </RunNY34>
    );
  };

  var QB = () => {

    
    // Excel Mobile UI untill seemless.
    return (
      <FullGoogleParrot>
        <FullEcowas29>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          sit amet dictum nisi.
        </Text>
        <Text>HellŁin Design</Text>
        </FullEcowas29>
        <ScrollView>
        <LondonUsers />
        </ScrollView>
      </FullGoogleParrot>
    );
  };

  if(africanVanguard20){
  return (<QB userID = "AdminSam" />)}

  return <QB userID = "AdminSam"/>
};

export default healHomes;
