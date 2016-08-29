/* Welcome back to our testing exercise! This practice module
    will allow you to become even more familiar with testing
    concepts. We test to check the I/O of our apps. That is - we are not
    checking for HOW something works, but rather the end RESULT and
    state of a particular place in our application.
*/


function assert(expression, successMessage, failureMessage) {
  var currentTest = assert.caller.name;
  if (expression) {
    return console.log('\n' + currentTest +
      ' test passing:', successMessage
    );
  }
  console.log('\n' + currentTest +
      ' test failing:', failureMessage
    );
}

  // BEGIN WORK BELOW - test code by running `node bonus-testing-part-two.js`
  //  in your terminal!

  /* ===================================================================
  ---------------------- Part Two! Hungry Lion ----------------------------
  ======================================================================
   As long as the lion is well-fed, he doesn't care too much of the
   humans that pass through. Unfortunately, the new caretaker is a little
   absent-minded.

   The lion needs 4 meals per day on average to stay happy. You're going to
   figure out how many days it took before the lion decided to supplement his
   diet with the caretaker.
  */

  // number of times the new caretaker fed the lion. one array entry per day
var mealsPerDay = [5, 4, 3, 6, 2, 4, 3, 4, 5, 1];
var numMealsPerDayLionNeeds = 4;
dailyAverageArray = [];
daysWithAverageLessThanFour = [];




  /*
   TODO:
   Cycle through the days in mealsPerDay. At each day, print out the average
   number of meals/day the lion got since the new caretaker started.
   tooHungryDay should receive the number of days before the lion started
   pondering protein supplements (the first day the average dips below 4
   meals)
  */


//I have awesome stackoverflow lookup skills
//http://stackoverflow.com/questions/26374154/javascript-averages
function getAverageMealsPerDay(array){
  var sum = 0;

  return array.map(function(currentNumber, index) {
    sum +=currentNumber;
    average = (sum) / (index + 1);
    dailyAverageArray.push(average);
    console.log('Index ' + index + ' / Day ' + (index+1) + ': The lion had ' + currentNumber + ' meals for a total of ' + sum + ' meals since Day 1. The average is ' + average + ', which is ' + sum + ' divided by ' + (index+1) + ',which is the current index plus 1');

  });
}


function theDayTheLionTamerDoneMessedUp(){
  return dailyAverageArray.map(function(element, index){
    if (element < numMealsPerDayLionNeeds){
      console.log(index, 'is the index in mealsPerDay where average is < 4.');
      daysWithAverageLessThanFour.push(index + 1);
      console.log(daysWithAverageLessThanFour + ' is the new array with index numbers from mealsPerDay that have an average < 4.');
    }
  });
}



getAverageMealsPerDay(mealsPerDay);
theDayTheLionTamerDoneMessedUp();
var tooHungryDay = daysWithAverageLessThanFour[0];

/* TODO: DONE
Write a second test asserting that tooHungryDay falls within an acceptable answer
based on the number of days available in the array. */
assert(
  tooHungryDay <= mealsPerDay.length,
  'tooHungryDay is equal to ' + tooHungryDay + ' days.',
  'tooHungryDay should be equal to the number of days when the average meals were less than 4, but instead is: ' + tooHungryDay);

assert(
  typeof(tooHungryDay) === 'number',
  'The lion appears to be too hungry after ' + tooHungryDay + ' days...'),
  'tooHungryDay should be a number and is a data type of ' + typeof(tooHungryDay);
