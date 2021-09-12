import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Car } from '../../components/Car';
import { CarProps } from '../../dtos/CarDTO';

import Logo from '../../assets/logo.svg'

import * as S from './styles';
import { api } from '../../services/api';
import { getAcessoryIcon } from '../../utils/getAcessoryIcon';

export function Home() {
  const [listCars, setListCars] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchCars() {
      try {
        const { data } = await api.get('cars');

        setListCars(data);
      } catch (error) {
        console.log('Deu erro');
      }
    };

    fetchCars();
  }, []);

  function handleNavigateToCarDetails(car: CarProps) {
    navigation.navigate('CarDetails', { car });
  }

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

          <S.TotalCars>Total de {listCars.length} carros</S.TotalCars>
        </S.HeaderWrapper>
      </S.Header>

      <S.ListCar
        data={listCars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <S.WrapperCard>
            <Car
              data={item}
              icon={getAcessoryIcon(item.fuel_type)}
              onPress={() => handleNavigateToCarDetails(item)}
            />
          </S.WrapperCard>
        )}
      />
    </S.Container>
  )
}
