// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import Player from "./component/Player";
// import Main from "./component/Menu";
// import GameBoard from "./component/GameBoard";

// export default function App() {
// 	return (
	
//       <Main></Main>
	
// 	);
// }

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
 import Player from "./component/Player";
import GameBoard from './component/GameBoard';
import Menu from './component/Menu';

export default function App() {
  return (
    <NavigationContainer>{
     <Menu></Menu>

    }</NavigationContainer>
  );
}
