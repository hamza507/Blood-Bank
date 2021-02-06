import React from "react";
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from "react-native";
import {useState} from "react";
import { SignUpUesr,SignOut, SignInUesr  } from "./loginapi";
import auth from "@react-native-firebase/auth";
import { Container, Header, Content, Item, Input, Label } from 'native-base';


import {Icon, Button, Form} from "native-base"

function Signup({navigation}){

    const [state, setState] = useState({
      emailAddress:" ",
      password:" ",
    });
    const [user, setUser]= useState();

    const signUp = () =>{
      SignUpUesr(state.emailAddress, state.password)
      .then(data =>{
        alert (data)
      })
      .catch (error =>{
        alert (error);
      });
    }

    const signOut = () => {
        SignOut()
       .then(data =>{
         alert (data)
       })
       .catch (error =>{
         alert (error);
       });
     };
 
     const signIn = () =>{
      SignInUesr(state.emailAddress, state.password)
      .then(data =>{
        alert (data)
        navigation.navigate('Buttons')
      })
      .catch (error =>{
        alert (error);
      });
    }
 
    const onAuthStateChanged =user =>{
      setUser(user);
    }

    React.useEffect( ()=>{
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber;
    }, []);



  return(
    <Container style={{backgroundColor:"red"}}>
  
     <View style={styles.loginmin}>
       <View>
         {user && (
          <Button transparent icon onPress ={signOut}>
            <Icon name ="log-out" />
          </Button>
        )}

       </View>
       
     
      <View >
           <Text style={styles.mintext}>Blood Bank Login</Text>
        <Form>
          <View style={styles.input}>  
          <Item floatingLabel>
              <Label style={{color:"#fff"}}>Email</Label>
              <Input  value={state.emailAddress}   onChangeText={(text)=>setState({...state,emailAddress:text})}  keyboardType="email-address"/>
            </Item>
          </View>

          <View style={styles.input}>
          <Item floatingLabel>
              <Label style={{color:"#fff"}}>Password</Label>
              <Input value={state.password} onChangeText={(text)=>setState({...state,password:text})} secureTextEntry={true}/>
            </Item>
          </View>

          <TouchableOpacity onPress={signUp} style={styles.bt} >
            <Text style={styles.bttext}>Sign up</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={signOut} style={styles.bt} >
            <Text style={styles.bttext}>Log Out</Text>
          </TouchableOpacity>
            
          <TouchableOpacity onPress={signIn} style={styles.bt} >
            <Text style={styles.bttext}>Login</Text>
          </TouchableOpacity>

         
    </Form>
    </View> 
    
    </View>
    </Container>
  )
}


const styles= StyleSheet.create({



  loginmin:{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
    },
    
    mintext:{
      fontSize:30,
      fontWeight:"bold",
      textAlign:"center",
      color:"#fff",
   },

   input:{
      width:300,
      height:50,
      marginTop:20,
      borderColor:"red",                          
      borderWidth:2,
   },

  bttext:{
      fontSize:20,
      backgroundColor:"black",
      color:"#fff",
      textAlign:"center"
  },
   
  bt:{
     marginTop:20,
     borderWidth:2,
     borderColor:"red",
     
     
  },

})




export default Signup;