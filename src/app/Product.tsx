import { View } from "react-native"
import { useRoute } from "@react-navigation/native"

import { StackRoutesProps } from "@/routes/StackRoutes"

import { Header } from "@/components/Header"
import { Title } from "@/components/Title"
import { ButtonIcon } from "@/components/ButtonIcon"

export type RouteParams = StackRoutesProps<"product">

export function Product( { navigation }: StackRoutesProps<"product"> ) {
  const { params } = useRoute<RouteParams["route"]>();

  return (
    <View style={{flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <ButtonIcon 
          name="arrow-circle-left"
          onPress={() => navigation.goBack()}
        />
        <Title>Product {params?.id}</Title>
        { /* <Title>Product {route.params?.id}</Title> */}
      </Header>
    </View>
  )
}