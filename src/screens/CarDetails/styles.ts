import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

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
  contentContainerStyle: { paddingBottom: 50 },
  showsVerticalScrollIndicator: false
})`
  width: 100%;
  padding: 12px 16px 0;
  margin-top: 18px;
`;

export const Detail = styled.View`
  flex-direction: row;
  align-items: center;
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
  margin: 20px 0 10px;

  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
`;

export const About = styled.Text`
  ${({ theme }) => css`
    line-height: 25px;
    text-align: justify;
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.text};
    font-family: ${theme.fonts.inter_400};
  `}
`;

export const WrapperButton = styled.View`
  width: 90%;
  padding-bottom: 20px;
  align-self: center;
  align-items: center;
`;
