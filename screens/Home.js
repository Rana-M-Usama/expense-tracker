import React from 'react';
import { View, Text, Button } from 'react-native';
import {homeStyles} from '../styles'
import { Auth } from 'aws-amplify';
const Home = ({ navigation }) => {
  const handleViewExpenseDetail = () => {
    navigation.navigate('view-expense-detail');
  };

  const handleAddExpense = () => {
    navigation.navigate('add-expense');
  };

  const handleSignOut = async() => {
     
    await Auth.signOut()
   
  };

  return (
    <View style={homeStyles.container}>
      <Text>Welcome to Expense Tracker</Text>
      <View style={homeStyles.buttonContainer}>
        <View style={homeStyles.buttonPadding}>
          <Button title="View Expense Detail" onPress={handleViewExpenseDetail} />
        </View>
        <View style={homeStyles.buttonPadding}>
          <Button title="Add Expense" onPress={handleAddExpense} />
        </View>
        <View style={homeStyles.buttonPadding}>
          <Button title="Sign Out" onPress={handleSignOut} />
        </View>
      </View>
    </View>
  );
};



export default Home;
