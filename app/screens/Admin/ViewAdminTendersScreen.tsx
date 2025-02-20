import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { FlatList, StatusBar, View, ViewStyle } from "react-native"
import { AppStackScreenProps, goBack } from "app/navigators"
import { Header, Screen, Text } from "app/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface ViewAdminTendersScreenProps extends AppStackScreenProps<"ViewAdminTenders"> {}

export const ViewAdminTendersScreen: FC<ViewAdminTendersScreenProps> = observer(
  function ViewAdminTendersScreen() {
    const DATA = [
      {
        id: "1",
        name: "First Item",
        price: "1000",
        deadline: "12/12/2021",
      },
      {
        id: "2",
        name: "Second Item",
        price: "2000",
        deadline: "15/12/2021",
      },
      {
        id: "3",
        name: "Third Item",
        price: "3000",
        deadline: "18/12/2021",
      },
    ]

    type ItemProps = { id: string; name: string; price: string; deadline: string }

    const Item = ({ id, name, price, deadline }: ItemProps) => (
      <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 20 }}>
        <Text>{id}</Text>
        <Text>{name}</Text>
        <Text>{price}</Text>
        <Text>{deadline}</Text>
      </View>
    )
    return (
      <Screen style={$root}>
        <StatusBar backgroundColor="white" />
        <Header
          title="View Tenders"
          backgroundColor="#006049"
          containerStyle={{ backgroundColor: "#006049" }}
          titleStyle={{ color: "white", fontWeight: "bold", fontSize: 20 }}
          leftIcon="back"
          leftIconColor="white"
          onLeftPress={goBack}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
            backgroundColor: "#00AF3D",
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>ID</Text>
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Name</Text>
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Price</Text>
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Deadline</Text>
        </View>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item id={item.id} name={item.name} price={item.price} deadline={item.deadline} />
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
