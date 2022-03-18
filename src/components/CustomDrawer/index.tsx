import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { ReactNode } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from 'styled-components/native';
import { signOut } from "../../utils/storage";


interface CustomDrawerProps {
  props: ReactNode;
}

function CustomDrawer({ props }: CustomDrawerProps) {
  const theme = useTheme()
  const navigation = useNavigation();

  async function logout() {
    await signOut()
    navigation.navigate("Login")
  }

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: theme.colors.primary }}
      >
        <Image
          source={require("../../assets/user-profile.jpg")}
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
            marginBottom: 10,
            marginHorizontal: 10,
          }}
        />
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            marginBottom: 10,
            marginHorizontal: 10,
            fontWeight: "bold"
          }}
        >
          Nome de usuário
        </Text>
        <View style={{ flex: 1, paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => logout()} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center", }}>
          <MaterialCommunityIcons name="exit-to-app" size={24} color="#fff" />
            <Text
              style={{
                fontSize: 16,
                marginLeft: 5,
                fontWeight: "bold",
                color: "#fff"
              }}
            >
              Sair
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CustomDrawer;
