import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App'; // Adjust the path if needed

type StorageProviderSignupProps = {
  navigation: StackNavigationProp<RootStackParamList, 'StorageProviderSignup'>;
};

const StorageProviderSignup: React.FC<StorageProviderSignupProps> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/signup', {
        name,
        email,
        password,
      });
      navigation.navigate('StorageDashboard');
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput value={name} onChangeText={setName} style={styles.input} />
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} style={styles.input} />
      <Text>Password</Text>
      <TextInput value={password} secureTextEntry onChangeText={setPassword} style={styles.input} />
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
});

export default StorageProviderSignup;
