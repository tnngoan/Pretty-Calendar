import dayjs from "dayjs";

function getMonth(month = dayjs().month()) {
  const year = dayjs().year();
  // this tell us which day of the week is the first day of the month
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0;
  // create 5 rows for each month and fill in every row with an empty array
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}

export default getMonth;
