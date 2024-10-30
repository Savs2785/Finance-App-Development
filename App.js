import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionListScreen from './screens/TransactionListScreen';
import TransactionDetailScreen from './screens/TransactionDetailScreen';
import SummaryScreen from './screens/SummaryScreen';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TransactionsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Transactions List" 
        component={TransactionListScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Transaction Detail" 
        component={TransactionDetailScreen} 
        options={{ title: 'Transaction Detail' }} 
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Transactions" 
          component={TransactionsStack} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="list" size={size} color={color} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Summary" 
          component={SummaryScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="bar-chart" size={size} color={color} />
            ),
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
