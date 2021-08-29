import styled, { css } from "styled-components/native";
import { TouchableOpacity } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity)`
  ${({ theme }) => css`
      height: 58px;
      width: 90px;
      background-color: ${theme.colors.shape_dark};

      align-items: center;
      justify-content: center;
      flex-direction: row;
  `}
`;

export const Title = styled.Text`
   ${({ theme }) => css`
      color: ${theme.colors.text_light};
      font-family: ${theme.fonts.inter_500};
      font-size: ${RFValue(15)}px;
      line-height: ${RFValue(25)}px;
  `}
`;