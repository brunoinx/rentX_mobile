import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const Container = styled(TouchableOpacity)`
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Feather).attrs({
  name: 'arrow-left',
  size: 26,
})`
  color: ${({ theme }) => theme.colors.text};
`;
