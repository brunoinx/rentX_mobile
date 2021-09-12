import { addDays, eachDayOfInterval, format } from "date-fns";
import { DateObject, MarkedDatesProps } from ".";
import { getPlatformDate } from "../../utils/getPlatformDate";
import theme from "../../styles/theme";

export function generateInterval(startDate: DateObject, endDate: DateObject) {
  let interval: MarkedDatesProps = {};

  eachDayOfInterval({
    start: new Date(startDate.timestamp),
    end: new Date(endDate.timestamp),
  }).forEach((item) => {
    const date = format(addDays(item, 1), "yyyy-MM-dd");

    interval = {
      ...interval,
      [date]: {
        color:
          startDate.dateString === date || endDate.dateString === date
            ? theme.colors.main
            : theme.colors.main_light,
        textColor:
          startDate.dateString === date || endDate.dateString === date
            ? theme.colors.text_light
            : theme.colors.main,
      },
    };
  });

  return interval;
}
