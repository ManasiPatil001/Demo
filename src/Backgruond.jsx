import { View, ImageBackground } from 'react-native';
import React from 'react';

const Backgruond = ({children}) => {
  return (
    <View>
      <ImageBackground source={require("./assets/Final.jpg")} style = {{height : "100%"}}></ImageBackground>
      <View style ={{position: 'absolute'}}>
        {children}
      </View>
    </View>
  );
}


export default Backgruond;