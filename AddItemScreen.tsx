import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';

const AddItemScreen = ({ navigation, route }: any) => {
  const [itemName, setItemName] = useState('');
  const [itemType, setItemType] = useState('Starter');

  const handleSubmit = () => {
    if (!itemName.trim()) {
      Alert.alert('Error', 'Please enter an item name.');
      return;
    }

    const newItem = { name: itemName, type: itemType };
    navigation.navigate('Menu', { newItem });
    setItemName('');
    setItemType('Starter');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Menu Item</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter item name"
        value={itemName}
        onChangeText={setItemName}
      />
      <Text style={styles.label}>Select Type:</Text>
      <View style={styles.radioGroup}>
        {['Starter', 'Main', 'Dessert'].map((type) => (
          <TouchableOpacity
            key={type}
            style={[
              styles.radioButton,
              itemType === type && styles.radioButtonSelected,
            ]}
            onPress={() => setItemType(type)}
          >
            <Text
              style={[
                styles.radioText,
                itemType === type && styles.radioTextSelected,
              ]}
            >
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Button title="Add Item" onPress={handleSubmit} color="#007BFF" />
      <Button
        title="Cancel"
        onPress={() => navigation.goBack()}
        color="#6c757d"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000',
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  radioButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  radioButtonSelected: {
    backgroundColor: '#007BFF',
    borderColor: '#007BFF',
  },
  radioText: {
    color: '#000',
  },
  radioTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AddItemScreen;
