import React, { useState } from 'react';
import { StatusBar, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { addDays, format } from 'date-fns';

import { Button } from '../../components/Button';
import { BackButton } from '../../components/BackButton';
import { Calendar, DateObject, MarkedDatesProps } from '../../components/Calendar';
import { generateInterval } from '../../components/Calendar/generateInterval';
import { CarProps } from '../../dtos/CarDTO';

import ArrowSvg from '../../assets/icons/arrow_right.svg';

import * as S from './styles';

type Params = {
  car: CarProps;
}

type RentalPeriodProps = {
  startFormatted: string;
  endFormatted: string;
}

export function Scheduling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DateObject>(
    {} as DateObject
  );
  const [markedDates, setMarkedDates] = useState<MarkedDatesProps>(
    {} as MarkedDatesProps
  );

  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>(
    {} as RentalPeriodProps
  );

  const { navigate, goBack } = useNavigation();
  const { params } = useRoute();
  const { car } = params as Params;


  function handleChangeDate(date: DateObject) {
    let startPeriod = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let endPeriod = date;

    if (startPeriod.timestamp > endPeriod.timestamp) {
      startPeriod = endPeriod;
      endPeriod = startPeriod;
    }

    setLastSelectedDate(endPeriod);

    const interval = generateInterval(startPeriod, endPeriod);
    setMarkedDates(interval);

    const intervalDates = Object.keys(interval);

    const firstDate = intervalDates[0];
    const endDate = intervalDates[intervalDates.length - 1];

    setRentalPeriod({
      startFormatted: format(addDays(new Date(firstDate), 1), 'dd/MM/yyyy'),
      endFormatted: format(addDays(new Date(endDate), 1), 'dd/MM/yyyy')
    });
  }

  function handleConfirmRental() {
    navigate('SchedulingDetails', {
      car,
      dates: Object.keys(markedDates),
    });
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <S.Container>
          <S.Content>
            <S.Header>
              <BackButton onPress={() => goBack()} color="#FFF" />

              <S.Title>
                Escolha uma {'\n'}
                data de início e {'\n'}
                fim do aluguel
              </S.Title>

              <S.RentalPeriod>
                <S.DateContainer>
                  <S.LabelDate>DE</S.LabelDate>
                  <S.DateInput
                    keyboardType="numeric"
                    maxLength={10}
                    editable={false}
                    value={rentalPeriod.startFormatted}
                  />
                </S.DateContainer>

                <ArrowSvg width={52} height={18} />

                <S.DateContainer>
                  <S.LabelDate>ATÉ</S.LabelDate>
                  <S.DateInput
                    keyboardType="numeric"
                    maxLength={10}
                    editable={false}
                    value={rentalPeriod.endFormatted}
                  />
                </S.DateContainer>
              </S.RentalPeriod>
            </S.Header>

            <Calendar
              markedDates={markedDates}
              onDayPress={handleChangeDate}
            />
          </S.Content>

          <S.WrapperButton>
            <Button
              title="Confirmar Período"
              onPress={handleConfirmRental}

              enabled={!!rentalPeriod.startFormatted}
            />
          </S.WrapperButton>
        </S.Container>
      </TouchableWithoutFeedback>
    </>
  );
};