import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import {viewExpenseDetailStyle} from '../styles'
import { apiGet } from '../utils/apiCall';
const ViewExpenseDetail = () => {
  const [expenseDetails, setExpenseDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   
    fetchExpenseDetails();
  }, []);

  const fetchExpenseDetails = async () => {
    try {
     const result=  await apiGet(`/getExpense`)
      setExpenseDetails(result.data);
      setIsLoading(false);
    } catch (error) {
        console.log(error)
      console.error('Error fetching expense details:', error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View style={[viewExpenseDetailStyle.container, viewExpenseDetailStyle.loadingContainer]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={viewExpenseDetailStyle.container}>
      {expenseDetails.length === 0 ? (
        <Text>No expense details found.</Text>
      ) : (
        <FlatList
          data={expenseDetails}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={viewExpenseDetailStyle.expenseItem}>
              <Text style={viewExpenseDetailStyle.label}>Amount:</Text>
              <Text>{item.amount}</Text>

              <Text style={viewExpenseDetailStyle.label}>Category:</Text>
              <Text>{item.category}</Text>

              <Text style={viewExpenseDetailStyle.label}>Date:</Text>
              <Text>{item.date}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};



export default ViewExpenseDetail;
