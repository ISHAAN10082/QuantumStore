import React from 'react';
import { Image, StyleSheet, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App'; // Adjust the path if needed
import { HelloWave } from '../components/HelloWave';
import ParallaxScrollView from '../components/ParallaxScrollView';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';

type HomePageProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomePage: React.FC<HomePageProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
          <Image
            source={require('../../assets/images/Dark-Store.jpg')} 
            style={styles.headerImage}
          />
        }>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Welcome to QuantumStore!</ThemedText>
          <HelloWave />
        </ThemedView>

        {/* Section for Listing Storage Spaces */}
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Step 1: List Your Space</ThemedText>
          <ThemedText>
            Ready to rent out your extra space? Tap the "List Space" button to get started!
          </ThemedText>
        </ThemedView>

        {/* Section for Browsing Available Spaces */}
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Step 2: Find Storage Near You</ThemedText>
          <ThemedText>
            Looking for a place to store your items? Explore nearby spaces by tapping "Explore"!
          </ThemedText>
        </ThemedView>

        {/* Section for Managing Listings */}
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Step 3: Manage Your Listings</ThemedText>
          <ThemedText>
            Have spaces listed? Easily update or remove them from your account dashboard.
          </ThemedText>
        </ThemedView>
      </ParallaxScrollView>

      {/* Buttons at the Bottom */}
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="Sign Up as Storage Provider"
            onPress={() => navigation.navigate('StorageProviderSignup')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Sign Up as Seller"
            onPress={() => navigation.navigate('SellerSignup')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 16, // Added padding for better spacing
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
    paddingHorizontal: 16, // Added horizontal padding
  },
  headerImage: {
    height: 300, // Adjust height and width to fit your design
    width: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  buttonContainer: {
    flexDirection: 'row', // Align buttons side by side
    justifyContent: 'space-evenly', // Adjust spacing between buttons
    padding: 16,
    backgroundColor: '#fff', // Adjust color as needed
  },
  button: {
    flex: 1,
    marginHorizontal: 8, // Space between buttons
  },
});

export default HomePage;
