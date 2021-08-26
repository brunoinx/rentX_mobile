import React from 'react'
import { StatusBar } from 'react-native';

import { Car } from '../../components/Car';
import { cars } from '../../utils/listCars';

import Logo from '../../assets/logo.svg'

import * as S from './styles';

export function Home() {
  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <S.Header>
        <S.HeaderWrapper>
          <Logo
            width={128}
            height={14}
          />

          <S.TotalCars>Total de 12 carros</S.TotalCars>
        </S.HeaderWrapper>
      </S.Header>

      <S.ListCar
        data={cars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <S.WrapperCard>
            <Car data={item}/>
          </S.WrapperCard>
        )}
      />
    </S.Container>
  )
}
