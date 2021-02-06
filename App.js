import React from 'react';
import Navigation from "./android/config/navigation";
import store from "./android/store/index"
import {Provider} from "react-redux";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


function App() {
return(

  <Provider store = { store }>
    <Navigation/>
  </Provider>

)
}


export default App;

