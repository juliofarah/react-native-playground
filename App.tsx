import React from "react";
import {
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  ShadowPropTypesIOS
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const GREEN = "rgb(185,232,223)";

const Drawer = createDrawerNavigator();

// TODO react-native doesn't support svgs
const HamburgerButton = () => (
  <svg viewBox="0 0 100 80" width="40" height="40">
    <rect width="100" height="20"></rect>
    <rect y="30" width="100" height="20"></rect>
    <rect y="60" width="100" height="20"></rect>
  </svg>
);

const NavigationDrawerStructure = ({ navigation }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image
          source={require("./assets/drawer.png")}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
        <Text>Feed coming soon</Text>
      </View>
    </View>
  );
};

const MissingProducts = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Register missing product</Text>
    </View>
  );
};

const AvailableProducts = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Register available product</Text>
    </View>
  );
};

const Header = ({ navigation }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#fff",
        paddingTop: 10,
        paddingBottom: 10
      }}
    >
      <NavigationDrawerStructure navigation={navigation} />
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
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerIcon: () => (
            <Image
              source={require("./assets/drawer.png")}
              style={{ width: 25, height: 25, marginLeft: 5 }}
            />
          )
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />

        <Drawer.Screen
          name="Register missing Products"
          component={MissingProducts}
          options={{
            drawerIcon: () => (
              <Image
                source={require("./assets/drawer.png")}
                style={{ width: 25, height: 25, marginLeft: 5 }}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Check for available Products"
          component={AvailableProducts}
          options={{
            drawerIcon: () => (
              <Image
                source={require("./assets/drawer.png")}
                style={{ width: 25, height: 25, marginLeft: 5 }}
              />
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
