const DAY = document.querySelector("#day");
const MONTH = document.querySelector("#month");
const YEAR = document.querySelector("#year");

const YEARS_DISPLAY = document.querySelector("#years-display");
const MONTHS_DISPLAY = document.querySelector("#months-display");
const DAYS_DISPLAY = document.querySelector("#days-display");

const SUBMIT_BTN = document.querySelector("#submit-btn");

const toDate = new Date();
let year = toDate.getFullYear();
let month = toDate.getMonth() + 1;
let day = toDate.getDate();

function calcAge(e) {
  e.preventDefault();
  if (DAY.value !== "" && MONTH.value !== "" && YEAR.value !== "") {
    if (
      DAY.value < 32 &&
      MONTH.value < 13 &&
      YEAR.value < toDate.getFullYear()
    ) {
      let yearValue = YEAR.value;
      let monthValue = MONTH.value;
      let dayValue = DAY.value;

      let yearDiff = year - yearValue;
      let monthDiff = month - monthValue;
      let dayDiff = day - dayValue;

      if (yearDiff < 0) {
        console.log("invalid");
      } else if (monthDiff > 0) {
        console.log(yearDiff);
      } else if (monthDiff === 0 && dayDiff >= 0) {
        console.log(yearDiff);
      } else {
        yearDiff = yearDiff - 1;
        if (monthDiff <= 0) {
          if (dayDiff > 0) {
            monthDiff = 12 + monthDiff;
          } else {
            monthDiff = 11 - monthDiff;
          }
        }
      }

      if (dayDiff < 0) {
        dayDiff = dayDiff + 30;
        monthDiff -= 1;
      }

      YEARS_DISPLAY.innerHTML = yearDiff + " ";
      MONTHS_DISPLAY.innerHTML = monthDiff + " ";
      DAYS_DISPLAY.innerHTML = dayDiff + " ";
    } else {
      console.log("invalid");
    }
  } else {
    console.log("invalid");
  }
}

SUBMIT_BTN.addEventListener("click", calcAge);
