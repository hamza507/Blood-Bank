import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Buttons from "./Screens/Buttons";
import Subpage from "./Screens/Intro";
import DonorForm from "./Screens/Donorform";
import Signup from "./Screens/signup";
import Cart from "./Screens/Cart"

const Stack = createStackNavigator();



function Navigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Infro" component={Subpage}  options={{headerShown:false} } />
    <Stack.Screen name="Signup" component={Signup}  options={{headerShown:false} } />
    <Stack.Screen name="Buttons" component={Buttons}  />
    <Stack.Screen name="DonorForm" component={DonorForm} options={{headerShown:false}} />
    <Stack.Screen name="DonorDetails" component={Cart}  />

        {/* <Stack.Screen name="Login" component={LoginForm} options={{headerShown:false}} /> */}



    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default Navigation;