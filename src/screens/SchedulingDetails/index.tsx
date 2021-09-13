import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { Acessory } from '../../components/Acessory';
import { CarSlider } from '../../components/CarSlider';
import { BackButton } from '../../components/BackButton';

import { getAcessoryIcon } from '../../utils/getAcessoryIcon';

import * as S from './styles';

type CarDetailsProps = {
}

export function SchedulingDetails({ }: CarDetailsProps) {
  const { navigate, goBack } = useNavigation();

  return (
    <S.Container>
      <StatusBar barStyle="dark-content" />
      <S.Header>
        <BackButton onPress={() => goBack()} />
      </S.Header>

      {/* <CarSlider imgUrl={[Lambo]} /> */}

      <S.Content>
        <S.Detail>
          <S.Wrapper>
            <S.Label>Lamborghini</S.Label>
            <S.ModelText>Huracan</S.ModelText>
          </S.Wrapper>

          <S.Wrapper>
            <S.Label>Ao dia</S.Label>
            <S.PriceText>R$ 580</S.PriceText>
          </S.Wrapper>
        </S.Detail>

        <S.WrapperAcessory>

        </S.WrapperAcessory>

        <S.RentalPeriod>
          <S.BoxCalendar>
            <S.IconCalendar />
          </S.BoxCalendar>

          <S.DateInfo>
            <S.DateTitle>De</S.DateTitle>
            <S.DateValue>18/06/2021</S.DateValue>
          </S.DateInfo>

          <S.Arrow />

          <S.DateInfo>
            <S.DateTitle>Até</S.DateTitle>
            <S.DateValue>20/06/2021</S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>

        <S.RentalPrice>
          <S.WrapperInfoTotal>
            <S.LabelTotal>Total</S.LabelTotal>
            <S.PriceQuota>R$ 580 x3 diárias</S.PriceQuota>
          </S.WrapperInfoTotal>

          <S.PriceTotal>R$ 2.900</S.PriceTotal>
        </S.RentalPrice>
      </S.Content>

      <S.WrapperButton>
        <Button
          title="Alugar agora"
          color="green"
          onPress={() => navigate('ScheduleDone')}
        />
      </S.WrapperButton>
    </S.Container>
  );
};