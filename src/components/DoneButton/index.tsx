import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles';

export type DoneButtonProps = TouchableOpacityProps & {
  title: string;
}

export function DoneButton({ title, ...rest }: DoneButtonProps) {
  return (
    <S.Container
      activeOpacity={0.7}
      {...rest}
    >
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}