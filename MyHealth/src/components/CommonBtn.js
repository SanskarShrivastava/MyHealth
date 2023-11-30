import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
const CommonBtn = ({ w, h, txt, onClick, status }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onClick();
      }}
      style={{ alignItems: "center", marginTop: 10, marginBottom: 10 }}
    >
      {status ? (
        <TouchableOpacity
          style={{
            backgroundColor: "#2683C3",
            width: w,
            height: h,
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16, alignSelf: "center" }}>
            {txt}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            backgroundColor: "#8e8e8e",
            width: w,
            height: h,
            justifyContent: "center",
            opacity: 0.5,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16, alignSelf: "center" }}>
            {txt}
          </Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};
export default CommonBtn;
