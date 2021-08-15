import styled, { css } from "styled-components/native";
import { TouchableOpacity } from 'react-native'

type Props = {
  color: 'red' | 'green';
}

export const Container = styled(TouchableOpacity)<Props>`
  ${({ theme, color }) => css`
      height: 58px;
      width: 100%;
      border-radius: 8px;
      background-color: ${color === 'red' ? theme.colors.main : theme.colors.success};

      align-items: center;
      justify-content: center;
      flex-direction: row;
  `}
`;

export const Title = styled.Text`
   ${({ theme }) => css`
      color: ${theme.colors.text_light};
      font-family: ${theme.fonts.inter_500};
      font-size: 14px;
      line-height: 25px;
      margin-left: 14px;
  `}
`;