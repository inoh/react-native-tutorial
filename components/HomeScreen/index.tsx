import React from 'react';
import {
  Button,
  View,
} from 'react-native';
import {
  NavigationScreenProps,
} from 'react-navigation';

class HomeScreen extends React.Component<NavigationScreenProps> {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Button
          title="Go to Sample"
          onPress={() =>
            navigate('Sample', { name: 'Jane!!!!!!' })
          }
        />
        <Button
          title="Go to Image"
          onPress={() =>
            navigate('Image')
          }
        />
      </View>
    );
  }
}

export default HomeScreen;
