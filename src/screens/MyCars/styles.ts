import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { CarSchedulingProps } from ".";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    padding: 38px 20px 24px;

    background-color: ${theme.colors.header};
  `};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.archivo_600};
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(31)}px;
  margin-top: 20px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.inter_400};
  font-size: ${RFValue(13)}px;
  margin-top: 14px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 16px;
`;

export const Appointments = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
`;

export const AppointmentsTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.inter_400};
  font-size: ${RFValue(15)}px;
`;

export const AppointmentsQuantity = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.inter_500};
  font-size: ${RFValue(15)}px;
`;

export const ListAppointmentCars = styled(
  FlatList as new () => FlatList<CarSchedulingProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 20,
  },
})``;

export const CarWrapper = styled.View`
  margin-bottom: 15px;
`;

export const CarFooter = styled.View`
  ${({ theme }) => css`
    width: 100%;
    min-height: 42px;
    padding: 0 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.background_secondary};

    border-top-width: 1px;
    border-top-color: ${theme.colors.background_primary};
  `};
`;

export const RentalPeriod = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PeriodTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  font-size: ${RFValue(13)}px;
  text-transform: uppercase;
`;

export const CarFooterDate = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.inter_400};
  font-size: ${RFValue(14)}px;
`;
