import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import MapView from "react-native-maps";
import useLocation from "./components/hooks/useLocation";
import usePOIs from "./components/hooks/usePOIs";
import useVenues from "./components/hooks/useVenues";

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

const Map = ({ navigation }) => {
  const [location] = useLocation();
  const [pois, isLoading, error] = useVenues();

  if (error) {
    return <Text>{JSON.stringify(error)}</Text>;
  }

  if (isLoading) {
    return <ActivityIndicator size="small" color={GREEN} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={location}
      />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Map">
        <Drawer.Screen name="Home" component={HomeScreen} />

        <Drawer.Screen
          name="Register missing Products"
          component={MissingProducts}
          options={
            {
              // drawerIcon: () => (
              //   <Image
              //     source={require("./assets/drawer.png")}
              //     style={{ width: 25, height: 25, marginLeft: 5 }}
              //   />
              // )
            }
          }
        />

        <Drawer.Screen
          name="Check for available Products"
          component={AvailableProducts}
        />

        <Drawer.Screen name="Map" component={Map} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
