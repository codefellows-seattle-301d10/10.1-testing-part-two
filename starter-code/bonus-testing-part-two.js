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

  /*
   TODO DONE:
   Cycle through the days in mealsPerDay. At each day, print out the average
   number of meals/day the lion got since the new caretaker started.
   tooHungryDay should receive the number of days before the lion started
   pondering protein supplements (the first day the average dips below 4
   meals)
  */


  /* TODO: DONE
     Write a second test asserting that tooHungryDay falls within an acceptable answer
     based on the number of days available in the array. */


var mealsPerDay = [5, 3, 3, 6, 2, 4, 3, 4, 5, 1];
var tooHungryDay = 1;

function lionMealChecker() {
  mealsPerDay.reduce(function(prev, curr) {
    console.log('Avg Meal per day: ' + prev);
    if (prev >= 4 && caretakerEaten === false) {
      tooHungryDay++;
      return (prev + curr)/2;
    }
    else {
      caretakerEaten = true;
      return (prev + curr)/2;
    }
  });
};

var caretakerEaten = false;

lionMealChecker();

assert(
  typeof(tooHungryDay) === 'number',
  'The lion appears to be too hungry after ' + tooHungryDay + ' days...'),
  'tooHungryDay should be a number but instead is a data type of ' + typeof(tooHungryDay);

assert(
  tooHungryDay < mealsPerDay.length && tooHungryDay >= 0,
  'The lion appears to be too hungry after ' + tooHungryDay + ' days...',
  'tooHungryDay should be a number of days relative to the available numbers in the mealsPerDay array. There are ' + (mealsPerDay.length + 1) + 'days feeding took place.');
