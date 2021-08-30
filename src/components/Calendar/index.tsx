import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import {
  Calendar as CustomCalendar,
  LocaleConfig,
  DateCallbackHandler,
  CustomMarking,
} from 'react-native-calendars';

import { locale } from './locale';

export type MarkedDateProps = {
  [date: string]: CustomMarking;
}

type CalendarProps = {
  markedDate: MarkedDateProps;
  handleChangeDate: DateCallbackHandler;
}

LocaleConfig.locales['pt-br'] = locale;
LocaleConfig.defaultLocale = 'pt-br';

export function Calendar({ markedDate, handleChangeDate }: CalendarProps) {
  const theme = useTheme();

  return (
    <CustomCalendar
      markedDates={markedDate}
      onDayPress={handleChangeDate}
      renderArrow={(direction) => (
        <Feather
          size={24}
          color={theme.colors.shape_dark}
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        paddingHorizontal: 10,
        borderBottomColor: theme.colors.line
      }}
      theme={{
        textDayFontFamily: theme.fonts.archivo_400,
        textDayHeaderFontFamily: theme.fonts.archivo_500,
        textDayHeaderFontSize: 10,
        todayTextColor: theme.colors.main,
        monthTextColor: theme.colors.title,
        textMonthFontFamily: theme.fonts.archivo_500,
        arrowStyle: {
          marginHorizontal: -15
        }
      }}
      markingType={"custom"}
      minDate={new Date()}
      enableSwipeMonths
    />
  );
};