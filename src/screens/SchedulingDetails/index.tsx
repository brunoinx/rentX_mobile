import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { Acessory } from '../../components/Acessory';
import { CarSlider } from '../../components/CarSlider';
import { BackButton } from '../../components/BackButton';

import { CarProps } from '../../dtos/CarDTO';
import { maskMoney } from '../../utils/maskMoney';
import { getAcessoryIcon } from '../../utils/getAcessoryIcon';
import { formattedDate } from '../../utils/formattedDate';

import * as S from './styles';

type CarDetailsProps = {
}

type Params = {
  car: CarProps;
  dates: string[];
}

export function SchedulingDetails({ }: CarDetailsProps) {
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const { car, dates } = params as Params;

  const [firstDate, lastDate] = dates.filter((date, idx) => {
    if (idx === 0 || idx === dates.length - 1) {
      return date;
    }
  });

  const priceFormatted = maskMoney(car.rent.price);
  const rentTotal = maskMoney(car.rent.price * dates.length);

  return (
    <S.Container>
      <StatusBar barStyle="dark-content" />
      <S.Header>
        <BackButton onPress={() => { }} />
      </S.Header>

      <CarSlider imgUrl={car.photos} />

      <S.Content>
        <S.Detail>
          <S.Wrapper>
            <S.Label>{car.brand}</S.Label>
            <S.ModelText>{car.name}</S.ModelText>
          </S.Wrapper>

          <S.Wrapper>
            <S.Label>{car.rent.period}</S.Label>
            <S.PriceText>{priceFormatted}</S.PriceText>
          </S.Wrapper>
        </S.Detail>

        <S.WrapperAcessory>
          {car.accessories.map(acessory => (
            <Acessory
              key={acessory.type}
              name={acessory.name}
              icon={getAcessoryIcon(acessory.type)}
            />
          ))}
        </S.WrapperAcessory>

        <S.RentalPeriod>
          <S.BoxCalendar>
            <S.IconCalendar />
          </S.BoxCalendar>

          <S.DateInfo>
            <S.DateTitle>De</S.DateTitle>
            <S.DateValue>{formattedDate(firstDate)}</S.DateValue>
          </S.DateInfo>

          <S.Arrow />

          <S.DateInfo>
            <S.DateTitle>Até</S.DateTitle>
            <S.DateValue>{formattedDate(lastDate)}</S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>

        <S.RentalPrice>
          <S.WrapperInfoTotal>
            <S.LabelTotal>Total</S.LabelTotal>
            <S.PriceQuota>
              {`${maskMoney(car.rent.price)} x${dates.length} diárias`}
            </S.PriceQuota>
          </S.WrapperInfoTotal>

          <S.PriceTotal>{rentTotal}</S.PriceTotal>
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