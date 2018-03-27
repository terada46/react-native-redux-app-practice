import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={headerContainer}>
            <Text style={header}>
                Cryptocurrency App
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
      display: "flex",
      backgroundColor: '#fff',
      marginTop: 35,
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
        fontWeight: "bold",
        fontSize: 20
    }
});  

const { headerContainer, header } = styles;

export default Header;