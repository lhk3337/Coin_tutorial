import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

class CoinItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 50, height: 50, margin: 10}}
          source={{uri: this.props.iconUri}}
        />
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'stretch',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1,
            padding: 10,
          }}>
          <View>
            <Text style={[styles.text, {flex: 1, fontSize: 20, marginTop: 5}]}>
              {this.props.name || 'Name'}
            </Text>
            <Text style={[styles.text, {flex: 1, color: 'darkgrey'}]}>
              {'Volume:' + (this.props.volume || 0)}
            </Text>
            <Text style={[styles.text, {flex: 1}]}>
              {'$:' + (this.props.price || 0)}
            </Text>
          </View>

          <Text style={[styles.rankText]}>
            {'#' + (this.props.rank || 'Rank')}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    flexDirection: 'row', // row
    backgroundColor: 'white',
    alignItems: 'center',
    //justifyContent: 'space-around', // center, space-around
    marginTop: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  text: {
    color: 'black',
  },
  rankText: {
    fontSize: 25,
  },
});

export default CoinItem;
