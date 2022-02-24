import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
import Home from "../screens/Home/Home";
import Market from "../screens/Market/Market";
import Order from "../screens/Order";
import ProductDetails from "../screens/ProductDetails";
import Requests from "../screens/Requests";
import Profile from "../screens/Settings/Profile"
import ConfirmationOrder from "../screens/ConfirmationOrder";
import Signin from "../screens/Signin/Signin";
import Login from "../screens/Login/Login";

const HomeRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Market"
        component={Market}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Product"
        component={ProductDetails}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const OrderRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Requests"
        component={Requests}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const ProfileRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Signin}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export { HomeRoutes, OrderRoutes, ProfileRoutes };
