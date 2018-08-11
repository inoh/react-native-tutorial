import React from 'react';
import { StyleSheet, View } from 'react-native';

// import Sample from './components/Sample';
// import Scroller from './components/Scroller';
import ListView from './components/ListView';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Sample name="hogehogehogehogehoge" backgroundColor="powderblue" />
        <Sample name="fugafugafugafugafuga" backgroundColor="skyblue" /> */}

        {/* <Scroller /> */}

        <ListView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
