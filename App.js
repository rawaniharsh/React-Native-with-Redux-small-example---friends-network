import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FriendsContext } from './src/FriendsContext';
import HomeScreen from './HomeScreen';
import FriendsScreen from './FriendsScreen';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import friendsReducer from './src/reducers/FriendsReducers';

const Stack = createStackNavigator();

const store = createStore(friendsReducer);

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      possibleFriends: [
        'Harsh',
        'Rahul',
        'Shivam',
      ],
      currentFriends: [],
    }
  }

  addFriend = (index) => {
    const {
      currentFriends,
      possibleFriends,
    } = this.state

    // Pull friend out of possibleFriends
    const addedFriend = possibleFriends.splice(index, 1)

    // And put friend in currentFriends
    currentFriends.push(addedFriend)

    // Finally, update the app state
    this.setState({
      currentFriends,
      possibleFriends,
    })
  }

  render() {
    return (
      <FriendsContext.Provider
        value={
          {
            currentFriends: this.state.currentFriends,
            possibleFriends: this.state.possibleFriends,
            addFriend: this.addFriend
          }
        }
      >
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen
              name="Friends"
              component={FriendsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FriendsContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
