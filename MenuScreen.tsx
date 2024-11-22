import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

const MenuScreen = ({ navigation, route }: any) => {
  const [menuItems, setMenuItems] = useState<{ name: string; type: string }[]>(
    []
  );

  useEffect(() => {
    if (route.params?.newItem) {
      setMenuItems((prevItems) => [...prevItems, route.params.newItem]);
    }
  }, [route.params?.newItem]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>
              {item.name} - {item.type}
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.subtitle}>No items added yet.</Text>
        }
      />
      <Button
        title="Add New Item"
        onPress={() => navigation.navigate('AddItem')}
        color="#007BFF"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
    color: '#000',
  },
});

export default MenuScreen;
