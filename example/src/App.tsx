import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { SvgUrl } from 'react-native-svg-url'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexWrap: 'wrap'
  },
  component: {
    width: 150,
    height: 150,
    margin: 5
  }
})

class App extends React.Component<unknown> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <SvgUrl uri={'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg'} />
      </View>
    )
  }
}

export default App
