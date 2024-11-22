import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Christofell Kitchen</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="View Menu"
          onPress={() => navigation.navigate('Menu')}
          color="#007BFF"
        />
        <Button
          title="Add New Item"
          onPress={() => navigation.navigate('AddItem')}
          color="#007BFF"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
});

export default HomeScreen;
