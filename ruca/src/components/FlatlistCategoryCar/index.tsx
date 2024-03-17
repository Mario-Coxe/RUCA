/** @format */

import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  NativeBaseProvider,
  Box,
  Image,
  Text,
  VStack,
  Pressable,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { PRIMARY, SECUNDARY, FIFTH } from "@/styles/global";

export default function FlatlistCategoryCar({ data }: any) {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        borderWidth: 1,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        borderColor: FIFTH,
        marginHorizontal: 10,
        borderRadius: 10,
      }}>
      <Image
        source={{
          uri: data.logo,
        }}
        alt='Alternate Text'
        size={7}
      />
      <Text>{data.type}</Text>
    </TouchableOpacity>
  );
}
