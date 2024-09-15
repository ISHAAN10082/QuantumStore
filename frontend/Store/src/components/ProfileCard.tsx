import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';

interface ProfileCardProps {
  profileId: string;
  name: string;
  pincode: string;
  imageUrl: string;
  details: string;
  onButton1Press: () => void;
  onButton2Press: () => void;
  button1Text: string;
  button2Text: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  profileId,
  name,
  pincode,
  imageUrl,
  details,
  onButton1Press,
  onButton2Press,
  button1Text,
  button2Text,
}) => {
  return (
    <ThemedView style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: profileId }} style={styles.profileImage} />
        <ThemedText style={styles.name}>{name}</ThemedText>
      </View>
      <ThemedText style={styles.pincode}>Pincode: {pincode}</ThemedText>
      <Image source={{ uri: imageUrl }} style={styles.mainImage} />
      <ThemedText style={styles.details}>{details}</ThemedText>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onButton1Press}>
          <ThemedText style={styles.buttonText}>{button1Text}</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onButton2Press}>
          <ThemedText style={styles.buttonText}>{button2Text}</ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pincode: {
    fontSize: 14,
    marginBottom: 8,
  },
  mainImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  details: {
    fontSize: 16,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 4,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ProfileCard;