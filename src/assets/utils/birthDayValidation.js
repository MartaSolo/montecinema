const isAdult = (inputDate) => {
  const today = new Date();
  const eighteenYearsAgo = new Date(
    Date.UTC(today.getFullYear() - 18, today.getMonth(), today.getDate())
  );
  const birthday = new Date(inputDate);

  return birthday < eighteenYearsAgo;
};

export default isAdult;
