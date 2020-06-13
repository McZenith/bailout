import * as React from 'react';
import {View} from 'react-native-ui-lib';
import {IWelcome} from '../../interfaces';
import Carousel from 'pinar';
import Welcome from './Welcome';
import {WelcomeArray} from '../../data';
const WelcomeCarousel: React.SFC = () => {
  return (
    <View width={'90%'} height={'60%'}>
      <Carousel
        showsControls={false}
        loop
        autoplay
        bounces={true}
        autoplayInterval={24000}>
        {WelcomeArray.map(({heading, text, imgUrl}: IWelcome) => (
          <Welcome
            heading={heading}
            text={text}
            imgUrl={imgUrl}
            key={heading}
          />
        ))}
      </Carousel>
    </View>
  );
};

export default WelcomeCarousel;
