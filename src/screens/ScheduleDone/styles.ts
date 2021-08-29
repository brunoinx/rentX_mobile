import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding-top: 50px;
    background-color: ${theme.colors.header};
  `}
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const BoxCheckbox = styled.View`
  ${({ theme }) => css`
    width: 84px;
    height: 84px;
    border-radius: 8px;

    align-items: center;
    justify-content: center;

    border-width: 7px;
    border-color: ${theme.colors.shape_dark};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(30)}px;
    line-height: ${RFValue(33)}px;
    color: ${theme.colors.text_light};
    margin-top: 40px;
    font-family: ${theme.fonts.archivo_600};
  `};
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    margin: 16px 0 50px;
    text-align: center;
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(25)}px;
    color: ${theme.colors.text_detail};
    font-family: ${theme.fonts.inter_400};
  `};
`;
