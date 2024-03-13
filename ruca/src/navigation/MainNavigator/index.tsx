import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "@expo/vector-icons/Ionicons";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
import { FIFTH, FOURTH, PRIMARY, SECUNDARY } from "@/styles/global";
import Home from "@/screens/Home";
import Profile from "@/screens/Profile";
import Favorites from "@/screens/Favorites";

/*
const InfoImovelStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="InfoImovel" component={InfoImovel} />
      <Stack.Screen
        name="ChatTalk"
        component={ChatTalk}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="VisitAppointment" component={MarkDataCalendar} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home02"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="InfoImovelStack" component={InfoImovelStack} options={{ headerShown: false }}/>
      
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const ChatStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatTalk"
        component={ChatTalk}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  );
};

const ScreenProfile = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MyImovels" component={MyImovels} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="MyInfoImovel" component={InfoImovel} />
        <Stack.Screen name="UpdateMyImovel" component={AddImovel} />
      </Stack.Navigator>
    );
  };

*/
export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Favorite") {
            iconName = focused ? "heart" : "heart-outline";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={25} color={color} />;
        },
        tabBarActiveTintColor: SECUNDARY,
        tabBarInactiveTintColor: FOURTH,
        tabBarStyle: {
          display: getTabBarVisibility(route),
          borderTopColor: "transparent",
          backgroundColor: PRIMARY,
          paddingBottom: 5,
          paddingTop: 5,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Favorite"
        component={Favorites}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}


const getTabBarVisibility = (route: any) => {
  //console.warn(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";
  //console.warn(routeName)MyInfoImovel;

  if (
    routeName === "MyImovels" ||
    routeName === "MyInfoImovel" ||
    routeName === "UpdateMyImovel" ||
    routeName === "ChatTalk"
  ) {
    return "none";
  }
  return "flex";
};
