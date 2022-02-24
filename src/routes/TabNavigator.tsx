import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeRoutes, OrderRoutes, ProfileRoutes } from "./StackRoutes";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { colors } from "../styles/colors";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
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
              color={focused ? colors.primary : colors.darkBlue}
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
              color={focused ? colors.primary : colors.darkBlue}
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
              color={focused ? colors.primary : colors.darkBlue}
              size={size}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
