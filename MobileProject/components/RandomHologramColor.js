import React, { useEffect, useRef } from "react";
import randomcolor from "randomcolor";
import { View } from "react-native";

const RandomHologramColor = ({ imageSource }) => {
  const color = randomcolor();
  return (
    <View
      style={{
        backgroundColor: color,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image source={imageSource} style={{ width: 345, height: 81 }} />
    </View>
  );
};

export default RandomHologramColor;
