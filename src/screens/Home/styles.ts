import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList } from "react-native";
import { CarProps } from "../../components/Car";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.shape};
  `};
`;

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 113px;
    padding: 28px 18px 24px;

    background-color: ${theme.colors.header};
  `};
`;

export const HeaderWrapper = styled.View`
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const TotalCars = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.text_detail};
    font-family: ${theme.fonts.inter_500};
  `};
`;

export const ListCar = styled(FlatList as new () => FlatList<CarProps>).attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 30
  },
  showsVerticalScrollIndicator: false
})``;

export const WrapperCard = styled.View`
  margin-bottom: 14px;
`;
