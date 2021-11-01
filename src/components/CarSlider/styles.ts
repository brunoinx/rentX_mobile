import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";

const fullWidht = Math.ceil(Dimensions.get("window").width);

type DotsProps = {
  active: boolean;
};

export const Container = styled.View`
  width: 100%;
  position: relative;
`;

export const GroupDotsIndex = styled.View`
  width: 14%;
  flex-direction: row;

  position: absolute;
  top: 0;
  right: 8px;
`;

export const Dots = styled.View<DotsProps>`
  ${({ theme, active }) => css`
    height: 6px;
    width: 6px;
    margin-right: 8px;
    border-radius: 6px;

    background-color: ${active ? theme.colors.shape_dark : theme.colors.shape};
  `}
`;

export const ContentImage = styled.View`
  width: ${fullWidht}px;
  height: 120px;
  margin-top: 20px;

  justify-content: center;
  align-items: center;
`;

export const CarImage = styled.Image`
  width: 220px;
  height: 120px;
`;
