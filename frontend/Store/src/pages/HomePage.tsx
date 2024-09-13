import React from 'react';
import { Image, StyleSheet, View, Text, Button, ScrollView, Platform } from 'react-native';

// Replace these imports with your own implementations if you have them
// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

export default function HomePage({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={require('../../assets/images/Dark-Store.jpg')} // Ensure the path is correct
          style={styles.headerImage}
        />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome to QuantumStore!</Text>
          {/* Replace <HelloWave /> with your own component if you have one */}
        </View>

        {/* Section for Listing Storage Spaces */}
        <View style={styles.stepContainer}>
          <Text style={styles.subtitle}>Step 1: List Your Space</Text>
          <Text>Ready to rent out your extra space? Tap the "List Space" button to get started!</Text>
        </View>

        {/* Section for Browsing Available Spaces */}
        <View style={styles.stepContainer}>
          <Text style={styles.subtitle}>Step 2: Find Storage Near You</Text>
          <Text>Looking for a place to store your items? Explore nearby spaces by tapping "Explore"!</Text>
        </View>

        {/* Section for Managing Listings */}
        <View style={styles.stepContainer}>
          <Text style={styles.subtitle}>Step 3: Manage Your Listings</Text>
          <Text>Have spaces listed? Easily update or remove them from your account dashboard.</Text>
        </View>
      </ScrollView>

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
            onPress={() => {
              // Navigation logic for seller sign-up
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // Ensures buttons are at the bottom
  },
  scrollContainer: {
    flexGrow: 1,
  },
  headerImage: {
    height: 300,
    width: '100%',
    resizeMode: 'cover',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
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
