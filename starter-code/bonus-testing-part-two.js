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
var tooHungryDay;

function testTooHungryNumber(){
  assert(
  typeof(tooHungryDay) === 'number',
  'The lion appears to be too hungry after ' + tooHungryDay + ' days...'),
  'tooHungryDay should be a number but instead is a data type of ' + typeof(tooHungryDay);
}
  /* TODO:
     Write a second test asserting that tooHungryDay falls within an acceptable answer
     based on the number of days available in the array. */

function testTooHungryDay(){
  assert(
    tooHungryDay >= 1 && tooHungryDay <= mealsPerDay.length,
    'The lion is too hungry after ' + tooHungryDay + ' days...'),
    'tooHungryDay cannot be a day the lion was not fed';
}
  /*
   TODO:
   Cycle through the days in mealsPerDay. At each day, print out the average
   number of meals/day the lion got since the new caretaker started.
   tooHungryDay should receive the number of days before the lion started
   pondering protein supplements (the first day the average dips below 4
   meals)
  */

mealsPerDay.reduce(function(acc, cur, index, array){
  console.log((Number(acc) + Number(cur))/(1 + index), 'Day is: ' + (index + 1));
  mealsSum = (acc + cur);
  averageMeal = mealsSum/(1 + index);
  if (mealsPerDay[0] < 4) {
    tooHungryDay = 1;
  }
  else if (averageMeal < 4 && tooHungryDay === undefined){
    console.log(averageMeal);
    tooHungryDay = (index +1);
  }
  return mealsSum;
});

testTooHungryNumber();
testTooHungryDay();
