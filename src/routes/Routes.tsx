import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomDrawer from "../components/CustomDrawer";

import TabNavigator from "./TabNavigator";
import { OrderRoutes } from "./StackRoutes";
import { colors } from "../styles/colors";
const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer props={props} />}
        screenOptions={{
          drawerStyle: {
            flex: 1,
            backgroundColor: colors.primary,
          },
          drawerLabelStyle: {
            fontSize: 15,
            marginLeft: -25,
          },
          drawerActiveTintColor: "#fff",
          drawerActiveBackgroundColor: colors.transparentPrimray,
          drawerInactiveTintColor: "#fff",
          headerShown: false,
        }}
      >
        <Drawer.Screen
          name="Meu Mercado"
          component={TabNavigator}
          options={{
            drawerIcon: ({ focused, size, color }) => (
              <MaterialCommunityIcons
                name={focused ? "store" : "store-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
