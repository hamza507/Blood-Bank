import  React from 'react';
import {View,Text, Button, Image} from "react-native"
import {connect}  from "react-redux";
import {set_data} from "../../store/actions/index";

 function Subpage({navigation}) {


   
   
   
   return (
     
     <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={{uri:"https://w7.pngwing.com/pngs/553/662/png-transparent-blood-blood-euclidean-logo-a-drop-of-blood-miscellaneous-triangle-drop-thumbnail.png"}}
       style={{resizeMode:"contain",width:200,height:200}}></Image>
         <Text style={{fontWeight:"bold",fontSize:20}}>Find Blood Donor from this App</Text>
         <Button
        title="Go To Login"
        onPress={() => navigation.navigate("Signup")}
        />
    
      
     </View>
    )
  }
  
const mapStateToProps = (state) =>({
  users:state.users
})

const mapDispatchToProps =(dispatch)=>({
  set_data: ()=> dispatch(set_data()),
  
})






export default connect(mapStateToProps,mapDispatchToProps)(Subpage);