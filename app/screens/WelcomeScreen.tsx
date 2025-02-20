import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { ImageBackground, ImageStyle, View, Text, ViewStyle, TextStyle, Pressable } from "react-native"

import { AppStackScreenProps } from "../navigators"
import { Icon } from "app/components"

const backgroundImage = require("../../assets/images/Dashboard/DashBoard.png")
interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(props:any) {
  const { navigation } = props
  return (
    <ImageBackground source={backgroundImage} style={$backgroundImage}>
      <View style={$topContainer}>
        <Icon icon="user" color="white" style={$icon}></Icon>
        <Text style={$text}> Avantika Garg</Text>
        <Icon icon="menu" color="white" style={$icon}></Icon>
      </View>
      <View style={$bottomContainer}>
        <View style={$dashboardBackground}>
          <Text style={$dashboardText}>DASHBOARD</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 50 }}>
        <Pressable
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            height: 150,
            width: 150,
            borderRadius: 20,
            elevation: 15
          }}
          onPress={() => navigation.navigate("AdminModels")}
        >
          <View
            style={{
              backgroundColor: "#006049",
              height: 100,
              width: 100,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
              marginBottom: 10,
              elevation:5
            }}
          >
            <Icon icon="admin" color="white" style={{ height: 50, width: 50 }}></Icon>
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Admin</Text>
        </Pressable>
        <Pressable
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            height: 150,
            width: 150,
            borderRadius: 20,
            elevation: 15,
          }}
          onPress={() => navigation.navigate("UserModels")}
        >
          <View
            style={{
              backgroundColor: "#006049",
              height: 100,
              width: 100,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
              marginBottom: 10,
              elevation: 5,
            }}
          >
            <Icon icon="users" color="white" style={{ height: 50, width: 50 }}></Icon>
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>User</Text>
        </Pressable>
      </View>
    </ImageBackground>
  )
})

const $backgroundImage: ImageStyle = {
  flex: 1,
  height: "100%",
  width: "100%",
  resizeMode: "cover",
}
const $topContainer: ViewStyle = {
  marginTop: 100,
  justifyContent: "space-around",
  flexDirection: "row",
}
const $bottomContainer: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  marginTop: 100,
}
const $dashboardBackground: ViewStyle = {
  backgroundColor: "white",
  width: 200,
  height: 50,
  borderRadius: 50,
  justifyContent: "center",
  alignItems: "center",
}
const $dashboardText: TextStyle = { fontSize: 20, fontWeight: "bold", color: "#00AF3D" }
const $icon: ImageStyle = { height: 50, width: 50 }
const $text: TextStyle = { fontSize: 20, fontWeight: "bold", color: "white", alignSelf: "center" }
