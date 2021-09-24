import React from 'react'
import { Animated, View, Text } from 'react-native'
import styled from "styled-components/native";
import { color } from './shared/color';

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

// This is a tempurary name
const qbBall33 = styled.View`
    width:40px;
    height:2px;
    border-radius:12;
    transform: [{ rotate: "-3.14deg" }];
    backgroundColor:${color[0].hex};
`;
const qbBall40 = styled.View`
    width:30px;
    height:2px;
    border-radius:12;
    transform: [{ rotate: "-3.14deg" }];
    backgroundColor:${color[0].hex};
`;

// Missing angle
const qbBall90 = styled.View`
    margin-top:40px;
    width:50px;
    height:2px;
    border-radius:12;
    transform: [{ rotate: "40deg" }];
    backgroundColor:${color[0].hex};
`;

const qbAndroid = styled.View`
    width: 50px;
    height:1px;
`
export default function qb() {

    return (
        <View style={{flex:1, flexDirection:'row', alignContent:'center', justifyContent:'center', flex:1}}>
            <qbBall33 />
            <qbBall40 />
            <qbBall90 />
        </View>
    )
}
