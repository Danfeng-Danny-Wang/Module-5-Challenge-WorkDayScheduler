function getWeekdayName(day) {
  if (day < 1 || day > 7) {
    throw new Error("Invalid day input");
  }

  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return weekdays[day - 1];
}

function getMonthName(month) {
  if (month < 0 || month > 11) {
    throw new Error("Invalid month input");
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[month];
}
