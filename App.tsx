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
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const GREEN = "rgb(185,232,223)";

const Drawer = createDrawerNavigator();

const Header = ({ navigation }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingTop: 10,
        paddingBottom: 10
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            source={require("./assets/drawer.png")}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <Image
          style={{ width: 40, height: 40, marginRight: 10 }}
          source={require("./assets/logo.jpg")}
        />
        <Text style={{ color: GREEN }}>My Title</Text>
      </View>
      <View />
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

const MissingProducts = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
        <Text>Register missing products</Text>
      </View>
    </View>
  );
};

const AvailableProducts = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
        <Text>Register available products</Text>
      </View>
    </View>
  );
};

const StoresMap = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
        <Text>Map available soon</Text>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="View Map">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: () => (
              <Image
                source={require("./assets/home.png")}
                style={{ width: 25, height: 25, marginLeft: 5 }}
              />
            )
          }}
        />

        <Drawer.Screen
          name="Register missing Products"
          component={MissingProducts}
        />

        <Drawer.Screen
          name="Check for available Products"
          component={AvailableProducts}
        />

        <Drawer.Screen
          name="View map"
          component={StoresMap}
          options={{
            drawerIcon: () => (
              <Image
                source={require("./assets/poi.png")}
                style={{ width: 25, height: 25, marginLeft: 5 }}
              />
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
