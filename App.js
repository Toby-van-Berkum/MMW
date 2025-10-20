import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Signup" screenOptions={{headerShown: false}}>
          <Stack.Screen 
            name="Signup" 
            component={SignupScreen} 
          />
          <Stack.Screen 
            name="Signin" 
            component={SigninScreen} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
