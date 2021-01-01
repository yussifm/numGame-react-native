import React, { Component } from 'react'
import { View, StyleSheet, SafeAreaView,Text } from 'react-native'
import Player from './Player';


export default function GameBoard() {
let score = 30;
    return (
        <SafeAreaView style ={styles.main}>
            <View >
                <Text>Score: <Text>{score }</Text></Text>

            </View>
            
            <View>
                <Player></Player>
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

    }
})