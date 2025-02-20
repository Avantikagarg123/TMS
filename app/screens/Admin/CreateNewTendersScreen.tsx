import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StatusBar, View, ViewStyle } from "react-native"
import { AppStackScreenProps, goBack } from "app/navigators"
import { Header, Screen, Text, TextField } from "app/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface CreateNewTendersScreenProps extends AppStackScreenProps<"CreateNewTenders"> {}

export const CreateNewTendersScreen: FC<CreateNewTendersScreenProps> = observer(
  function CreateNewTendersScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={$root} preset="scroll">
        <StatusBar backgroundColor="white" />
        <Header
          title="Add New Tenders"
          backgroundColor="#006049"
          containerStyle={{ backgroundColor: "#006049" }}
          titleStyle={{ color: "white", fontWeight: "bold", fontSize: 20 }}
          leftIcon="back"
          leftIconColor="white"
          onLeftPress={goBack}
        />

        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            paddingTop:50,
            margin: 20,
            marginTop: 50,
            borderRadius: 10,
            elevation: 5,
            height: 600,
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
            <Text style={{ fontWeight: "bold" }}>Tender Name:</Text>
            <TextField
              placeholder="Enter Tender Name"
              containerStyle={{ width: "55%" }}
              style={{ fontSize: 15 }}
            ></TextField>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
            <Text style={{ fontWeight: "bold" }}>Tender Type:</Text>
            <TextField
              placeholder="Enter Tender Type"
              containerStyle={{ width: "55%" }}
              style={{ fontSize: 15 }}
            ></TextField>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
            <Text style={{ fontWeight: "bold" }}>Tender Price:</Text>
            <TextField
              placeholder="Enter Tender Price"
              containerStyle={{ width: "55%" }}
              style={{ fontSize: 15 }}
            ></TextField>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
            <Text style={{ fontWeight: "bold" }}>Start Time:</Text>
            <TextField
              placeholder="Enter Start Time"
              containerStyle={{ width: "55%" }}
              style={{ fontSize: 15 }}
            ></TextField>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
            <Text style={{ fontWeight: "bold" }}>End Time:</Text>
            <TextField
              placeholder="Enter End Time"
              containerStyle={{ width: "55%" }}
              style={{ fontSize: 15 }}
            ></TextField>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
            <Text style={{ fontWeight: "bold" }}>Buffer Time:</Text>
            <TextField
              placeholder="Enter Buffer Time"
              containerStyle={{ width: "55%" }}
              style={{ fontSize: 15 }}
            ></TextField>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
            <Text style={{ fontWeight: "bold" }}>Description:</Text>
            <TextField
              placeholder="Enter Description"
              containerStyle={{ width: "55%" }}
              style={{ fontSize: 15 }}
            ></TextField>
          </View>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#006049",
                height: 50,
                width: 150,
                borderRadius: 50,
                marginTop: 20,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>SUBMIT</Text>
            </View>
          </View>
        </View>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: "#F4FFF5",
}
