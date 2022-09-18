export const allSeats = (arr1, arr2) => {
  const available = arr1.map((seat) => {
    return {
      seat,
      available: true,
      row: seat.slice(0, 1),
      seatNumber: seat.slice(1),
    };
  });
  const taken = arr2.map((seat) => {
    return {
      seat,
      available: false,
      row: seat.slice(0, 1),
      seatNumber: seat.slice(1),
    };
  });
  return [...available, ...taken];
};

export const numberOfSeatsInRow = (array) => {
  const listOfSeats = array.map((el) => el.seatNumber);
  const uniqueSeats = listOfSeats.filter(
    (seat, i, arr) => arr.indexOf(seat) === i
  );
  return uniqueSeats.length;
};

export const hallPlan = (array) => {
  const seatsInRow = numberOfSeatsInRow(array);
  const array2D = [];
  for (let i = 0; i < array.length; i + seatsInRow) {
    array2D.push(array.slice(i, (i += seatsInRow)));
  }
  return array2D;
};
