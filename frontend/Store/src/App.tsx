import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pages/HomePage';
import StorageProviderSignup from './pages/StorageProviderSignup';
import StorageDashboard from './pages/StorageDashboard';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="StorageProviderSignup" component={StorageProviderSignup} />
        <Stack.Screen name="StorageDashboard" component={StorageDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export type RootStackParamList = {
    Home: undefined;
    StorageProviderSignup: undefined;
    StorageDashboard: undefined;
  };
  