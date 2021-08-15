import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  ${({ theme }) => css`
    height: 90px;
    width: 98px;
    margin-bottom: 8px;
    border-radius: 4px;

    justify-content: center;
    align-items: center;

    background-color: ${theme.colors.line};
  `}
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    margin-top: 8px;
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.text};
    font-family: ${theme.fonts.inter_500};
  `}
`;
