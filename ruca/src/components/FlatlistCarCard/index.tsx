import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  NativeBaseProvider,
  Box,
  Text,
  VStack,
  Pressable,
  Image,
  HStack,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { PRIMARY, SECUNDARY, FIFTH } from "@/styles/global";
import Swiper from "react-native-swiper";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function FlatlistCarCard({ data }: any) {
  return (
    <Box
      width={"full"}
      flexDirection={"column"}
      borderRadius={20}
      marginBottom={10}
      paddingX={25}
    >
      <Swiper
        style={{ height: 200 }}
        horizontal
        dotColor="#000"
        activeDotColor="red"
        dotStyle={{
          marginTop: -10,
        }}
        activeDotStyle={{
          marginTop: -10,
        }}
      >
        {data.img.map((image: any, index: any) => (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            style={{ marginRight: 1 }}
          >
            <Image
              source={{
                uri: image,
              }}
              alt="car"
              width={"full"}
              height={200}
              borderTopLeftRadius={20}
              borderTopRightRadius={20}
            />
          </TouchableOpacity>
        ))}
      </Swiper>
      <HStack
        flex={1}
        backgroundColor={"#fff"}
        borderBottomLeftRadius={20}
        borderBottomRightRadius={20}
        padding={4}
        shadow={"3"}
        style={{ marginRight: 1 }}
        justifyContent={"space-between"}
      >
        <Box>
          <Text fontWeight={"bold"} fontSize={20}>{data.brand}</Text>
          <Text>{data.type}</Text>
          <Text>{data.owner}</Text>
          <Text>{data.km} km</Text>
        </Box>
        <Box justifyContent={"space-between"} alignItems={"flex-end"}>
          <Box backgroundColor={"#fff"} padding={2} alignItems={'center'} justifyContent={'center'} borderRadius={10}marginTop={-10} shadow={"9"}>
          <Image
              source={{
                uri: "https://i.pinimg.com/originals/84/a2/ff/84a2ffcc555d2f1f1d0a260e67c86b1a.png",
              }}
              alt="car"
              width={"full"}
              size={7}
            />
          </Box>
          <Text fontWeight={"bold"}  fontSize={20}>{data.price} kz</Text>
        </Box>
      </HStack>
    </Box>
  );
}
