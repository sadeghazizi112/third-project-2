var userNumber = 5
  for (var i = 0; i <= userNumber; i++) {
    var stringofnumber = i.toString();
    if (stringofnumber.includes("1") === true) {
      // $("#string").append("beep")
      console.log("beep")
    } else {
      // $("#string").append(userNumber)
      console.log(userNumber)
    }
  }



  var string = i.toString();
  var result = string.replace("1", "beep")


  var userNumber = 5
  for (var i = 0; i <= userNumber; i++) {
    var stringofnumber = i.toString();
    console.log(i);
    var string = i.toString();
    // var result = string.replace("1", "beep")
    if (stringofnumber.includes("1") === true) {
      console.log("beep")
    } else {
      console.log(userNumber)
    }



if it has 1, console log beep instead of the numbers

Step 2: Convert numbers with a 1 to "Beep"
// * convert the number to a string
// * check if the number contains a "1"
// * if yes, log the string "Beep"
* if no, log the original number, not a string
