import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

export function BackButton({ ...rest }: TouchableOpacityProps) {
  return (
    <S.Container {...rest}>
      <S.Icon />
    </S.Container>
  );
};