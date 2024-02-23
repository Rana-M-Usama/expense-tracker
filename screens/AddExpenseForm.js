import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { addExpenseStyle } from '../styles';
import { apiPost } from '../utils/apiCall';

const AddExpenseForm = () => {
  const [expense, setExpense] = useState({
    amount: '',
    category: 'transportation',
    date: new Date().toISOString().split('T')[0], // Default date is today
  });

  const handleAddExpense = async() => {
   
    if (!expense.amount || !expense.category || !expense.date) {
      Alert.alert('Missing Fields', 'Please fill in all fields.');
      return;
    }

    // Check if the amount is valid (not negative)
    const amount = parseFloat(expense.amount);
    if (isNaN(amount) || amount < 0) {
      Alert.alert('Invalid Amount', 'Amount cannot be negative or empty.');
      return;
    }

    
    try{
        await apiPost('/addExpense',{...expense});
        Alert.alert('Expense Added Successfully');
    }catch(err){
      Alert.alert('Unable To Add Expenses');
    }

    setExpense({
      amount: '',
      category: 'transportation',
      date: new Date().toISOString().split('T')[0], // Reset date to today
    });
  };

  return (
    <View style={addExpenseStyle.container}>
      <Text style={addExpenseStyle.label}>Amount:</Text>
      <TextInput
        style={addExpenseStyle.input}
        value={expense.amount}
        onChangeText={(text) => setExpense({ ...expense, amount: text })}
        keyboardType="numeric"
        placeholder="Enter amount"
      />

      <Text style={addExpenseStyle.label}>Category:</Text>
      <Picker
        style={addExpenseStyle.input}
        selectedValue={expense.category}
        onValueChange={(itemValue) => setExpense({ ...expense, category: itemValue })}
      >
        <Picker.Item label="Transportation" value="transportation" />
        <Picker.Item label="Food" value="food" />
        <Picker.Item label="Education" value="education" />
      </Picker>

      <Text style={addExpenseStyle.label}>Date:</Text>
      <TextInput
        style={addExpenseStyle.input}
        value={expense.date}
        onChangeText={(text) => setExpense({ ...expense, date: text })}
        placeholder="Enter date"
      />

      <Button title="Add Expense" onPress={handleAddExpense} />
    </View>
  );
};

export default AddExpenseForm;
