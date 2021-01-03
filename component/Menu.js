import React from "react";
import {
	View,
	StyleSheet,
	Button,
	SafeAreaView,
	Text,
	TouchableOpacity,
    ImageBackground,
} from "react-native";



function Menu() {
	return (
        <SafeAreaView style={styles.main}>
            <ImageBackground
                resizeMethod='auto'
                resizeMode ='center'
                source={require("../assets/GameLogo.png")}
                style={styles.logo}
            >
                <View>
				<TouchableOpacity
                        onPress={() => alert("Hello, world!")}
                        // Navigate to GameBoard
					style={styles.button}
				>
					<Text style={styles.buttonText}>Play</Text>
				</TouchableOpacity>
				<TouchableOpacity
                        onPress={() => alert("Hello, world!")}
                         // Navigate to How to play 
					style={styles.button}
				>
					<Text style={styles.buttonText}>How to Play</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => alert("Hello, world!")}
                        style={styles.button}
                         // Exit Game 
				>
					<Text style={styles.buttonText}>Exit</Text>
                    </TouchableOpacity>
                    
        
			</View>
                
                </ImageBackground>
			
		</SafeAreaView>
	);
}

const styles = new StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: "#fff",
		
    },
    logo: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10

    },
   
	button: {
	
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 1,
        shadowColor: "grey",
        shadowRadius: 30,
      
       
        backgroundColor: 'white',
		padding: 20,
		margin: 15,
		borderRadius: 50,
		textAlign: "center",
	},
	buttonText: {
		fontSize: 30,
		color: "#000",
	},
});

export default Menu;
