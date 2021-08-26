import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import * as S from './styles';

type Props = BorderlessButtonProps & {
  color?: string;
}

export function BackButton({ color, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Icon color={color}/>
    </S.Container>
  );
};