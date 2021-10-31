import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { CarProps } from '../../dtos/CarDTO';
import { maskMoney } from '../../utils/maskMoney';
import { getAcessoryIcon } from '../../utils/getAcessoryIcon';

import * as S from './styles';

type Props = TouchableOpacityProps & {
  data: CarProps;
}

export function Car({ data, ...rest }: Props) {
  const priceFormated = maskMoney(data.rent.price);
  const MotorIcon = getAcessoryIcon(data.fuel_type);

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
            <S.PriceText>{priceFormated}</S.PriceText>
            <MotorIcon
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

function getAccessoryIcon(fuel_type: string) {
  throw new Error('Function not implemented.');
}
