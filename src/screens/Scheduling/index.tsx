import React, { useState } from 'react';
import { StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { DateObject } from 'react-native-calendars';
import { addDays, format } from 'date-fns';
import { useTheme } from 'styled-components';

import { Button } from '../../components/Button';
import { BackButton } from '../../components/BackButton';
import { Calendar, MarkedDateProps } from '../../components/Calendar';

import ArrowSvg from '../../assets/icons/arrow_right.svg';

import * as S from './styles';

export function Scheduling() {
  const [markedDate, setMarkedDate] = useState<MarkedDateProps>({} as MarkedDateProps);
  const [inputInit, setInputInit] = useState('');

  const theme = useTheme();

  function selectDateCalendar(date: DateObject) {
    const newDate = new Date(date.timestamp);
    const dateFormatted = format(addDays(newDate, 1), "yyyy-MM-dd");

    const objectDate: MarkedDateProps = {
      [dateFormatted]: {
        customStyles: {
          container: {
            backgroundColor: theme.colors.main,
          },
          text: {
            color: theme.colors.text_light,
          },
        },
      },
    };

    setMarkedDate(objectDate);
    setInputInit(format(new Date(dateFormatted), 'dd/MM/yyyy'));
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <S.Container>
        <StatusBar barStyle="light-content" />
        <S.Header>
          <BackButton onPress={() => { }} color="#FFF" />

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
                value={inputInit}
              />
            </S.DateContainer>

            <ArrowSvg width={52} height={18} />

            <S.DateContainer>
              <S.LabelDate>ATÉ</S.LabelDate>
              <S.DateInput
                keyboardType="numeric"
                maxLength={10}
              />
            </S.DateContainer>
          </S.RentalPeriod>
        </S.Header>

        <S.Content>
          <Calendar
            markedDate={markedDate}
            handleChangeDate={selectDateCalendar}
          />
        </S.Content>

        <S.WrapperButton>
          <Button title="Confirmar"/>
        </S.WrapperButton>
      </S.Container>
    </TouchableWithoutFeedback>
  );
};