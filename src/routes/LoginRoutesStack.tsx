import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login/Login";
import Signin from "../screens/Signin/Signin";
import Routes from "./Routes";

const Stack = createStackNavigator();

function LoginRoutesStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Meu mercado"
          component={Routes}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LoginRoutesStack;
