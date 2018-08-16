import * as React from 'react';

import {
  Button,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import {
  NavigationScreenConfigProps,
} from 'react-navigation';

interface SampleViewProps {
  name: string;
  backgroundColor: string;
}

interface SampleViewState {
  text: string;
}

class SampleView extends React.Component<SampleViewProps, SampleViewState> {
  static navigationOptions = ({ screenProps }: NavigationScreenConfigProps) => {
    return {
      title: screenProps.name,
    }
  };

  public constructor(props: SampleViewProps) {
    super(props);

    this.state = {
      text: '',
    }
  }

  public render() {
    return (
      <View>
        <Text
          style={{
            backgroundColor: this.props.backgroundColor,
            width: "100%",
          }}
        >
          {this.props.name}: {this.state.text}
        </Text>

        <TextInput
          onChangeText={text => this.setState({ text })}
        />

        <TouchableHighlight onPress={() => `text: ${alert(this.state.text)}`}>
          <View>
            <Text>テキストボタン</Text>
          </View>
        </TouchableHighlight>

        <Button
          onPress={() => `button:${alert(this.state.text)}`}
          title="ほげボタン"
          color="#841584"
        />
      </View>
    );
  }
}

export default SampleView;
