import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { CarProps } from '../../dtos/CarDTO';

import * as S from './styles';

type Props = TouchableOpacityProps & {
  data: CarProps;
  icon: React.FC<SvgProps>;
}

export function Car({ data, icon: Icon, ...rest }: Props) {
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
            <Icon
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