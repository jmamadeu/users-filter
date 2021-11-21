import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ContactList } from '../views/contact-list';
import { ContactProfile } from '../views/contact-profile';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <Stack.Navigator initialRouteName="Contacts">
      <Stack.Screen
        name="Contacts"
        options={{
          headerShown: false
        }}
        component={ContactList}
      />
      <Stack.Screen
        name="Contact"
        options={{
          headerTitle: 'Contacts'
        }}
        component={ContactProfile}
      />
    </Stack.Navigator>
  );
}
