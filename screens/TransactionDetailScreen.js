import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransactionDetailScreen({ route }) {
  const { transaction } = route.params; 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{transaction.name}</Text>
      <Text style={styles.amount}>Amount: ${transaction.amount}</Text>
      <Text style={styles.date}>Date: {transaction.date}</Text>
      <Text style={styles.category}>Category: {transaction.category}</Text>
      <Text style={styles.details}>Details: {transaction.details}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  amount: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  date: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
  category: {
    fontSize: 16,
    color: '#777',
    marginTop: 4,
  },
  details: {
    fontSize: 16,
    color: '#777',
    marginTop: 10,
  },
});
