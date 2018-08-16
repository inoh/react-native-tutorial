import React from 'react';
import {
  Button,
  CameraRoll,
  GetPhotosReturnType,
  Image,
  View,
} from 'react-native';

interface ImageViewState {
  photoUri?: string;
}

class ImageView extends React.Component<{}, ImageViewState> {
  public constructor({}) {
    super({});

    this.state = {
      photoUri: undefined,
    };
  }

  public render() {
    return (
      <View>
        <Button
          title="写真を表示"
          onPress={this._hundleButtonPress}
        />

        <Image
          source={{uri: this.state.photoUri || 'https://facebook.github.io/react/logo-og.png'}}
          style={{width: 200, height: 200}}
        />
      </View>
    );
  }

  private _hundleButtonPress = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
    })
    .then((r: GetPhotosReturnType) => {
      this.setState({ photoUri: r.edges[0].node.image.uri });
    })
    .catch((err) => {
      this.setState({ photoUri: undefined });
    });
 }
}

export default ImageView;
