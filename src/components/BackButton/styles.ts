import styled from "styled-components/native";
import { BorderlessButton } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled(BorderlessButton)``;

export const Icon = styled(MaterialIcons).attrs(({ theme, color }) => ({
  name: "chevron-left",
  size: 32,
  color: !!color ? color : theme.colors.text,
}))``;
