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
import {View, Colors, Typography} from 'react-native-ui-lib';
import {WelcomeCarousel, ButtonGroup} from './src/components';
Colors.loadColors({
  blue: '#24248d',
  gold: '#FFD700',
});

Typography.loadTypographies({
  h1: {fontSize: 22, fontWeight: '300'},
  h2: {fontSize: 12, fontWeight: '300'},
});

const App: React.SFC = (): JSX.Element => {
  return (
    <View useSafeArea flex>
      <View width={'100%'} centerH bottom paddingB-30 height={'100%'}>
        <WelcomeCarousel />
        <ButtonGroup />
      </View>
    </View>
  );
};

export default App;
