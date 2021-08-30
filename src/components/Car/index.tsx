import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

import EnergySvg from '../../assets/icons/energy.svg';

type RentProps = {
  period: string;
  price: number;
}

type AcessoryProps = {
  type: string;
  name: string;
}

export type CarProps = {
  id: string;
  brand: string;
  name: string;
  about: string;
  rent: RentProps;
  fuel_type: string;
  accessories: AcessoryProps[];
  photos: string[];
  thumbnail: string;
}

type Props = TouchableOpacityProps & {
  data: CarProps;
}

export function Car({ data, ...rest }: Props) {
  const priceFormated = parseFloat(data.rent.price.toString()).toFixed(2);

  return (
    <S.Container
      style={{ elevation: 2 }}
      activeOpacity={0.7}
      {...rest}
    >
      <S.Details>
        <S.WrapperInfoCar>
          <S.Label>{data.brand}</S.Label>
          <S.ModelCar>{data.name}</S.ModelCar>
        </S.WrapperInfoCar>

        <S.WrapperInfoCar>
          <S.Label>{data.rent.period}</S.Label>

          <S.WrapperIcon>
            <S.PriceText>R$ {priceFormated}</S.PriceText>
            <EnergySvg
              height={22}
              width={22}
            />
          </S.WrapperIcon>
        </S.WrapperInfoCar>
      </S.Details>

      <S.ContentCar>
        <S.ImageCar source={{ uri: data.thumbnail }} />
      </S.ContentCar>
    </S.Container>
  );
};