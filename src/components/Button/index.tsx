import React from 'react'
import { useTheme } from 'styled-components';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native'

import * as S from './styles';

export type ButtonProps = TouchableOpacityProps & {
  title: string;
  color?: 'red' | 'green';
  isLoading?: boolean;
  enabled?: boolean;
}

export function Button({
  title,
  color = 'red',
  isLoading = false,
  enabled = true,
  ...rest
}: ButtonProps) {
  const theme = useTheme();

  return (
    <S.Container
      color={color}
      activeOpacity={0.7}
      disabled={!enabled}
      style={{ opacity: enabled ? 1 : 0.5 }}
      {...rest}
    >
      {isLoading
        ? <ActivityIndicator color={theme.colors.text_light} />
        : <S.Title>{title}</S.Title>
      }
    </S.Container>
  );
}