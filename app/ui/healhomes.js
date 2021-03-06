import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";

import styled from "styled-components/native";
import Outbound from "./outdating";
import { color } from "./shared/color";

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
  "Kassie",
  "Gabby",
  "Kristen",
  "Kasandra",
];

const Head1 = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

const FabFAR = styled.FlatList`
  flex: 1;
`;
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
`;

const RunNY34 = styled.View`
  width: 120px;
  height: 80px;
`;

const FullGoogleParrot = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #000;
  align-items: center;
`;
const FullEcowas29 = styled.View`
  flex: 1;
  background-color: ${ASIAN_BREASTED[3]};
  justify-content: center;
  align-items: center;
`;

const beliex = "#000"

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
    // Same UI as Samuel
    // Different expenses from Samuel
    // Seemless or Playing Difficult

    // paleThroat is a Limit

    var samuelUi = <Outbound idUser={paleThroat} />;

    return (
      <View>
        <samuelUi />
      </View>
    );
  };
  const parrotBreasted = useCallback((user) => {
    props.route(user);
  }, []);
  var _chouColor = () => {
    var ranVal;
    ranVal = Math.floor(Math.random() * 6) + 1;

    switch (ranVal) {
      case 1:
        return color[0].hex;
        break;
      case 2:
        return color[1].hex;
        break;
      case 3:
        return color[2].hex;
        break;
      case 4:
        return color[3].hex;
        break;
      case 5:
        return color[4].hex;
        break;
      case 6:
        return color[2].hex;
        break;
    }
  };
  const LondonUsers = (data) => {
    // Add PaleThroat
    const samuelUser = data.samuelUser;
    const paleBalm = () => parrotBreasted(samuelUser);
    console.log(samuelUser)
    return (
      <RunNY34>
        <TouchableOpacity
          opacity={0.3}
          style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            margin:5,
            padding:14,
            backgroundColor: beliex ,
            borderBottomWidth: 2,
            borderColor: _chouColor()
          }}
          onPress={paleBalm}
        >
          <Text style={{color:_chouColor()}}>{samuelUser.toUpperCase()}</Text>
        </TouchableOpacity>
      </RunNY34>
    );
  };

  var QB = () => {
    // Excel Mobile UI untill seemless.
    return (
      <FullGoogleParrot>
        {californiaSeaLion.map((data, index) => <LondonUsers key={index} samuelUser = {data} />)}
      </FullGoogleParrot>
    );
  };

  if (africanVanguard20) {
    return <QB userID="AdminSam" />;
  }

  return <QB userID="AdminSam" />;
};

export default healHomes;
