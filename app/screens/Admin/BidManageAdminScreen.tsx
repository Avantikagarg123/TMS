import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { FlatList, StatusBar, View, ViewStyle } from "react-native"
import { AppStackScreenProps, goBack } from "app/navigators"
import { Header, Screen, Text } from "app/components"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface BidManageAdminScreenProps extends AppStackScreenProps<"BidManageAdmin"> {}

export const BidManageAdminScreen: FC<BidManageAdminScreenProps> = observer(
  function BidManageAdminScreen() {
    const DATA = [
      {
        id: "1",
        name: "First Item",
        price: "1000",
        deadline: "12/12/2021",
        accept: "Accept",
        reject: "Reject",
      },
      {
        id: "2",
        name: "Second Item",
        price: "2000",
        deadline: "15/12/2021",
        accept: "Accept",
        reject: "Reject",
      },
      {
        id: "3",
        name: "Third Item",
        price: "3000",
        deadline: "18/12/2021",
        accept: "Accept",
        reject: "Reject",
      },
    ]

    type ItemProps = {
      id: string
      name: string
      price: string
      deadline: string
      accept: string
      reject: string
    }

    const Item = ({ name, price, deadline, accept, reject }: ItemProps) => (
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          margin: 20,
          borderRadius: 10,
          elevation: 5,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 10 }}>
          <Text>Tender Name:</Text>
          <Text>{name}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 10 }}>
          <Text>Tender Price:</Text>
          <Text>{price}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 10 }}>
          <Text>Deadline:</Text>
          <Text>{deadline}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View
            style={{
              backgroundColor: "#006049",
              width: 100,
              height: 30,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>{accept}</Text>
          </View>
          <View
            style={{
              backgroundColor: "red",
              width: 100,
              height: 30,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>{reject}</Text>
          </View>
        </View>
      </View>
    )
    return (
      <Screen style={$root}>
        <StatusBar backgroundColor="white" />
        <Header
          title="Bid Manage"
          backgroundColor="#006049"
          containerStyle={{ backgroundColor: "#006049" }}
          titleStyle={{ color: "white", fontWeight: "bold", fontSize: 20 }}
          leftIcon="back"
          leftIconColor="white"
          onLeftPress={goBack}
        />
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item
              id={item.id}
              name={item.name}
              price={item.price}
              deadline={item.deadline}
              accept={item.accept}
              reject={item.reject}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: "#F4FFF5",
}
