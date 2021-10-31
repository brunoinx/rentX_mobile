import React, { } from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';

import { DoneButton } from '../../components/DoneButton';

import LogoSvg from '../../assets/icons/Union.svg';
import CheckSvg from '../../assets/icons/vcheck.svg';

import * as S from './styles';
import { useNavigation } from '@react-navigation/native';

export function ScheduleDone() {
  const { width } = useWindowDimensions();
  const { reset } = useNavigation();
  const formatWidth = Math.round(width);

  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <LogoSvg width={formatWidth} height={300} />

      <S.Content>
        <S.BoxCheckbox>
          <CheckSvg height={50} width={50} />
        </S.BoxCheckbox>

        <S.Title>Carro alugado!</S.Title>
        <S.Description>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pegar o seu automóvel.
        </S.Description>

        <DoneButton title='OK' onPress={() => {
          reset({
            routes: [{ name: 'Home' }, { name: 'MyCars' }]
          })
        }} />
      </S.Content>
    </S.Container>
  );
};