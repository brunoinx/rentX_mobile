import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles';

export type ButtonProps = TouchableOpacityProps & {
  title: string;
  color?: 'red' | 'green';
}

export function Button({ title, color = 'red', ...rest }: ButtonProps) {
  return (
    <S.Container
      color={color}
      activeOpacity={0.7}
      {...rest}
    >
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}