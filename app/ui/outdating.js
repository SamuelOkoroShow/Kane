import React, { Component, useState, useRef } from "react";
import {
  Animated,
  StyleSheet,
  FlatList,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
  Easing,
  TouchableOpacity,
  TextInput,
} from "react-native";
import firebase from "firebase";
import ball from "../image/soft2.png";
import date from "../../date";
import config from "../../config";
import kawa from "../image/kawa.jpg";
import banana from "../image/banana.png";
import star from "../image/star.png";
import RotatingModal from './widgets/rotatingModal'
import PresentingIncome from './widgets/presentingIncome'
import * as SecureStore from 'expo-secure-store';
//import sportArr from "./sportList";
import sportArr from './sportList.json';
import {veryBerry} from "./shared/color"
import Ionicons from '@expo/vector-icons/Ionicons';

var curve = 0;
var letter_of_employment;
let counter = 0;
var consolid = "award";
var tallyArr = [];
let stars;
var xpr = [];
var week = [];
let cape_suicide;
var elevate;
var excite;
var ux;
var element;
var electric;
var eq;
var endorphins = 76;
var everyday = 1400;
var envy;
var enlight = 1300;
var empower = 1000;

firebase.initializeApp(config);

var triangle1 = 0;
var triangle2 = 0;
var triangle3 = 0;
var triangle4 = 0;
var triangle5 = 0;

var ryan;
var LOOKERS_JAGUAR = new Date();
var tally = 0;
var curr_sign = "MXN";


// const animatedVal = React.useRef(new Animated.Value(0)).current;
// const animation = (toValue) => Animated.timing(animatedVal, {
//       toValue: toValue,
//       duration: 200,
//       useNativeDriver: false
//     })


export default class Outbound extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      val: "",
      amount: "",
      color: "",
      text: "",
      dice: 3,
      ren: "amount",
      BUDGET_BALANCE: 0,
      arcSpinner: new Animated.Value(0),
      iRailController: new Animated.Value(0),
      iRailController2: new Animated.Value(0),
      iRailController3: new Animated.Value(0),
      iRailController4: new Animated.Value(0),
      iSpeedController: new Animated.Value(0),
      iSpeedController2: new Animated.Value(0),
      iSpeedController3: new Animated.Value(0),
      iSpeedController4: new Animated.Value(0),
      iReducerController: new Animated.Value(0),
      iReducerController2: new Animated.Value(0),
      triangle1: 0,
      triangle2: 0,
      triangle3: 0,
      triangle4: 0,
      triangle5: 0,
      // useEffectSwitch: false,
      items: [],
      triangles: [],
      authenticated: true,
      dollarCountDown: 60
    };
  }

  iEEspeed = () => {

  }
  rotateSCAR = () => {
    // Will change arcSpinner value to 1 in 5 seconds
    Animated.loop(Animated.timing(this.state.arcSpinner, {
      toValue: 1,
      duration: 1700,
      useNativeDriver: true
    })).start();
  };
  iRailSpring = () => {
    // Will change arcSpinner value to 1 in 5 seconds
    setTimeout(() => Animated.timing(this.state.iRailController, {
      toValue: 1,
      duration: everyday,
      useNativeDriver: true
    }).start(), envy);

    setTimeout(() => Animated.timing(this.state.iRailController2, {
      toValue: 1,
      duration: everyday,
      useNativeDriver: true
    }).start(), empower)
    
    setTimeout(() => Animated.timing(this.state.iRailController3, {
      toValue: 1,
      duration: everyday,
      useNativeDriver: true
    }).start(), enlight)
  };

  iConserverController = () => {
    const y = empower;
    enlight = empower;
    empower = y;
  }

  iConserverController2 = () => {
    envy = 1400;
    enlight = 800;
    empower = 0;
  }
// 
//   fadeOut = () => {
//     // Will change arcSpinner value to 0 in 3 seconds
//     Animated.timing(this.state.arcSpinner, {
//       toValue: "0deg",
//       duration: 3000
//     }).start();
//   };




  componentDidMount() {
    //this._listener();
    this.getValueFor("Florida")
    //this.getValueFor("Febreeze")
    //console.log(sportArr)
    this.jsonToArray(sportArr)
    this.getListfor("Febreeze")
    this.rotateSCAR()
    var R = 10
    //if(R > Math.random() * (20 - 0) + 0){ this.iConserverController();}
    //if(R > Math.random() * (30 - 0) + 0){ this.iConserverController2();}
    // this.iConserverController()
    this.iConserverController2();

    this.iRailSpring()




   // this.getValueFor("sportGoods")

   // to update database, check the head of firebase and cache
   // Output cache list
   // If cache is not empty, pull values.
   // Update cache with new array using head and array.length

    //payload.profile.hp();

    if(this.state.useEffectSwitch){
      // this.powerControl();

    this.setState({
      useEffectSwitch: true
    })
}

    //   var cache = new Cache({
    //     namespace: "myapp",
    //     policy: {
    //         maxEntries: 100
    //     },
    //     backend: AsyncStorage
    // });

    //   cache.setItem("angelo", "hello world", function(err) {
    //     // key 'hello' is 'world' in cache
    // });

    //   cache.getItem("angelo", function(err, value) {
    //     console.log(value);
    //     // 'hello'
    // });
  }

  spin() {

  }

  powerControl() {
    const dollarAllowance = 77.77
    this.setState(
      {
        dollarCountDown: this.state.dollarCountDown + dollarAllowance,
      }
    )
  }



  async fetchValueForList(key){
    let result = await SecureStore.getItemAsync(key)
    if(result){
      this.setState({
        items: result
      })
    }
  }

  async save(key, value) {
    // alert("Stored " + SecureStore.isAvailableAsync());
     await SecureStore.setItemAsync(key, value);
     console.log(value)
   }

   async getListfor(key) {
     //alert("get list")
     let result = await SecureStore.getItemAsync(key)
     
      const fruits = JSON.parse(result)
      // console.log(fruits)
      if(result){
        this.setState({
          items: fruits
        })
       //alert("result")
     }
   }
   
   async getValueFor(key) {
     let result = await SecureStore.getItemAsync(key);
     if (result) {
      this.setState({
        dollarCountDown: parseInt(result)
      })
     } else {
      // alert('No values stored under that key.');
     }
   }

  mascular(x) {
    if (x > curve) {
      curve = x;
    }

    return this._perHigh(x);
  }

  _perHigh(x) {
    if (x != 0) {
      var perHigh = x / curve;
      perHigh = perHigh * 100;
      return perHigh;
    } else {
      return 0;
    }
  }

  _sumbit(secret) {
    this.setState({
      text: secret,
    });
    //console.log(secret);
    if (secret == "hello") {
      this.setState({
        authenticated: true,
      });
    }
  }

  booyaka() {
    if (this.state.text === consolid) {
      this.setState({
        authenticated: true,
      });
    }
  }

  altUI() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "#285428",
          paddingTop: 240,
        }}
      >
        <TextInput
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          placeholder="Enter Password"
          secureTextEntry={true}
          style={{
            height: 60,
            padding: 10,
            fontSize: 15,
            width: "80%",
            backgroundColor: "rgba(0,0,0,0.4)",
            borderRadius: 5,
          }}
        />
        <TouchableOpacity
          onPress={() => this.booyaka()}
          style={{
            backgroundColor: "rgba(0,0,0,0.4)",
            padding: 10,
            margin: 10,
          }}
        >
          <Text style={{ fontSize: 11, color: "#fff" }}>SIGN IN!</Text>
        </TouchableOpacity>
        <Text style={{ backgroundColor: "#fff", padding: 5, marginTop: 10 }}>
          Tip: Cache me in.
        </Text>
      </View>
    );
  }

  logWires() {
    //console.log(this.state.items)
    var total = 0;
    for (var i = 0; i < this.state.items.length; i++) {
      total = parseInt(this.state.items[i].amount) + total;
    }
  }

  _secretCurrency(pounds) {
    let dollars = 0;
    naira = pounds * 700;
    dollars = naira / 570;

    curr_sign = "us $";
    dollars = Math.round(dollars * 100) / 100;
    var blondes = dollars * 2;
    return dollars + " us \n" + Math.floor(blondes) + " rubio(s)";
  }

  async _submit () {
    // Repair $112 chain.
    

    // console.log(savingFirstData); //value1
    // ryan = firebase.database().ref(`purchase/${this.props.samuelUser}`);
    // if (this.state.val != "" && this.state.amount != "") {
    //   ryan.push({
    //     ref: this.state.val,
    //     amount: this.state.amount,
    //     date: LOOKERS_JAGUAR.toString(),
    //     day: date,
    //     currency: "Mexican Pesos",
    //   });
    // }

    const dollarConversion = this.state.amount / 18.3
    this.setState({
      dollarCountDown: Math.floor(this.state.dollarCountDown - dollarConversion),
      items: [...this.state.items, {ref: this.state.val, amount: this.state.amount, date: LOOKERS_JAGUAR.toString(), day: date, currency: "Mexican Pesos"}]
    })

    this.save("Florida", Math.floor(this.state.dollarCountDown - dollarConversion).toString())
    this.save("Febreeze", JSON.stringify(this.state.items))

    

    

// const savingFirstData = await SInfo.setItem("key1", "value1", {
//   sharedPreferencesName: "mySharedPrefs",
//   keychainService: "myKeychain",
// });
    this.setState({
      val: "",
      amount: "",
    });
  }

  // Firebase Trig until Utility Viechle.

  _edit(value) {
    // Edit can update
    // tally = 0
    // var nina;
    //   nina = firebase.database().ref('purchase/'+ value.id )
    //    nina.on('value', (snap) => {
    //     var items = [];
    //     snap.forEach((child) => {
    //       console.log(child)
    //   })
    //   })
  }

  jsonToArray(j) {
    

   // console.log(Object.keys(j).map(function(_) { return j[_]; }))
    this.setState({
      items: Object.keys(j).map(function(_) { return j[_]; })
    })

  }

  async _listener() {
    tally = 0;
    var valmet;
    console.log(this.props)
    valmet = firebase.database().ref(`purchase/${this.props.samuelUser}`);
    await valmet.on("value", (snap) => {
      var items = [];
      snap.forEach((child) => {
        items.push({
          id: child.key,
          ref: child.val().ref,
          amount: child.val().amount,
          date: child.val().day,
          ibrahim: child.val().ibrahim,
        });
      });
      //console.log(items)
      this.setState({
        items: items,
      });
      this.logWires();
    });
  }

  _rollDice() {
    var dice;
    dice = Math.floor(Math.random() * 6) + 1;
    this.setState({
      dice,
    });
  }

  _expenseBrackets() {
    var model1 = { lower: 0, high: 200 };
    var model2 = { lower: 200, high: 500 };
    var model3 = { lower: 500, high: 1000 };
    var model4 = { lower: 1000, high: 5000 };
    var model5 = { lower: 5000, high: 600000 };
  }

  _randomColor() {
    var ranVal;
    ranVal = Math.floor(Math.random() * 6) + 1;

    switch (ranVal) {
      case 1:
        return "#9B5DE5";
        break;
      case 2:
        return "#F15BB5";
        break;
      case 3:
        return "#FEE440";
        break;
      case 4:
        return "#00BBF9";
        break;
      case 5:
        return "#00F5D4";
        break;
      case 6:
        return "#00BBF9";
        break;
    }
  }
  format(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  _debitCard(item) {
    var hudson;
    hudson = item.ibrahim;
    var glendale = "You've grown so much!";
    // Push to xpr

    week.push(item.date);

    xpr.push(parseInt(item.amount));
    var cambioLor;

    if (xpr[counter - 1]) {
      glendale = xpr[counter] - xpr[counter - 1];
    }
    var color1 = "#00BBF9";
    var color2 = "#285428";

    if (glendale > 0) {
      cambioLor = color1;
      glendale = (glendale / xpr[counter]) * 100;
    } else {
      cambioLor = color2;
      glendale = (glendale / xpr[counter - 1]) * 100;
    }
    glendale = Math.floor(glendale);

    counter++;
    switch (hudson) {
      case "Leisure Investment":
        this.setState({
          triangle3: this.state.triangle3 + parseInt(item.amount),
        });
        break;
      case "Growth Security":
        this.setState({
          triangle2: this.state.triangle2 + parseInt(item.amount),
        });
        break;
      case "Personal Stability":
        this.setState({
          triangle1: this.state.triangle1 + parseInt(item.amount),
        });
        break;
      case "Fun & Enjoyment":
        this.setState({
          triangle4: this.state.triangle4 + parseInt(item.amount),
        });
        break;
      case "Land Ahoy!":
        this.setState({
          triangle5: this.state.triangle5 + parseInt(item.amount),
        });
        break;
    }

    //console.log(week[counter - 1]);
    var y = counter % 5;

    const iRailController = this.state.iRailController.interpolate({
      inputRange: [0, 3000],
      outputRange: [0, 360],
    });


    return (

      <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            borderTopWidth: 1,
            borderColor: this._randomColor(),
            backgroundColor: "#111",
            height: 170,
            width: 100,
          }}
        >
          <Text style={{ fontSize: 11, color: "#FFF" }}>
            :: CUSTOMER COPY::
          </Text>
          <Text style={{ fontSize: 14, color: "#c6dec1" }} numberOfLines={1}>
            {item.ref}
          </Text>
          {/* <Text style={{ fontSize: 7, fontWeight: "600", color: "#c6dec1" }}>
            ${this._secretCurrency(item.amount)} '\n' & {item.amount * 700}{" "}
            naira
          </Text> */}
          <Text style={{ fontSize: 7, fontWeight: "600", color: "#c6dec1" }}>
            {Math.floor(item.amount / 15.5)} CAD
          </Text>
          <Text style={{ fontSize: 7, fontWeight: "600", color: "#c6dec1" }}>
            {Math.floor(item.amount * .2)} Glamorous
          </Text>
          <Animated.Image
          numberOfLines = {1}
            style={{
              height: 20,
              width: 40,
              marginTop: 30,
              transform: [
              { 
                rotate: this.state.arcSpinner.interpolate({       
        inputRange:[0,1],
        outputRange:["720deg", "0deg"]
      })
    }],
            }}
source = {star}
resizeMode ="contain"
          />
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              padding: 5,
              marginTop: 30,
              height: 30,
            }}
          >
            <Text
              style={{
                color: this._randomColor(),
                fontWeight: "900",
                fontSize: 18,
              }}
            >
              
            </Text>
          </View>
        </View>
        {/* <View style={{height:20, paddingLeft:20, position:'absolute', top:80, left:-55,transform: [{ rotate: '90deg'}], width:'100%', backgroundColor:"#000"}}>
        <Text style={{ color:'#fff'}}>{week[counter-1]}</Text>
        </View> */}
      </TouchableOpacity>
    );

    this.setState({
      items: this.state.items,
    });
  }

  dice() {
    switch (this.state.dice) {
      case 1:
        return (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={ball}
              resizeMode="contain"
              style={{ width: 40, height: 40 }}
            />
          </View>
        );
        break;
      case 2:
        return (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View style={{}}>
              <View style={{ width: 40, height: 40, borderRadius: 20 }} />
              <View style={{ width: 40, height: 40, borderRadius: 20 }} />
              <Image
                source={ball}
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={{}}>
              <View style={{ width: 40, height: 40, borderRadius: 20 }} />
              <View style={{ width: 40, height: 40, borderRadius: 20 }} />
              <View style={{ width: 40, height: 40, borderRadius: 20 }} />
            </View>
            <View style={{}}>
              <Image
                source={ball}
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
              />
              <View style={{ width: 40, height: 40, borderRadius: 20 }} />
              <View style={{ width: 40, height: 40, borderRadius: 20 }} />
            </View>
          </View>
        );
        break;
      case 3:
        return (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View style={{}}>
              <View style={{ width: 40, height: 40, borderRadius: 20 }} />
              <View style={{ width: 40, height: 40, borderRadius: 20 }} />
              <Image
                source={ball}
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={{}}>
              <View style={{ width: 40, height: 40, borderRadius: 20 }} />
              <Image
                source={ball}
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
              />
              <View style={{ width: 40, height: 40, borderRadius: 20 }} />
            </View>
            <View style={{}}>
              <Image
                source={ball}
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
              />
              <View style={{ width: 40, height: 40, borderRadius: 20 }} />
              <View style={{ width: 40, height: 40, borderRadius: 20 }} />
            </View>
          </View>
        );
        break;
      case 4:
        return (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View style={{}}>
              <Image
                source={ball}
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
              />
              <View style={{ width: 40, height: 40, borderRadius: 20 }} />
              <Image
                source={ball}
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={{}}>
              <View style={{ width: 40, height: 40, borderRadius: 20 }} />
              <View style={{ width: 40, height: 40, borderRadius: 20 }} />
              <View style={{ width: 40, height: 40, borderRadius: 20 }} />
            </View>
            <View style={{}}>
              <Image
                source={ball}
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
              />
              <View style={{ width: 40, height: 40, borderRadius: 20 }} />
              <Image
                source={ball}
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
              />
            </View>
          </View>
        );
        break;
      case 5:
        return (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View style={{}}>
              <Image
                source={ball}
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
              />
              <View style={{ width: 40, height: 40, borderRadius: 20 }} />
              <Image
                source={ball}
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={{}}>
              <View style={{ width: 40, height: 40, borderRadius: 20 }} />
              <Image
                source={ball}
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
              />
              <View style={{ width: 40, height: 40, borderRadius: 20 }} />
            </View>
            <View style={{}}>
              <Image
                source={ball}
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
              />
              <View style={{ width: 40, height: 40, borderRadius: 20 }} />
              <Image
                source={ball}
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
              />
            </View>
          </View>
        );
        break;
      case 6:
        return (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View style={{}}>
              <Image
                source={ball}
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
              />
              <Image
                source={ball}
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
              />
              <Image
                source={ball}
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View style={{}}>
              <View style={{ width: 10, height: 40, borderRadius: 20 }} />
              <View style={{ width: 10, height: 40, borderRadius: 20 }} />
              <View style={{ width: 10, height: 40, borderRadius: 20 }} />
            </View>
            <View style={{}}>
              <Image
                source={ball}
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
              />
              <Image
                source={ball}
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
              />
              <Image
                source={ball}
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
              />
            </View>
          </View>
        );
        break;
    }
  }

  render() {
     // return(<PresentingIncome />)
    if (this.state.authenticated) {
      return (
        <View style={styles.container}>
          <ScrollView style={{}}>
          {/*   <TouchableOpacity */}
          {/*     onPress={() => this._rollDice()} */}
          {/*     style={{ */}
          {/*       height: 300, */}
          {/*       justifyContent: "center", */}
          {/*       alignItems: "center", */}
          {/*       width: "100%", */}
          {/*     }} */}
          {/*   > */}
          {/*     { */}
          {/*     //this.dice() */}
          {/* } */}
          {/*   </TouchableOpacity> */}
            <View
              style={{
                marginTop: 20,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 20 }}>${this.state.dollarCountDown}</Text>
              <Text style={{ color: "#fff", fontSize: 12 }}>FX Stanford FL</Text>
            </View>
            <View
              style={{
                borderLeftWidth: 4,
                borderColor: "#285428",
                height: 80,
                width: "100%",
                padding: 10,
                backgroundColor: "#111",
              }}
            >
              <Text style={{ color: "#fff" }}>Purchase Ref:</Text>
              <TextInput
                style={{ width: "100%", color: "#cdc", fontSize: 30 }}
                onChangeText={(text) => this.setState({ val: text })}
                value={this.state.val}
                placeholder="Ex: Mango Crab Tacos!"
              />
            </View>
            <KeyboardAvoidingView style={{}} behavior="padding" enabled>
              <View style={{}}>
                <View
                  style={{
                    borderLeftWidth: 4,
                    borderColor: "#111",
                    height: 80,
                    width: "100%",
                    padding: 10,
                    backgroundColor: "#111",
                  }}
                >
                  <Text style={{ color: "#fff" }}>Amount:</Text>
                  <TextInput
                    keyboardType="numeric"
                    style={{
                      width: "100%",
                      color: this._randomColor(),
                      fontSize: 30,
                    }}
                    value={this.state.amount}
                    onChangeText={(text) => this.setState({ amount: text })}
                    placeholder="Ex: N600"
                  />
                </View>
                <View
                  style={{
                    borderLeftWidth: 4,
                    borderColor: "#f9924c",
                    height: 80,
                    width: "100%",
                    padding: 10,
                    backgroundColor: "#111",
                  }}
                >
                  <Text style={{ color: "#fff" }}>Serial Number:</Text>
                  <TextInput
                    style={{
                      width: "100%",
                      fontSize: 30,
                      color: this._randomColor(),
                    }}
                    value={this.state.color}
                    onChangeText={(text) => this.setState({ amount: text })}
                    placeholder="Ex: Orange"
                  />
                </View>
              </View>
            </KeyboardAvoidingView>
            <View style={{ flex: 1 }}>
              <FlatList
                data={this.state.items.slice().reverse()}
                numColumns={3}
                renderItem={({ item }) => this._debitCard(item)}
              />
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 30,
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  height: 100,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#347398",
                    height: this.mascular(this.state.triangle1),
                    width: 50,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "#f9924c",
                    height: this.mascular(this.state.triangle2),
                    width: 50,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "#72b694",
                    height: this.mascular(this.state.triangle3),
                    width: 50,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "#c14b46",
                    height: this.mascular(this.state.triangle4),
                    width: 50,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "#fff",
                    height: this.mascular(this.state.triangle5),
                    width: 50,
                  }}
                />
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity
            onPress={() => this._submit()}
            style={{
              borderColor: this._randomColor(),
              alignItems: "center",
              flexDirection: "row",
              borderTopWidth: 2,
              backgroundColor: "rgba(0,0,0,0.8)",
              height: 50,
            }}
          >
            <Image
              source={kawa}
              resizeMode="stretch"
              style={{ height: "100%", width: 30 }}
            />
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 15 }}>Buy</Text>
              <Text style={{ color: "#fff", fontSize: 9 }}>{date}</Text>
            </View>
          </TouchableOpacity>
          <View style={{flex:1, backgroundColor:"#333"}}></View>
          <Animated.View style={{backgroundColor:'rgba(0,0,0,0)', position:'absolute', right:-120, bottom:295, transform: [{
            rotate: this.state.arcSpinner.interpolate({       
        inputRange:[0,1],
        outputRange:["360deg", "0deg"]
      })
          },{
            translateX: this.state.iRailController.interpolate({
          
              inputRange:[0,1],
              outputRange:[0, -130]
            })
          }]}}>
          <TouchableOpacity style={{width:endorphins, height:endorphins, borderRadius:endorphins/2, backgroundColor: veryBerry.RadicalRed, borderWidth:1, justifyContent:'center', alignItems:'center' }} >
<Ionicons name="md-battery-charging-outline" size={32} color="white" />
          </TouchableOpacity>
          </Animated.View>
          <Animated.View style={{backgroundColor:'rgba(0,0,0,0)', position:'absolute', right:-120, bottom:170, transform: [{
            rotate: this.state.arcSpinner.interpolate({       
        inputRange:[0,1],
        outputRange:["720deg", "0deg"]
      })
          },{
            translateX: this.state.iRailController2.interpolate({
          
              inputRange:[0,1],
              outputRange:[0, -130]
            })
          }]}}>
          <TouchableOpacity style={{width:endorphins, height:endorphins, borderRadius:endorphins/2, backgroundColor: veryBerry.DukeBlue, borderWidth:1, justifyContent:'center', alignItems:'center' }} >
           <Ionicons name="md-bug-outline" size={32} color="white" />
           
          </TouchableOpacity>
          </Animated.View>
          <Animated.View style={{backgroundColor:'rgba(0,0,0,0)', position:'absolute', right:-120, bottom:70, transform: [{
            rotate: this.state.arcSpinner.interpolate({       
        inputRange:[0,1],
        outputRange:["360deg", "0deg"]
      })
          },{
            translateX: this.state.iRailController3.interpolate({     
              inputRange:[0,1],
              outputRange:[0, -160]
            })
          }]}}>
          <TouchableOpacity style={{width:endorphins, height:endorphins, borderRadius:endorphins/2, justifyContent:'center', alignItems:'center', backgroundColor: veryBerry.JazzberryJam, borderWidth:1 }} >
 <Ionicons name="md-baseball-outline" size={32} color="white" />

          </TouchableOpacity>
          </Animated.View>
        </View>
      );
    } else {
      return <View style={{ flex: 1 }}>{this.altUI()}</View>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
});
