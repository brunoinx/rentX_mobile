import React, { useState } from 'react';
import { StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { addDays, format } from 'date-fns';

import { Button } from '../../components/Button';
import { BackButton } from '../../components/BackButton';
import { Calendar, DateObject, MarkedDatesProps } from '../../components/Calendar';

import ArrowSvg from '../../assets/icons/arrow_right.svg';

import * as S from './styles';
import { generateInterval } from '../../components/Calendar/generateInterval';

export function Scheduling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DateObject>(
    {} as DateObject
  );
  const [markedDates, setMarkedDates] = useState<MarkedDatesProps>(
    {} as MarkedDatesProps
  );

  const [inputDateStart, setInputDateStart] = useState('');
  const [inputDateEnd, setInputDateEnd] = useState('');

  const { navigate, goBack } = useNavigation();

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

    if (startPeriod === date) {
      setInputDateStart(format(addDays(startPeriod.timestamp, 1), 'dd/MM/yyyy'));
      setInputDateEnd('');
      return;
    }

    setInputDateEnd(format(addDays(endPeriod.timestamp, 1), 'dd/MM/yyyy'));
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <S.Container>
        <StatusBar barStyle="light-content" />
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
                value={inputDateStart}
              />
            </S.DateContainer>

            <ArrowSvg width={52} height={18} />

            <S.DateContainer>
              <S.LabelDate>ATÉ</S.LabelDate>
              <S.DateInput
                keyboardType="numeric"
                maxLength={10}
                editable={false}
                value={inputDateEnd}
              />
            </S.DateContainer>
          </S.RentalPeriod>
        </S.Header>

        <S.Content>
          <Calendar
            markedDates={markedDates}
            onDayPress={handleChangeDate}
          />
        </S.Content>

        <S.WrapperButton>
          <Button title="Confirmar" onPress={() => navigate('SchedulingDetails')} />
        </S.WrapperButton>
      </S.Container>
    </TouchableWithoutFeedback>
  );
};