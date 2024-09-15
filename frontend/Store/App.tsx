import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/pages/HomePage';
import StorageProviderSignup from './src/pages/StorgeProvider/StorageProviderSignup';
import StorageDashboard from './src/pages/StorgeProvider/StorageDashboard';
import SellerSignup from './src/pages/Seller/SellerSignup';
import SellerLogin from './src/pages/Seller/SellerLogin';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="StorageProviderSignup" component={StorageProviderSignup} />
        <Stack.Screen name="StorageDashboard" component={StorageDashboard} />
        <Stack.Screen name="SellerSignup" component={SellerSignup} />
        <Stack.Screen name="SellerLogin" component={SellerLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type RootStackParamList = {
  Home: undefined;
  StorageProviderSignup: undefined;
  StorageDashboard: undefined;
  SellerSignup: undefined;
  SellerLogin: undefined;
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
