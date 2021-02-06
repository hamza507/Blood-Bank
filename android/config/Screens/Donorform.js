import React from "react";
import {View,TextInput,TouchableOpacity, Text, StyleSheet} from "react-native";
import { useState } from "react/cjs/react.development";
import database from "@react-native-firebase/database"
import {Saveusers} from "./loginapi";
import { Container, Header, Content, Item, Input, Label,Form } from 'native-base';


export default function DonorForm({navigation}){

    const [id,setId]=useState(" ");
    const [name,setName]=useState(" ");
    const [namber,setNamber]=useState(" ");
    const [age,setAge]=useState(" ");
    const [bloodgroup,setBloodgroup]=useState(" ");

    const Savedata = () => {
        Saveusers(id,name,bloodgroup,namber,age)
        .then((data) =>{
            setId(null);
            setName(' ');
            setAge(' ');
            setNamber(' ');
            setBloodgroup('');
            navigation.navigate('Cart')
            
        })
        .catch(error =>{
            alert(error)
        })
    }

    return(
        <Container style={{backgroundColor:"red"}}>
        <View style={styles.Donormin}>
            <Text style={styles.Donormintext}>Donor Form</Text>
        <Form>
            <View>
            <Item floatingLabel>
              <Label style={{color:"#fff"}}>Enter Name</Label>
              <Input  placeholder="Your Name" onChangeText={(text)=> setName(text)} value={name} style={styles.donorinput}/>
            </Item>
            </View>


            <View>
            <Item floatingLabel>
              <Label style={{color:"#fff"}}>Enter Age</Label>
              <Input keyboardType="number-pad" placeholder="Your Age"onChangeText={(text)=> setNamber(text)} value={namber} style={styles.donorinput}/>
            </Item>
            </View>

            <View>
            <Item floatingLabel>
              <Label style={{color:"#fff"}}>Enter Number</Label>
              <Input keyboardType="number-pad" placeholder="Your Namber" onChangeText={(text)=> setAge(text)} value={age} style={styles.donorinput}/>
            </Item>
            </View>

            <View>
            <Item floatingLabel>
              <Label style={{color:"#fff"}}>Blood Group</Label>
              <Input autoCapitalize="words" placeholder="Your Blood Group" onChangeText={(text)=> setBloodgroup(text)} value={bloodgroup} style={styles.donorinput}/>
            </Item>
            </View>
        </Form>

            <TouchableOpacity onPress={Savedata} style={styles.Donorbtn}>
                <Text style={styles.Donorbtntext}>Submit</Text>
            </TouchableOpacity>
        </View>
        </Container>
    )
}


const styles= StyleSheet.create({


    Donormintext:{
        fontSize:30,
        fontWeight:"bold",
          textAlign:"center"
    },

    Donormin:{
        justifyContent: 'center',
    },
     
    //  mintext:{
    //      fontSize:30,
    //      fontWeight:"bold",
         
    //  },
  
  
    Donorbtntext:{
        fontSize:20,
        backgroundColor:"black",
        color:"#fff",
        textAlign:"center"
    },
     
    Donorbtn:{
        marginTop:20,
         borderWidth:2,
        borderColor:"red",

      
    },
  
  })