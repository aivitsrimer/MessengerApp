import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import styles from './SliderStyles';
import {MessengerImage} from '../../ui-kit';

export const Slider = props => {
  const [activeIndicator, setActiveIndicator] = useState(0);
  const activeIndicatorHandler = ({nativeEvent}) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== activeIndicator) {
      setActiveIndicator(slide);
    }
  };

  let SliderItem = props.images.map((image, index) => <MessengerImage key={index} path={image} style={styles.image} />);
  let IndicatorItem = props.images.map((image, index) => (
    <View key={index} style={index === activeIndicator ? styles.indicatorActive : styles.indicator} />
  ));

  return (
    <View style={styles.container}>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={activeIndicatorHandler}
        style={styles.scrollView}>
        {SliderItem}
      </ScrollView>
      <View style={styles.containerIndicators}>{IndicatorItem}</View>
    </View>
  );
};
