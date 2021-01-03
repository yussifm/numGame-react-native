import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView, Text, Button, TextInput } from "react-native";
import Player from "./Player";

let score = 0;
let num1;
let num2;

let answer;
let ans_input;

export default function GameBoard() {
          const [value, onChangeText] = React.useState('');

	return (
		<SafeAreaView style={styles.main}>
			<View>
				<Text style={styles.score}>
					Score: <Text>{score}</Text>
				</Text>
            </View>
            
            <View style={styles.welcometext}>
                <Text style ={{textAlign: "center", fontSize: 30}}>🤗</Text>
                <Text>Welcome to the Magic Number game. Improve your Addition skills by anwsering the Questions below </Text>
            </View>

			<View style={styles.board}>
				<Player num1={num1} num2={num2} ans={answer} ></Player>
            </View>

             <View style={styles.input}>
                <TextInput 
                    placeholder='Enter answer 😊'
                    ref={(el) => { ans_input = el; }}
                
                    
                    onChangeText={(ans_input) => value =onChangeText(text) }
                    
                    
                    keyboardType="number-pad"
                />
            </View>
            
            <Button style={styles.button}
                title = "Submit your anwser"
                onPress={() => {
                    if (ans_input === answer) {
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
        marginTop: 10,
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
        top: 350,
        borderWidth: 1,
        borderRadius: 50,
        padding: 10,
        borderColor: 'green'
        
    },
    score: {
        paddingTop: 20,
        paddingLeft: 10,
        fontSize: 20,
        
        fontWeight: "bold"
    },
    button: {
        position: 'absolute',
        bottom: 50,
        width: 50,
        borderRadius: 50,
        
        
    },
    welcometext: {
        margin: 20,
        padding: 10,
        fontStyle: 'italic',
        color: 'lightblue',
    },
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