import React from "react";
import {Text, View, TouchableOpacity, Image, StyleSheet} from "react-native";

export default function Buttons({navigation}){
    return(
        <View style={styles.minbtn}>
             <Image source={{uri:"https://w7.pngwing.com/pngs/553/662/png-transparent-blood-blood-euclidean-logo-a-drop-of-blood-miscellaneous-triangle-drop-thumbnail.png"}}
             style={{resizeMode:"contain",width:200,height:200}} />

            <TouchableOpacity style={{marginTop:10,}}  onPress={() => navigation.navigate("DonorForm")}>
                <Text style={styles.btntext}>
                    Donor
                </Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={{marginTop:10}} onPress={() => navigation.navigate("Cart")}>
                <Text style={styles.btntext}>
                    Donee
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles= StyleSheet.create({
     minbtn:{
         flex: 1, 
         alignItems: 'center', 
         justifyContent: 'center',
         backgroundColor:"red"
     },
     btntext:{
         fontSize:30,
         borderRadius:2,
         backgroundColor:"yellow",
        color:"red",
        
        
        
     }
})