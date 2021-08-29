import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import theme from "../../styles/theme";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background_secondary};
  `}
`;

export const Header = styled.View`
  width: 100%;
  padding: 10px 16px 0;

  flex-direction: row;
  justify-content: space-between;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: { paddingBottom: 30 },
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
  padding: 12px 20px 0;
  margin-top: 18px;
`;

export const Detail = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;

export const Wrapper = styled.View``;

export const Label = styled.Text`
  ${({ theme }) => css`
    margin-bottom: 4px;
    text-transform: uppercase;
    font-size: ${RFValue(10)}px;
    font-family: ${theme.fonts.archivo_500};
    color: ${theme.colors.text_detail};
  `}
`;

export const ModelText = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(25)}px;
    line-height: 30px;
    font-family: ${theme.fonts.archivo_500};
    color: ${theme.colors.title};
  `}
`;

export const PriceText = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(25)}px;
    line-height: 30px;
    font-family: ${theme.fonts.archivo_500};
    color: ${theme.colors.main};
  `}
`;

export const WrapperAcessory = styled.View`
  width: 100%;
  margin: 16px 0 10px;

  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
`;

export const RentalPeriod = styled.View`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 8px;
    padding: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.background_primary};
  `}
`;

export const BoxCalendar = styled.View`
  ${({}) => css`
    height: 50px;
    width: 50px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.main};
  `};
`;

export const IconCalendar = styled(Feather).attrs({
  name: "calendar",
  size: RFValue(28),
})`
  color: ${({ theme }) => theme.colors.shape};
`;

export const DateInfo = styled.View``;

export const DateTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(10)}px;
    line-height: 18.5px;
    text-transform: uppercase;
    font-family: ${theme.fonts.archivo_500};
    color: ${theme.colors.text_detail};
  `}
`;

export const DateValue = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(15)}px;
    font-family: ${theme.fonts.inter_500};
    color: ${theme.colors.title};
  `}
`;

export const Arrow = styled(Feather).attrs({
  name: "chevron-right",
  size: RFValue(24),
})`
  color: ${({ theme }) => theme.colors.text};
  margin-top: 12px;
`;

export const RentalPrice = styled.View`
  width: 100%;
  margin-top: 16px;
  padding: 12px 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperInfoTotal = styled.View``;

export const LabelTotal = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(10)}px;
    line-height: 18.5px;
    text-transform: uppercase;
    font-family: ${theme.fonts.archivo_500};
    color: ${theme.colors.text_detail};
  `}
`;

export const PriceQuota = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(15)}px;
    font-family: ${theme.fonts.inter_500};
    color: ${theme.colors.title};
  `}
`;

export const PriceTotal = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${theme.fonts.archivo_500};
  color: ${theme.colors.success};
  align-self: flex-end;
`;


export const WrapperButton = styled.View`
  width: 90%;
  padding-bottom: 20px;
  align-self: center;
  align-items: center;
`;
