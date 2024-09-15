import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';
import { CustomButton } from '../../components/CustomButton';

const SellerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();




  const handleLogin = () => {
    // Implement login logic here
    console.log('Login attempted with:', email, password);
  };

  return (
    <ThemedView style={styles.container}>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <ThemedText style={styles.title}>Login</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <CustomButton title="Login" onPress={handleLogin} />
      <TouchableOpacity
        style={styles.linkContainer}
        onPress={() => navigation.navigate('SellerSignup' as never)}
      >
        <ThemedText style={styles.link}>Don't have an account? Sign up</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  linkContainer: {
    marginTop: 20,
  },
  link: {
    color: '#0a7ea4',
  },
});

export default SellerLogin;