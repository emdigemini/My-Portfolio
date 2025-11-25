export const countMonths = (startDate, endDate) => {

  const start = new Date(startDate);
  const end = new Date(endDate);

  let months;
  months = (end.getFullYear() - start.getFullYear()) * 12;
  months -= start.getMonth();
  months += end.getMonth();
  return months;
}
