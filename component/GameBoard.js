import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView, Text, Button, TextInput } from "react-native";
import Player from "./Player";

let score = 0;
let num1;
let num2;

let answer;

export default function GameBoard() {
          const [value, onChangeText] = React.useState('Enter answer 😊');

	return (
		<SafeAreaView style={styles.main}>
			<View>
				<Text style={styles.score}>
					Score: <Text>{score}</Text>
				</Text>
			</View>

			<View style={styles.board}>
				<Player num1={num1} num2={num2} ans={answer} ></Player>
            </View>

             <View style={styles.input}>
                <TextInput 
                    value= {onChangeText}
                    onChangeText={text => value = value}
                    
                    
                    keyboardType="number-pad"
                />
            </View>
            
            <Button style={styles.button}
                title = "Submit your anwser"
                onPress={() => {
                    if (value === answer) {
                        numenerator();
                    }

                    
                }}
            />
		</SafeAreaView>
	);
}

const styles = new StyleSheet.create({
	main: {
		flex: 1,
        paddingTop: 10,
        justifyContent: 'center'
	},

	board: {
		alignContent: "center",
		justifyContent: "center",
		flex: 2,
		flexDirection: "row",
    },
    input: {
		flexDirection: "column",
		alignSelf: "center",
		position: "absolute",
		alignContent: "center",
		left: 100,
        top: 200,
        borderWidth: 1,
        borderColor: 'green'
        
    },
    score: {
        paddingTop: 5,
        paddingLeft: 5,
        fontFamily: 'strong',
        fontWeight:"bold"
    },
    button: {
        position: 'absolute',
        bottom: 50,
        width: 50,
        borderRadius: 50, 
        
        
    }
});


const numenerator = () => {
    return Math.floor(Math.random() * 100) + 1;
  
    
}

const getAnswer = () => {
    return num1 + num2;
}


 num1 = numenerator() +1;
 num2 = numenerator();

 answer = getAnswer(); 