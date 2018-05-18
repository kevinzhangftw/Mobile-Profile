import React from 'react'
import { StyleSheet, Text, View, Image, WebView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <View style={styles.container}>
        <WebView
          source={{uri: 'http://artonagroup.betaartona.com'}}
          style={{marginTop: 20, width: 375}}
        />
        {/* <FlatList
            data={[{key: 'a'},{key: 'b'}]}
            renderItem={()=> <Image 
              source={pic} 
              style={{width: 300, height: 300}}
              />
            }
        /> */}
      </View>
    )
  }
}
