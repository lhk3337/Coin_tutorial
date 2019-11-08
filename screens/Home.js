import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import CoinView from './CoinView';
import TopBar from '../components/TopBar';
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  _setRefreshDate = date => {
    console.log('Updated:' + date);
    if (this.props.navigation) {
      this.props.navigation.setParams({refreshDate: date});
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <CoinView
          navigation={this.props.navigation}
          refreshDate={this._setRefreshDate}
          style={styles.coinView}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: getStatusBarHeight(),
    backgroundColor: 'red',
  },
  coinView: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    //alignItems: 'center',
    //justifyContent: 'flex-start',
  },
});
