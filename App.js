import React from 'react';
import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from 'react-native-vector-icons'
import LandingPage from './components/LandingPage'
import Account from './components/Account'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    // <View style={styles.container}>
      <NavigationContainer>
      {/* <Text>Home</Text> */}
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if(route.name === 'Home') {
                iconName = 'md-home'
              } else if(route.name === 'Account') {
                iconName = 'md-contact'
              }

              return <Ionicons name={iconName} size={size} color={color} />
            },
          })}
          tabBarOptions={{
            activeTintColor: '#6836bb',
            inactiveTintColor: 'gray'
          }}
        >
          <Tab.Screen name="Home" component={LandingPage} />
          <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
      </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
