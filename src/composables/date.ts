import dayjs from "dayjs";

export const useDateRange = ({
  start,
  finish,
  interval = 1,
  comparisonUnit = "day",
  intervalUnit = "day",
}: {
  start: dayjs.Dayjs;
  finish: dayjs.Dayjs;
  interval: number;
  comparisonUnit: dayjs.OpUnitType;
  intervalUnit: dayjs.ManipulateType;
}) => {
  const range = [];
  let date = dayjs(start);
  while (
    date.isBefore(finish, comparisonUnit) ||
    date.isSame(finish, comparisonUnit)
  ) {
    range.push(date);
    date = date.add(interval, intervalUnit);
  }
  return ref(range);
};
