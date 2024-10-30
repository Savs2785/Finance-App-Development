import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const mockTransactions = [
  { id: '1', name: 'Amazon Echo Dot', amount: 42, date: '2024-10-10', category: 'Electronics', details: 'Smart speaker for room' },
  { id: '2', name: 'Shoes', amount: 200, date: '2024-10-11', category: 'Clothing', details: 'Running shoes' },
  { id: '3', name: 'Slippers', amount: 20, date: '2024-10-12', category: 'Clothing', details: 'Cozy slippers' },
  { id: '4', name: 'Momo', amount: 70, date: '2024-10-13', category: 'Food', details: 'Birthday party' },
  { id: '5', name: 'House Rent', amount: 450, date: '2024-10-14', category: 'Housing', details: 'October rent payment' },
];

export default function SummaryScreen() {
  const totalExpenses = mockTransactions.reduce((sum, item) => sum + item.amount, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Summary</Text>
      <View style={styles.expenseContainer}>
        <Text style={styles.text}>Total Expenses:</Text>
        <Text style={styles.amount}>${totalExpenses.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f4f8', 
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold',
    color: '#333', 
    marginBottom: 20,
  },
  expenseContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  text: {
    fontSize: 18, 
    color: '#555', 
    marginRight: 10, 
  },
  amount: {
    fontSize: 20, 
    fontWeight: '600',
    color: '#e74c3c', 
  },
});
