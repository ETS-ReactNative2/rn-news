import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewsList from "../screens/home";
import NewsDetail from "../screens/news-detail";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={NewsList} />
        <Stack.Screen name="NewsDetails" component={NewsDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
