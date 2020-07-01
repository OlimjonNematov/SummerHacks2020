import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import individualGoalScreen from './individualGoalScreen';
import goalsListScreen from './goalsList';
import MessageScreen from './messageScreen';

const Stack = createStackNavigator();

//the stack navigator of the goals stack where users can access existing goals.
function GoalStack() {
  return (
    <Stack.Navigator
      mode="modal"
      headerMode="none"
      screenOptions={{
        gestureEnabled: false,
      }}>
      <Stack.Screen name="listOfGoals" component={goalsListScreen} />
      <Stack.Screen name="individualGoalScreen" component={individualGoalScreen} />
      <Stack.Screen name="messageScreen" component={MessageScreen} />
    </Stack.Navigator>
  );
}
export default GoalStack;
