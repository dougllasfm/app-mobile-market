import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  HomeRoutes,
  OrderRoutes,
  ProfileRoutes,
  CartRoutes,
} from "./StackRoutes";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          bottom: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeRoutes}
        options={() => ({
          tabBarIcon: ({ focused, size }) => (
            <MaterialIcons
              name="store"
              color={focused ? theme.colors.primary : theme.colors.darkBlue}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Cart"
        component={CartRoutes}
        options={({ route }) => ({
          tabBarIcon: ({ focused, size }) => (
            <MaterialIcons
              name="request-page"
              color={focused ? theme.colors.primary : theme.colors.darkBlue}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="OrderScreen"
        component={OrderRoutes}
        options={({ route }) => ({
          tabBarIcon: ({ focused, size }) => (
            <MaterialIcons
              name="request-page"
              color={focused ? theme.colors.primary : theme.colors.darkBlue}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileRoutes}
        options={({ route }) => ({
          tabBarIcon: ({ focused, size }) => (
            <AntDesign
              name="user"
              color={focused ? theme.colors.primary : theme.colors.darkBlue}
              size={size}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
