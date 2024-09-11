import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App'; // Adjust the path if needed

type HomePageProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomePage: React.FC<HomePageProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to QuantumStore</Text>
      <Button
        title="Sign Up as Storage Provider"
        onPress={() => navigation.navigate('StorageProviderSignup')}
      />
      <Button
        title="Sign Up as Seller"
        onPress={() => {/* Navigate to seller sign-up */}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomePage;
