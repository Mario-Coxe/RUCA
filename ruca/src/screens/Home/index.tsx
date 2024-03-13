import React from "react";
import { StatusBar } from "expo-status-bar";
import {  TouchableOpacity,  FlatList } from "react-native";
import {
  NativeBaseProvider,
  Box,
  HStack,
  Avatar,
  Icon,
  Pressable,
  VStack,
  Text,
} from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import FlatlistCategoryCar from "@/components/FlatlistCategoryCar";
import FlatlistCarCard from "@/components/FlatlistCarCard";
import { PRIMARY } from "@/styles/global";

const data = [
  {
    id: "1",
    logo: "https://i.pinimg.com/originals/84/a2/ff/84a2ffcc555d2f1f1d0a260e67c86b1a.png",
    type: "Toyota",
  },
  {
    id: "2",
    logo: "https://i.pinimg.com/originals/84/a2/ff/84a2ffcc555d2f1f1d0a260e67c86b1a.png",
    type: "Toyota",
  },
  {
    id: "3",
    logo: "https://i.pinimg.com/originals/84/a2/ff/84a2ffcc555d2f1f1d0a260e67c86b1a.png",
    type: "Toyota",
  },
  {
    id: "4",
    logo: "https://i.pinimg.com/originals/84/a2/ff/84a2ffcc555d2f1f1d0a260e67c86b1a.png",
    type: "Toyota",
  },
  {
    id: "5",
    logo: "https://i.pinimg.com/originals/84/a2/ff/84a2ffcc555d2f1f1d0a260e67c86b1a.png",
    type: "Toyota",
  },
];

const dataCar = [
  {
    id: "1",
    img:[
      "https://images.pexels.com/photos/16385983/pexels-photo-16385983/free-photo-of-blue-ferrari-f8.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/16385983/pexels-photo-16385983/free-photo-of-blue-ferrari-f8.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/16385983/pexels-photo-16385983/free-photo-of-blue-ferrari-f8.jpeg?auto=compress&cs=tinysrgb&w=400"
    ],
    price: 2000,
    km: 4500,
    brand: "Ferrari 45006BX",
    owner: "Evandro Eusébio",
    type: "Gasolina"
  },
  {
    id: "2",
    img:[
      "https://images.pexels.com/photos/16385983/pexels-photo-16385983/free-photo-of-blue-ferrari-f8.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/16385983/pexels-photo-16385983/free-photo-of-blue-ferrari-f8.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/16385983/pexels-photo-16385983/free-photo-of-blue-ferrari-f8.jpeg?auto=compress&cs=tinysrgb&w=400"
    ],
    price: 2000,
    km: 4500,
    brand: "Ferrari 45006BX",
    owner: "Evandro Eusébio",
    type: "Gasolina"
  },
  {
    id: "3",
    img:[
      "https://images.pexels.com/photos/16385983/pexels-photo-16385983/free-photo-of-blue-ferrari-f8.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/16385983/pexels-photo-16385983/free-photo-of-blue-ferrari-f8.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/16385983/pexels-photo-16385983/free-photo-of-blue-ferrari-f8.jpeg?auto=compress&cs=tinysrgb&w=400"
    ],
    price: 2000,
    km: 4500,
    brand: "Ferrari 45006BX",
    owner: "Evandro Eusébio",
    type: "Gasolina"
  },
]

export default function Home() {
  return (
    <Box flex={1} flexDirection={"column"} backgroundColor={PRIMARY}>
      <HStack
        justifyContent={"space-between"}
        padding={30}
        alignItems={"center"}
      >
        <HStack space={5} alignItems={"center"}>
          <Avatar
            bg="green.500"
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
          />
          <VStack>
            <Text fontSize={12}>Evandro Eusébio</Text>
            <Text fontSize={12}>938390399</Text>
          </VStack>
        </HStack>
        <HStack space={5}>
          <TouchableOpacity>
            <Ionicons name="search" size={30} color={"#000"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={30} color={"#000"} />
          </TouchableOpacity>
        </HStack>
      </HStack>

      <Box marginBottom={30}>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({ item }) => <FlatlistCategoryCar data={item} />}
          showsHorizontalScrollIndicator={false}
        />
      </Box>
      <Box flex={1}>
        <FlatList
          data={dataCar}
          renderItem={({ item }) => <FlatlistCarCard data={item} />}
          showsVerticalScrollIndicator={false}
        />
      </Box>
    </Box>
  );
}
