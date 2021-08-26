import React from 'react';
import { ImageSourcePropType, TouchableOpacityProps } from 'react-native';

import * as S from './styles';

import EnergySvg from '../../assets/icons/energy.svg';

export type CarProps = {
  id: string;
  brand: string;
  model: string;
  daily_cost: string;
  price: string;
  image: ImageSourcePropType;
}

type Props = TouchableOpacityProps & {
  data: CarProps;
}

export function Car({ data, ...rest }: Props) {
  return (
    <S.Container
      style={{ elevation: 2 }}
      activeOpacity={0.7}
      {...rest}
    >
      <S.Details>
        <S.WrapperInfoCar>
          <S.Label>{data.brand}</S.Label>
          <S.ModelCar>{data.model}</S.ModelCar>
        </S.WrapperInfoCar>

        <S.WrapperInfoCar>
          <S.Label>{data.daily_cost}</S.Label>

          <S.WrapperIcon>
            <S.PriceText>R$ {data.price}</S.PriceText>
            <EnergySvg
              height={22}
              width={22}
            />
          </S.WrapperIcon>
        </S.WrapperInfoCar>
      </S.Details>

      <S.ContentCar>
        <S.ImageCar source={ data.image }/>
      </S.ContentCar>
    </S.Container>
  );
};