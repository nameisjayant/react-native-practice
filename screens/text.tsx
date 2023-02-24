import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme, View } from "react-native";


function TextScreen() : JSX.Element{
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
}
return( <SafeAreaView>
    <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
        hidden = {false}
        networkActivityIndicatorVisible = {true}
      />
      <View>
        <Text style = {textStyleScreen.sectionStye} >
            My First React Native App!
        </Text>
      </View>
</SafeAreaView>
)
}

const textStyleScreen = StyleSheet.create({

    sectionStye : {
        fontSize : 30,
        color : 'red',
        fontFamily : 'Helvetica',
        fontWeight : 'bold',
        textAlign : 'center',
        margin : 50,
        backgroundColor : 'black',
        borderWidth : 2,
        borderColor : 'red',
        borderRadius : 20,
        padding : 10,
        textDecorationStyle : 'solid',
        textDecorationLine : 'underline',
        textDecorationColor : 'pink'
    }

})

export default TextScreen