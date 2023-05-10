import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

type IconButtonProps = {
  icon: React.ComponentProps<typeof EvilIcons>["name"];
  textIcon?: string | number;
};

const IconButton = ({ textIcon, icon }: IconButtonProps) => {
  return (
    <TouchableOpacity
      style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
    >
      <EvilIcons name={icon} size={20} color="gray" />
      <Text style={styles.footerTitle}>{textIcon}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  footerTitle: {
    color: "gray",
  },
});

export default IconButton;
