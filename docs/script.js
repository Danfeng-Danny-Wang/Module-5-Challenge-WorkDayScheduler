// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
    return;
  }
  document.addEventListener("DOMContentLoaded", fn);
}

function applyClassToTimeBlock() {
  const currentHour = dayjs().hour();

  for (let i = 9; i < 18; i++) {
    const timeBlock = document.getElementById(`hour-${i}`);
    if (i < currentHour) timeBlock.classList.add("past");
    else if (i === currentHour) timeBlock.classList.add("present");
    else if (i > currentHour) timeBlock.classList.add("future");
  }
}

function displayCurrentDay() {
  const currentDayBlock = document.getElementById("currentDay");

  const currentDay = getWeekdayName(dayjs().day());
  const currentDate = dayjs().date();
  const currentMonth = getMonthName(dayjs().month());

  const currentDayOutput = `${currentDay}, ${currentMonth} ${currentDate}`;
  currentDayBlock.textContent = currentDayOutput;
}

function saveToLocalStorage() {
  const saveButtons = document.getElementsByClassName("saveBtn");
  for (let i = 0; i < saveButtons.length; i++) {
    saveButtons.item(i).addEventListener("click", function (e) {
      console.log(e.target.parentNode.id);
      const id = e.target.parentNode.id;
      const childNodes = e.target.parentNode.childNodes;
      let item;
      for (let i = 0; i < childNodes.length; i++) {
        if (childNodes.item(i).nodeName === "TEXTAREA") {
          item = childNodes.item(i).value;
        }
      }
      console.log(item);
      localStorage.removeItem(id);
      localStorage.setItem(id, item);
    });
  }
}

function addSavedEvents() {
  for (let i = 9; i < 18; i++) {
    const id = `hour-${i}`;
    const timeBlock = document.getElementById(id);
    const item = localStorage.getItem(id);
    const childNodes = timeBlock.childNodes;
    for (let i = 0; i < childNodes.length; i++) {
      if (childNodes.item(i).nodeName === "TEXTAREA") {
        childNodes.item(i).value = item;
      }
    }
  }
}

ready(function () {
  applyClassToTimeBlock();
  displayCurrentDay();
  addSavedEvents();
  saveToLocalStorage();
});
