import React from 'react';

import { Button } from '../../components/Button';
import { Acessory } from '../../components/Acessory';
import { CarSlider } from '../../components/CarSlider';
import { BackButton } from '../../components/BackButton';

import Lambo from '../../assets/images/Lambo.png';

import SpeedSvg from '../../assets/icons/speed.svg';
import UpSvg from '../../assets/icons/up.svg';
import StrenghtSvg from "../../assets/icons/strenght.svg";
import GasolineSvg from '../../assets/icons/gas.svg';
import GearSvg from '../../assets/icons/gear.svg';
import UserSvg from '../../assets/icons/user.svg';

import * as S from './styles';

type CarDetailsProps = {
}

export function SchedulingDetails({ }: CarDetailsProps) {
  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={() => { }} />
      </S.Header>

      <CarSlider imgUrl={[Lambo]} />

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
          <Acessory name="380km/h" icon={SpeedSvg} />
          <Acessory name="3.2s" icon={UpSvg} />
          <Acessory name="800 HP" icon={StrenghtSvg} />
          <Acessory name="Gasolina" icon={GasolineSvg} />
          <Acessory name="Auto" icon={GearSvg} />
          <Acessory name="2 pessoas" icon={UserSvg} />
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
        <Button title="Alugar agora" color="green"/>
      </S.WrapperButton>
    </S.Container>
  );
};