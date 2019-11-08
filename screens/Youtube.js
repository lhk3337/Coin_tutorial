import * as React from 'react'; //import React는 디폴트값만 가져 오는데 import * React는 전체 값을 가져옴
import {WebView} from 'react-native-webview';
import {getCoinYoutubeUrl} from '../libs/Constants';
const Youtube = props => {
  const title = props.navigation.getParam('title', '');
  const uri = getCoinYoutubeUrl(title);
  return <WebView source={{uri: uri}} style={{marginTop: 20}} />;
};

export default Youtube;
