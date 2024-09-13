import React from 'react';
import { View, Text, Button } from 'react-native';

const StorageDashboard = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Welcome, Storage Provider!</Text>
      <Button
        title="List New Storage Space"
        onPress={() => {/* Navigate to add new listing form */}}
      />
      <Button
        title="View Your Listed Spaces"
        onPress={() => {/* View listed spaces */}}
      />
    </View>
  );
};

export default StorageDashboard;
