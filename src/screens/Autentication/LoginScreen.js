import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import styles from "./Styles/LoginScreenStyle";
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins"
import { useDispatch } from "react-redux";
import { login } from "../../features/authentication/authSlice";
import { useNavigation } from "@react-navigation/native";



const LoginScreen = () => {

  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  const [showPassword, setShowPassword] = useState(false);
  const [phone_number, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();


  const handleLogin = async () => {
    try {
      const response = await dispatch(login({ password, phone_number }));

      //console.log("RESPONSE->", response)
      if (response.payload.data.type_user === "student") {
        navigation.navigate("Home");
      } else {
        console.error("O tipo de usuário não é aluno:", response.data.type_user);
      }
    } catch (error) {
      console.error("Erro durante o login:", error);
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate("Forgot");
  };


  if (!fontsLoaded) {
    return (
      <View style={styles.container}>

      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={[styles.bemvindoText, { fontFamily: "Poppins_700Bold" }]}>Bem-Vindo!</Text>
        <Text style={[styles.loginText, { fontFamily: "Poppins_600SemiBold" }]}>Faça o Login</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputIconContainer}>
          <FontAwesome5
            name="user"
            size={24}
            color="gray"
            style={[styles.inputIcon]}
          />
          <TextInput
            style={[
              styles.input, { fontFamily: "Poppins_600SemiBold" }
            ]}
            placeholder="Número"
            onChangeText={(text) => setPhone(text)}
            placeholderTextColor={"gray"}
          />
        </View>
        <View style={styles.inputIconContainer}>
          <AntDesign
            name="lock1"
            size={24}
            color="gray"
            style={styles.inputIcon}
          />
          <TextInput
            style={[
              styles.input, { fontFamily: "Poppins_600SemiBold" }
            ]}
            placeholder="Senha"
            secureTextEntry={!showPassword}
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor={"gray"}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <FontAwesome5
              name={showPassword ? "eye-slash" : "eye"}
              size={24}
              color="gray"
              style={styles.passwordIcon}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text
            style={[
              styles.forgotPasswordText, { fontFamily: "Poppins_400Regular" }
            ]}
          >
            Esqueceu a Senha?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.entrarButton} onPress={handleLogin}>
          <Text
            style={[
              styles.entrarButtonText, { fontFamily: "Poppins_600SemiBold" }
            ]}
          >
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="#0077B6" />
    </View>
  );
};

export default LoginScreen;
