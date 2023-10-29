function getWeekdayName(day) {
  if (day < 0 || day > 6) {
    throw new Error("Invalid day input");
  }

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];

  return weekdays[day];
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
