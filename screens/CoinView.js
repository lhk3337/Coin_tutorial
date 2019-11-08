import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import CoinItem from '../components/CoinItem';
import {getCoinIconUri} from '../libs/Constants';

class CoinView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coinDatas: [],
      isLoading: false,
    };
  }
  componentDidMount() {
    this._getCoinDatas();

    setInterval(() => {
      this._getCoinDatas();
      // console.log('toggled!');
    }, 20000);
  }
  _getCoinDatas = async limit => {
    this.setState({
      isLoading: true,
    });

    try {
      const response = await fetch(
        `https://gist.githubusercontent.com/JeffGuKang/2ccbe7ee81c88d836fa39fc019b374a9/raw/998876fa052f48422390fd02709c9ec75e97833f/gistfile1.txt/?limit=${limit}`,
      );
      const responseJson = await response.json();

      const date = new Date();
      const now = date.toLocaleString();

      if (this.props.refreshDate != null) {
        this.props.refreshDate(now);
      }

      await this.setState({
        coinDatas: responseJson,
        isLoading: false,
      });
    } catch (error) {
      console.log('_getCoinDatas', error);
    }
  };
  _renderItem = ({item}) => {
    const {rank, name, price_usd, market_cap_usd, last_updated} = item; //Destructuring
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation &&
          this.props.navigation.push('Youtube', {title: name})
        }>
        <CoinItem
          rank={rank}
          name={name}
          price={price_usd}
          volume={market_cap_usd}
          iconUri={getCoinIconUri(name)}
        />
      </TouchableOpacity>
    );
  };
  componentDidMount() {
    this._getCoinDatas(10);
  }
  render() {
    return (
      <FlatList
        data={this.state.coinDatas}
        keyExtractor={item => item.name}
        renderItem={this._renderItem}
        refreshing={this.state.isLoading}
        onRefresh={this._getCoinDatas}
      />
    );
  }
}

export default CoinView;
