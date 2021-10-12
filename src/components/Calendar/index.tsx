import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import {
  Calendar as CustomCalendar,
  LocaleConfig,
  DateCallbackHandler,
  PeriodMarking,
  DateObject
} from 'react-native-calendars';

import { locale } from './locale';

type MarkedDatesProps = {
  [date: string]: PeriodMarking;
}

type CalendarProps = {
  markedDates: MarkedDatesProps;
  onDayPress: DateCallbackHandler;
}

LocaleConfig.locales['pt-br'] = locale;
LocaleConfig.defaultLocale = 'pt-br';

function Calendar({ markedDates, onDayPress }: CalendarProps) {
  const theme = useTheme();

  return (
    <CustomCalendar
      minDate={new Date()}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
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
        borderBottomColor: theme.colors.line,
        height: 76
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
      enableSwipeMonths
    />
  );
};

export {
  Calendar,
  DateObject,
  MarkedDatesProps
}