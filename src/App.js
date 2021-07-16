import React from 'react';
import {Platform,  View, Text, StyleSheet} from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <React.Fragment>
        {/* {Platform.OS === 'web' ? (
          <style type="text/css">{`
            @font-face {
              font-family: 'MaterialCommunityIcons';
              src: url(${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')}) format('truetype');
            }
          `}</style>
        ) : null} */}
        <View style={styles.container}>
          <Text style={styles.text}>Hey! This is the WEB.</Text>
        </View>
      </React.Fragment>
    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0FF1',
    height: Platform.OS === 'web' ? '100vh' : '100%'
  },
  text: {
    fontSize:30
  }
})

export default App;
