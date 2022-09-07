const isAdult = (inputDate) => {
  const today = new Date();
  const eighteenYearsAgo = new Date(
    today.getUTCFullYear() - 18,
    today.getMonth(),
    today.getUTCDate()
  );
  const birthday = new Date(inputDate);

  return birthday < eighteenYearsAgo;
};

export default isAdult;
