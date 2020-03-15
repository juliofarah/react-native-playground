import React from "react";
import { Text, View, Button, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const GREEN = "rgb(185,232,223)";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2 }}>
        <Button
          onPress={() => navigation.push("Register missing Products")}
          title="Register missing products"
        />
        <Button
          onPress={() => navigation.push("Check for available Products")}
          title="Check for available products"
        />
      </View>
    </View>
  );
};

const MissingProducts = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
};

const AvailableProducts = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
};

const LogoTitle = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
      }}
    >
      <Image
        style={{ width: 40, height: 40, marginRight: 10 }}
        source={require("./assets/logo.jpg")}
      />
      <Text style={{ color: GREEN }}>My Title</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => <LogoTitle />,
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button")}
                title="info"
                color={GREEN}
              />
            )
          }}
        />
        <Stack.Screen
          name="Register missing Products"
          component={MissingProducts}
        />
        <Stack.Screen
          name="Check for available Products"
          component={AvailableProducts}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
