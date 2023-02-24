/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
        hidden = {false}
        networkActivityIndicatorVisible = {true}
      />
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}> */}
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            height : Platform.OS === 'web' ? '100vh' : '100%'
          }}>
          <View style={textStyle.contentArrangementColumn}>
          <Text style = {{
          //  flex: 1
          }}>
            Hello World!
          </Text>
          <Text style = {{
           // flex : 1
          }}>
            How are you?
          </Text>
          <Text>
            I am good?
          </Text>
          </View>
        </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const textStyle = StyleSheet.create({

  firstText : {
    color : 'red',
    fontSize : 40,
    fontWeight : 'bold',
    margin : 20
    
  },

  // Row  -> alignItems = Vertical & justifyContent = Horizontal
  contentArrangement : {
    flexDirection : 'row',
   // flex : 1,
     alignItems : 'center',
    // justifyContent : 'center',
    height : '100%',
   
  },
  // Column -> alignItems - Horizontal & justifyContent = Vertical
  contentArrangementColumn : {
    flexDirection : 'column',
   // flex : 1,
     alignItems : 'center',
    // justifyContent : 'center',
    height : '100%',
   
  }

})

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

