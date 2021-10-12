import { format, addDays } from "date-fns";

export function formattedDate(date: string): string {
  const dateString = new Date(date);

  return format(addDays(dateString, 1), "dd/MM/yyyy");
}
