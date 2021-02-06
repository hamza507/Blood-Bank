import React from 'react';
import {Text,View,FlatList ,StyleSheet,ScrollView,StatusBar} from "react-native";
import database, { firebase } from "@react-native-firebase/database";
import { State } from 'react-native-gesture-handler';
import { Component } from 'react/cjs/react.development';
import {ListItem,List,Card} from "native-base"

export default class Cart extends React.Component{
      state={
          myuser:[]
      }
    componentDidMount(){
        const myuser = firebase.database().ref("users");
        myuser.on("value",datasnap=>{
       this.setState({myuser:Object.values(datasnap.val())

       })
        })
        }
    render(){
        const myuser =this.state.myuser.map(item =>{
            return(
                <ListItem style={styles.mincard}>
        <Card style={styles.allCard}>

                <View>
                   <Text style={styles.Text1}>Name:</Text>
                 <Text style={styles.Text2}>{item.name}</Text>
                 </View>

                 <View>
                   <Text style={styles.Text1}>Number:</Text>
                     <Text style={styles.Text2}> {item.namber} </Text>
                </View>

                 <View>
                   <Text style={styles.Text1}>Blood Group:</Text> 
                 <Text style={styles.Text2}>{item.bloodgroup}</Text>
                </View>

                 <View>
                    <Text style={styles.Text1}> Age: </Text>
                   <Text style={styles.Text2}>{item.age}</Text>
                 </View>

      </Card> 
                </ListItem>
            )
        })
    return (
        <ScrollView style={styles.scrollView}>
        <View style={styles.cardmanu}>
            <List>
                {myuser}
            </List>
        </View>
        </ScrollView>
    )
}
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      },

      Text1:{
        fontWeight:"bold",
         fontSize:20,

      },

      Text2:{
          textAlign:"center",
          
          
      },
      allCard:{
          fontWeight:"bold",
          width:200,
          justifyContent:"center",
          alignItems:"center",

      },
    cardmanu:{
        marginTop:10,
        backgroundColor:"red",
    }
})