import { Amplify } from 'aws-amplify';
import {awsExports} from './aws/awsExport';
import { withAuthenticator } from 'aws-amplify-react-native'
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import AddExpenseForm from './screens/AddExpenseForm';
import ViewExpenseDetail from './screens/ViewExpenseDetail';
import Home from './screens/Home';
Amplify.configure(awsExports);
const Stack = createNativeStackNavigator();
 function App() {
  return (
    
     <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome To Expense Tracker'}}
        />
        <Stack.Screen
          name="add-expense"
          component={AddExpenseForm}
          options={{title: 'Add Expense'}}
        />
        <Stack.Screen
          name="view-expense-detail"
          component={ViewExpenseDetail}
          options={{title: 'View Expense Detail'}}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
   
  );      
}

export default withAuthenticator(App)