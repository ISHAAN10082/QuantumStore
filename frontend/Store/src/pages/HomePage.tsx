import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { ThemedView } from '../components/ThemedView';
import ProfileCardList from '../components/ProfileCardList';

type HomePageProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomePage: React.FC<HomePageProps> = ({ navigation }) => {
  const sampleData = [
    {
      profileId: 'https://example.com/profile1.jpg',
      name: 'John Doe',
      pincode: '12345',
      imageUrl: 'https://example.com/image1.jpg',
      details: 'This is John Doe\'s profile.',
    },
    {
      profileId: 'https://example.com/profile2.jpg',
      name: 'Jane Smith',
      pincode: '67890',
      imageUrl: 'https://example.com/image2.jpg',
      details: 'This is Jane Smith\'s profile.',
    },
    // Add more profile data as needed
  ];

  const handleButton1Press = (item: any) => {
    console.log('Button 1 pressed for:', item.name);
  };

  const handleButton2Press = (item: any) => {
    console.log('Button 2 pressed for:', item.name);
  };

  return (
    <ThemedView style={styles.container}>
      <ProfileCardList
        data={sampleData}
        onButton1Press={handleButton1Press}
        onButton2Press={handleButton2Press}
        button1Text="View"
        button2Text="Contact"
      />
      {/* Other components and buttons */}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // Other styles...
});

export default HomePage;
