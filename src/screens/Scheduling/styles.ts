import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    padding: 34px 22px 26px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    background-color: ${theme.colors.header};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    line-height: 41px;
    margin-top: 26px;
    font-size: ${RFValue(30)}px;
    color: ${theme.colors.text_light};
    font-family: ${theme.fonts.archivo_600};
  `}
`;

export const RentalPeriod = styled.View`
  width: 100%;
  margin-top: 18px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DateContainer = styled.View`
  ${({ theme }) => css`
    width: 94px;
    height: 42px;

    flex-direction: row;
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.text};
  `}
`;

export const LabelDate = styled.Text`
  ${({ theme }) => css`
    margin-bottom: 6px;
    font-size: ${RFValue(12)}px;
    color: ${theme.colors.text};
    font-family: ${theme.fonts.archivo_500};
  `}
`;

export const DateInput = styled.TextInput`
  ${({ theme }) => css`
    height: 50px;
    width: 70%;
    margin-left: 15px;
    font-size: ${RFValue(15)}px;
    font-family: ${theme.fonts.inter_500};
    color: ${theme.colors.text_light};
  `}
`;
