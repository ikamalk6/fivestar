import {StyleSheet, View} from 'react-native';

import React, {useRef} from 'react';
import COLOR from '../../../utils/colors';
import {useSelector} from 'react-redux';

import SwiperFlatList from 'react-native-swiper-flatlist';
import Video from 'react-native-video';

export default function Home() {
  const videoRef = useRef(null);
  // const onBuffer = (buff: any) => {
  //   console.log('buuffer', buff);
  // };
  // const error = (err: any) => {
  //   console.log('error', err);
  // };
  const keyExtractor = (item: any, index: number) => index.toString();
  const {userContentData} = useSelector(
    (store: any) => store.UserActionReducer,
  );
const onEndReached=()=>{
  
}
  const renderItems = ({item}: any) => {
    console.log('items@@@@@@', item?.contentUrl);

    return (
      <View style={styles.reelView}>
        <Video
          source={{uri: item?.contentUrl}}
          style={styles.backgroundVideo}
          ref={videoRef}
          // onBuffer={onBuffer}
          // onError={error}
          repeat={true}
          paused={true}
        />
      </View>
    );
  };

  return (
    <View style={styles.mainView}>
      <SwiperFlatList
        data={userContentData}
        renderItem={renderItems}
        vertical={true}
        keyExtractor={keyExtractor}
        onEndReached={onEndReached}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLOR.black,
    // paddingTop: 40,
    borderColor: COLOR.sky,
    borderWidth: 4,
  },
  reelView: {
    flex: 1,
    borderColor: COLOR.dullRed,
    borderWidth: 1,
    marginTop: 40,
    height: 710,
  },
  backgroundVideo: {
    width: '100%',
    height: 700,
  },
});
