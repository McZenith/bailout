/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, Button} from 'react-native-ui-lib';

const ButtonGroup: React.SFC = (): JSX.Element => {
  const {btn} = styles;
  return (
    <>
      <Button
        label={'Login'}
        outline
        marginB-10
        style={btn}
        borderRadius={9}
        outlineColor={Colors.blue}
      />
      <Button
        label={'Create Bailout Account'}
        style={btn}
        borderRadius={9}
        backgroundColor={Colors.blue}
      />
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '90%',
    height: 50,
  },
});

export default ButtonGroup;
