export const formattedWeekdayAndDate = (date) => {
  const weekday = date.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const formattedDate = date.toLocaleDateString("en-GB");
  return `${weekday} ${formattedDate}`;
};
