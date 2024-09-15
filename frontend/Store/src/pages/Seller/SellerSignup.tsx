import { Text } from "react-native";


import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';
import { CustomButton } from '../../components/CustomButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  SellerLogin: undefined;
  SellerSignup: undefined;
  // Add other screen names here as needed
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SellerLogin'>;

const SellerSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation<NavigationProp>();

  const handleSignup = () => {
    // Implement signup logic here
    console.log('Signup attempted with:', name, email, password);
  };

  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        <Image
          source={require('../../../assets/images/prokraya1.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <ThemedText style={styles.title}>Create Account</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
        />
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
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <CustomButton title="Sign Up" onPress={handleSignup} />
        <TouchableOpacity
          style={styles.linkContainer}
          onPress={() => navigation.navigate('SellerLogin')}
        >
          <ThemedText style={styles.link}>Already have an account? Log in</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ScrollView>
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

export default SellerSignup;
