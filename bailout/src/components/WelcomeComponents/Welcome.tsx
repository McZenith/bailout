import * as React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Image} from 'react-native-ui-lib';
import {IWelcome} from '../../interfaces';

const Welcome = ({heading, text, imgUrl}: IWelcome) => {
  const {imageStyle} = styles;
  return (
    <View width="100%" height="100%" centerH animated>
      <Image source={imgUrl} style={imageStyle} cover />
      <Text center animated h1 marginB-6>
        {heading}
      </Text>
      <Text center animated h2>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {width: '90%', height: '60%', marginBottom: 20},
});

export default Welcome;
