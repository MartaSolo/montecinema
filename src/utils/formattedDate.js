export const formattedWeekdayAndDate = (date) => {
  const weekday = date.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const formattedDate = date.toLocaleDateString("en-GB");
  return `${weekday} ${formattedDate}`;
};

export const formattedDateAndTime = (datetime) => {
  const date = new Date(datetime);
  const weekdayAndDate = formattedWeekdayAndDate(date);
  const time = datetime.substring(11, 16);
  return `${weekdayAndDate} - ${time}`;
};
