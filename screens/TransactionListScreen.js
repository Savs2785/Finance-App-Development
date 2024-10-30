import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const mockTransactions = [
  { id: '1', name: 'Amazon Echo Dot', amount: 42, date: '2024-10-10', category: 'Electronics', details: 'Smart speaker for room' },
  { id: '2', name: 'Shoes', amount: 200, date: '2024-10-11', category: 'Clothing', details: 'Running shoes' },
  { id: '3', name: 'Slippers', amount: 20, date: '2024-10-12', category: 'Clothing', details: 'Cozy slippers' },
  { id: '4', name: 'Momo', amount: 70, date: '2024-10-13', category: 'Food', details: 'Birthday party' },
  { id: '5', name: 'House Rent', amount: 450, date: '2024-10-14', category: 'Housing', details: 'October rent payment' },
];

export default function TransactionListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={mockTransactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.transactionItem} 
            onPress={() => navigation.navigate('Transaction Detail', { transaction: item })}
          >
            <Text style={styles.transactionName}>{item.name}</Text>
            <Text style={styles.transactionAmount}>${item.amount}</Text>
            <Text style={styles.transactionDate}>{item.date}</Text>
            <Text style={styles.transactionCategory}>{item.category}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e9ecef',
  },
  transactionItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  transactionName: {
    fontSize: 20,
    fontWeight: '600',
  },
  transactionAmount: {
    fontSize: 18,
    color: 'green',
    marginTop: 4,
  },
  transactionDate: {
    fontSize: 16,
    color: 'gray',
    marginTop: 2,
  },
  transactionCategory: {
    fontSize: 14,
    color: 'blue',
    marginTop: 2,
  },
});
