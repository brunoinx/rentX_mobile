import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import { BackButton } from '../../components/BackButton';

import ArrowSvg from '../../assets/icons/arrow_right.svg';

import * as S from './styles';

type SchedulingProps = {
}

export function Scheduling({  }: SchedulingProps) {
  return (
   <S.Container>
     <StatusBar barStyle="light-content" />
      <S.Header>
        <BackButton onPress={() => { }} color="#FFF"/>

        <S.Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </S.Title>

        <S.RentalPeriod>
          <S.DateContainer>
            <S.LabelDate>DE</S.LabelDate>
            <S.DateInput
              keyboardType="numeric"
              maxLength={10}
              value={inputDate1}
              onChangeText={setInputDate1}
            />
          </S.DateContainer>

          <ArrowSvg width={52} height={18} />

          <S.DateContainer>
            <S.LabelDate>ATÉ</S.LabelDate>
            <S.DateInput
              keyboardType="numeric"
              maxLength={10}
              value={inputDate2}
              onChangeText={setInputDate2}
            />
          </S.DateContainer>
        </S.RentalPeriod>
      </S.Header>
   </S.Container>
  );
};