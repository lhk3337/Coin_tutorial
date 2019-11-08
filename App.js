import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Youtube from './screens/Youtube';
import Home from './screens/Home';

const Header = props => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{fontSize: 18, color: 'white', fontWeight: '800'}}>
        {props.title}
      </Text>
      <Text style={{fontSize: 13, color: 'white', fontWeight: '400'}}>
        {props.subtitle}
      </Text>
    </View>
  );
};

const MainStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => {
        return {
          headerTitle: (
            <Header
              title={'Show Me The Coin 🤑'}
              subtitle={navigation.getParam('refreshDate', '-')}
            />
          ),
          headerStyle: {
            backgroundColor: '#04cf5e',
          },
        };
      },
    },
    Youtube: {
      screen: Youtube,
      navigationOptions: ({navigation}) => {
        return {
          title: navigation.getParam('title', 'YOUTUBE'),
        };
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#04cf5e',
      },
    },
    //initialRouteName: 'Youtube',
  },
);

const AppContainer = createAppContainer(MainStack);

const App = () => {
  return <AppContainer />;
};

export default App;
