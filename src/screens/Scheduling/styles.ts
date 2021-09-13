import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
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
    line-height: 36px;
    margin-top: 18px;
    font-size: ${RFValue(26)}px;
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
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.text};
  `}
`;

export const LabelDate = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(12)}px;
    color: ${theme.colors.text};
    font-family: ${theme.fonts.archivo_500};
  `}
`;

export const DateInput = styled.TextInput`
  ${({ theme }) => css`
    height: 30px;
    width: 100%;
    font-size: ${RFValue(15)}px;
    font-family: ${theme.fonts.inter_500};
    color: ${theme.colors.text_light};
  `}
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  paddingBottom: 30,
})``;

export const WrapperButton = styled.View`
  padding: 10px 20px 16px;
`;
