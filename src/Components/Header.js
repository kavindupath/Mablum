/* eslint-disable prettier/prettier */
//import libraries for making a component
import React from 'react';
import {Text} from 'react-native';

//making a component
const Header = () => {

    const {textStyle} = styles;
    return <Text style={textStyle}>Albums!</Text>;

};

const styles = {
    textStyle:{
        fontSize:20,
    },
};

//make the component available to other parts of the app
export default Header;