/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 0;
let dailyRate= 35;

const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");

const fullDay = document.getElementById("full");
const halfDay = document.getElementById("half");

const clearButton = document.getElementById("clear-button");
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function changeToOrange() {
  if (!this.classList.contains("clicked-bground-color")) {
    this.classList.add("clicked-bground-color");
    costPerDay+= 1;
  } else if (this.classList.contains("clicked-bground-color")) {
    this.classList.remove("clicked-bground-color");
    costPerDay-= 1;
  }
  recalculate();
}

monday.addEventListener("click", changeToOrange);
tuesday.addEventListener("click", changeToOrange);
wednesday.addEventListener("click", changeToOrange);
thursday.addEventListener("click", changeToOrange);
friday.addEventListener("click", changeToOrange);



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clear() {
  monday.classList.remove("clicked-bground-color");
  tuesday.classList.remove("clicked-bground-color");
  wednesday.classList.remove("clicked-bground-color");
  thursday.classList.remove("clicked-bground-color");
  friday.classList.remove("clicked-bground-color");
  halfDay.classList.remove("clicked-bground-color");
  fullDay.classList.remove("clicked-bground-color");

  costPerDay = 0;
  recalculate()

}

clearButton.addEventListener("click", clear)


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function halfDayButton() {
  dailyRate = 20;
  halfDay.classList.add("clicked-bground-color");
  fullDay.classList.remove("clicked-bground-color");
  recalculate();
}

halfDay.addEventListener("click", halfDayButton)
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullDayButton(){
  dailyRate = 35;
  halfDay.classList.remove("clicked-bground-color");
  fullDay.classList.add("clicked-bground-color");
  recalculate();
}

fullDay.addEventListener("click", fullDayButton)

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate() {
    let costLabel = document.getElementById("calculated-cost");
    costLabel.innerHTML = costPerDay * dailyRate;
}

