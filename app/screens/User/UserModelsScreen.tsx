import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { Pressable, StatusBar, View, ViewStyle } from "react-native"
import { AppStackScreenProps, goBack } from "app/navigators"
import { Header, Icon, Screen, Text } from "app/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface UserModelsScreenProps extends AppStackScreenProps<"UserModels"> {}

export const UserModelsScreen: FC<UserModelsScreenProps> = observer(function UserModelsScreen(
  props: any,
) {
  const { navigation } = props
  return (
    <Screen style={$root} preset="scroll">
      <StatusBar backgroundColor="white" />
      <Header
        title="User Models"
        backgroundColor="#006049"
        containerStyle={{ backgroundColor: "#006049" }}
        titleStyle={{ color: "white", fontWeight: "bold", fontSize: 20 }}
        leftIcon="back"
        leftIconColor="white"
        onLeftPress={goBack}
      />
      <Pressable
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          padding: 20,
          margin: 20,
          borderRadius: 20,
          elevation: 5,
        }}
        onPress={() => navigation.navigate("ViewAdminTenders")}
      >
        <View
          style={{
            backgroundColor: "#D9D9D9",
            height: 100,
            width: 100,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#006049",
              height: 80,
              width: 80,
              borderRadius: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon icon="view" color="white" style={{ height: 50, width: 50 }}></Icon>
          </View>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center", marginLeft: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>View Tenders</Text>
        </View>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          padding: 20,
          margin: 20,
          borderRadius: 20,
          elevation: 5,
        }}
        onPress={() => navigation.navigate("BidUsers")}
      >
        <View
          style={{
            backgroundColor: "#D9D9D9",
            height: 100,
            width: 100,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#006049",
              height: 80,
              width: 80,
              borderRadius: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon icon="bid" color="white" style={{ height: 50, width: 50 }}></Icon>
          </View>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center", marginLeft: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Bid for Tenders</Text>
        </View>
      </Pressable>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
