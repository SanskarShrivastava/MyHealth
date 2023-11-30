import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");
const buttonWidth = width * 0.25;

export default function Navigation({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          width: width * 0.88,
          height: height * 0.12,
          bottom: height * 0.04,
          backgroundColor: "rgba(170, 212, 225, 2)",
          borderRadius: 9,
          shadowColor: "#555555",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: height * 0.08,
        }}
      >
        <TouchableOpacity
          style={{
            width: buttonWidth,
            height: height * 0.09,
            left: width * 0.035,
            top: height * 0.016,
            borderRadius: 9,
            shadowColor: "#555555",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            zIndex: 2,
            backgroundColor: "rgba(69, 69, 69, 0.2)",
            shadowColor: "#555",
            shadowRadius: height * 0.08,
          }}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text
            style={{
              position: "absolute",
              left: buttonWidth * 0.3,
              bottom: height * 0.015,
              opacity: 1,
              
              fontStyle: "normal",
              fontWeight: "900",
              fontSize: width * 0.04,
              color: "#FFFFFF",
              zIndex: 2,
            }}
          >
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: buttonWidth,
            position: "absolute",
            height: height * 0.09,
            left: width * 0.315,
            top: height * 0.015,
            borderRadius: 9,
            shadowColor: "#555555",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            zIndex: 2,
            backgroundColor: "rgba(69, 69, 69, 0.2)",
            shadowColor: "#555",
            shadowRadius: height * 0.08,
          }}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Text
            style={{
              position: "absolute",
              left: buttonWidth * 0.07,
              bottom: height * 0.015,
              opacity: 1,
              
              fontStyle: "normal",
              fontWeight: "900",
              fontSize: width * 0.04,
              color: "#FFFFFF",
              zIndex: 2,
            }}
          >
            Dashboard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: buttonWidth,
            position: "absolute",
            height: height * 0.09,
            right: width *0.035,
            top: height * 0.015,
            borderRadius: 9,
            shadowColor: "#555555",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            zIndex: 2,
            backgroundColor: "rgba(69, 69, 69, 0.2)",
            shadowColor: "#555",
            shadowRadius: height * 0.08,
          }}
          onPress={() => navigation.navigate("Account")}
        >
          <Text
            style={{
              position: "absolute",
              left: buttonWidth * 0.25,
              bottom: height * 0.015,
              opacity: 1,
              
              fontStyle: "normal",
              fontWeight: "900",
              fontSize: width * 0.04,
              color: "#FFFFFF",
              zIndex: 2,
            }}
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
