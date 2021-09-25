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
const QbBall33 = styled.View`
    width:60px;
    height:2px;
    margin-top:110px;
    border-radius:2px;
    transform: rotate(-32deg);
    backgroundColor:${color[0].hex};
`;
const QbBall40 = styled.View`
    width:30px;
    height:2px;
    margin-left:-20px;
    margin-top:105px;
    border-radius:2px;
    transform: rotate(-90deg);
    backgroundColor:${color[0].hex};
`;

// Missing angle
const QbBall90 = styled.View`
    margin-top:120px;
    width:50px;
    height:2px;
    margin-left:-63px;
    transform: rotate(180deg);
    border-radius:2px;

    backgroundColor:${color[0].hex};
`;

const QbAndroid = styled.View`
    width: 50px;
    height:1px;
`
export default function Qb() {

    return (
        <View style={{flex:1, flexDirection:'row', alignContent:'center', justifyContent:'center'}}>
            <QbBall33 />
            <QbBall40 />
            <QbBall90 />
        </View>
    )
}
