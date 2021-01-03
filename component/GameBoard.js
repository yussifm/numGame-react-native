// restyle the whole component

import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView, Text, Button, TextInput } from "react-native";
import Player from "./Player";


let num1;
let num2;

let answer;

let ans_input;   
//  var for binding input value to
export default function GameBoard() {

    const [score, setScore] = React.useState(0);
    

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
                    // try to bind input value to ans_input 
                    placeholder='Enter answer 😊'
                    // ref={(el) => { ans_input = el; }}
                
                    
                    // onChangeText={(ans_input) => value =onChangeText(text) }
                    
                    
                    keyboardType="number-pad"
                />
            </View>
            
            <Button style={styles.button}
                title = "Submit your anwser"
                onPress={() => {
                    //  having erro 
                    // check to see if input value is equal to answer
                    // regenerate input and the new question
                    if (true) {
                        numenerator();
                        alert('Correct Well done 😎😎');
                        setScore(score+1);
                    }
                    // add an else statement here to prompt for user to enter answer

                    
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
    //    style this button
        
        
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