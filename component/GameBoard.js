import React, { Component } from 'react'
import { View, StyleSheet, SafeAreaView,Text } from 'react-native'
import { color } from 'react-native-reanimated';
import Player from './Player';

   

export default function GameBoard() {
    let score = 0;
    let num1 = Math.floor(Math.random() * 100) +1;
    let num2 = Math.floor(Math.random() * 101) + 1; 

    let answer = num1 + num2;
  
    
    return (
        <SafeAreaView style ={styles.main}>
            <View >
                <Text>Score: <Text>{score }</Text></Text>

            </View>
            
            <View style={styles.board}> 
                <Player num1={num1} num2 = {num2} ans = {answer}></Player>
            </View>
        
        </SafeAreaView>
       
    
    )
}

const styles = new StyleSheet.create({
    main: {
        flex: 1,
            paddingTop: 10
        


    },

    board: {
        alignContent: "center",
        justifyContent: "center",
        flex: 2,
        flexDirection: "row",


    },
   
})