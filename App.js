import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import IndexScreen from './src/screens/IndexScreen'
import CreateScreen from './src/screens/CreateScreen'
import ShowScreen from './src/screens/ShowScreen'
import EditScreen from './src/screens/EditScreen'
import { Provider } from './src/context/BlogContext'

const navigator = createStackNavigator({
  Index: IndexScreen,
  Create: CreateScreen,
  Show: ShowScreen,
  Edit: EditScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blog'
  }
});

// export default createAppContainer(navigator);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
};
