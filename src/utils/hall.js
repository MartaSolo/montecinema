export const allSeats = (availableSeatsArray, takenSeatsArray) => {
  const available = availableSeatsArray.map((seat) => {
    return {
      seat,
      available: true,
      row: seat.slice(0, 1),
      seatNumber: seat.slice(1),
    };
  });
  const taken = takenSeatsArray.map((seat) => {
    return {
      seat,
      available: false,
      row: seat.slice(0, 1),
      seatNumber: seat.slice(1),
    };
  });
  const seats = [...available, ...taken];
  seats.sort((a, b) => a.seat.localeCompare(b.seat));
  return seats;
};

export const numberOfSeatsInRow = (allSeatsArray) => {
  const listOfSeats = allSeatsArray.map((el) => el.seatNumber);
  const uniqueSeats = listOfSeats.filter(
    (seat, i, arr) => arr.indexOf(seat) === i
  );
  return uniqueSeats.length;
};

export const hallPlan = (allSeatsArray) => {
  const seatsInRow = numberOfSeatsInRow(allSeatsArray);
  const array2D = [];
  for (let i = 0; i < allSeatsArray.length; i + seatsInRow) {
    array2D.push(allSeatsArray.slice(i, (i += seatsInRow)));
  }
  array2D.map((array) =>
    array.sort((a, b) =>
      a.seatNumber.localeCompare(b.seatNumber, undefined, { numeric: true })
    )
  );
  return array2D;
};
