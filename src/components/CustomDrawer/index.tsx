import { ReactNode } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../styles/colors";

interface CustomDrawerProps {
  props: ReactNode;
}

function CustomDrawer({ props }: CustomDrawerProps) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: colors.primary }}
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
          }}
        >
          Douglas Munaro
        </Text>
        <View style={{ flex: 1, paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
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
