import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

interface ListItem {
  name: string;
  address: string;
  pincode: string;
}

interface ListRenderProps {
  data: ListItem[];
}

const ListRender: React.FC<ListRenderProps> = ({ data }) => {
  const renderItem = ({ item }: { item: ListItem }) => (
    <ThemedView style={styles.itemContainer}>
      <ThemedText style={styles.name}>{item.name}</ThemedText>
      <ThemedText style={styles.address}>{item.address}</ThemedText>
      <ThemedText style={styles.pincode}>{item.pincode}</ThemedText>
    </ThemedView>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  address: {
    fontSize: 16,
    marginBottom: 2,
  },
  pincode: {
    fontSize: 14,
    color: '#666',
  },
});

export default ListRender;
