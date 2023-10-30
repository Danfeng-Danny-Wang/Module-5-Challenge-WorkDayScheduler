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
      const id = e.target.parentNode.id;
      const childNodes = e.target.parentNode.childNodes;
      let item;
      for (let i = 0; i < childNodes.length; i++) {
        if (childNodes.item(i).nodeName === "TEXTAREA") {
          item = childNodes.item(i).value;
        }
      }
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
