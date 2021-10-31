import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/core';
import { AntDesign } from '@expo/vector-icons';

import { BackButton } from '../../components/BackButton';
import { Car } from '../../components/Car';
import { CarProps } from '../../dtos/CarDTO';

import { api } from '../../services/api';
import * as S from './styles';
import { Load } from '../../components/Load';

export type CarSchedulingProps = {
  id: string;
  user_id: string;
  car: CarProps;
  startDate: string;
  endDate: string;
}

export function MyCars() {
  const [cars, setCars] = useState<CarSchedulingProps[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const theme = useTheme();

  useEffect(() => {
    async function fetchCars() {
      setLoading(true)
      try {
        const { data } = await api.get('/schedules_byuser', {
          params: {
            user_id: 1
          }
        });

        setCars(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  function handleBack() {
    navigation.goBack();
  }

  return (
    <S.Container>
      <S.Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />

        <BackButton
          onPress={handleBack}
          color={theme.colors.shape}
        />

        <S.Title>
          Seus Agendamentos, {'\n'}
          estão aqui
        </S.Title>

        <S.SubTitle>
          Conforto, segurança e praticidade.
        </S.SubTitle>
      </S.Header>

      <S.Content>
        <S.Appointments>
          <S.AppointmentsTitle>
            Agendamentos Realizados
          </S.AppointmentsTitle>
          <S.AppointmentsQuantity>
            {cars.length < 10 ? `0${cars.length}` : cars.length}
          </S.AppointmentsQuantity>
        </S.Appointments>


        {loading ? <Load />
          : (
            <S.ListAppointmentCars
              data={cars}
              keyExtractor={item => item.car.id}
              renderItem={({ item }) => (
                <S.CarWrapper>
                  <Car data={item.car} />

                  <S.CarFooter>
                    <S.PeriodTitle>Período</S.PeriodTitle>
                    <S.RentalPeriod>
                      <S.CarFooterDate>{item.startDate}</S.CarFooterDate>

                      <AntDesign
                        name="arrowright"
                        size={20}
                        color={theme.colors.text_detail}
                        style={{ marginHorizontal: 10 }}
                      />

                      <S.CarFooterDate>{item.endDate}</S.CarFooterDate>
                    </S.RentalPeriod>
                  </S.CarFooter>
                </S.CarWrapper>
              )}
            />
          )}
      </S.Content>
    </S.Container>
  );
}