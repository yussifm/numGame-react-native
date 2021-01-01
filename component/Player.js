import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'


let num = 2;
 function Player() {
   return(
     <View style={styles.player}>
         <TouchableOpacity
					onPress={() => alert("Hello, world!")}
					style={styles.button}
				>
               <Text style={styles.buttonText}>{ num}</Text>
               </TouchableOpacity>
			
               

         </View>
   )
}

const styles = new StyleSheet.create({
    player: {
        marginTop: 10
    },
   button: {
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 1,
        shadowColor: "grey",
        shadowRadius: 30,
        backgroundColor: 'white',
		padding: 20,
		borderRadius: 50,
        textAlign: "center",
        width: 60,
        height: 60,
    },

    buttonText: {
        fontSize: 15,
        color: "#000",
        fontWeight: 'bold',
        

    }
})


export default Player;