import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

let gcolor = `rgb(22,220,110)`;
let value = "";
function Player(props) {
	return (
		<View style={styles.player}>
			<Text style={styles.button}>{props.num1}</Text>

			<Text style={styles.button}>+</Text>

			<Text style={styles.button}>{props.num2}</Text>

			<View style={styles.input}>
				<TextInput style={styles.input} value={value} />
			</View>
		</View>
	);
}

const styles = new StyleSheet.create({
	player: {
		marginTop: 10,
		flexDirection: "row",
	},
	button: {
		shadowOffset: { width: 10, height: 10 },
		shadowOpacity: 1,
		shadowColor: "grey",
		shadowRadius: 30,
		backgroundColor: "white",
		padding: 20,
		margin: 20,
		borderRadius: 50,
		textAlign: "center",
		width: 70,
		height: 70,
		fontSize: 15,
		color: "#000",
		fontWeight: "bold",
	},

	input: {
		flexDirection: "column",
		alignSelf: "center",
		position: "absolute",
		alignContent: "center",
		left: 100,
		top: 200,
	},
});

export default Player;
