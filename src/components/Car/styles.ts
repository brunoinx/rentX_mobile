import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity)`
  ${({ theme }) => css`
    width: 100%;
    height: 126px;
    padding: 16px 24px;
    
    flex-direction: row;
    justify-content: space-between;
    background-color: ${theme.colors.background_secondary};
  `}
`;

export const Details = styled.View`
  height: 100%;
  width: 40%;
  justify-content: space-between;
`;

export const ContentCar = styled.View``

export const ImageCar = styled.Image.attrs({
  resizeMode: 'stretch'
})`
  height: 87px;
  width: 168px;
`;

export const WrapperInfoCar = styled.View`
  margin-bottom: 10px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    text-transform: uppercase;
    font-size: ${RFValue(10)}px;
    margin-bottom: 4px;
    font-family: ${theme.fonts.archivo_500};
    color: ${theme.colors.text_detail};
  `}
`;

export const ModelCar = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(15)}px;
    font-family: ${theme.fonts.archivo_500};
    color: ${theme.colors.title};
  `}
`;

export const WrapperIcon = styled.View`
  width: 80%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const PriceText = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(15)}px;
    font-family: ${theme.fonts.archivo_500};
    color: ${theme.colors.main};
  `}
`;
