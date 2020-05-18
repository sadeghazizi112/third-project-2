// var userNumber = 15
// for (var i = 0; i <= userNumber; i++) {
//   var stringofnumber = i.toString();
//   if (stringofnumber.includes("3") === true) {
//     // $("#string").append("beep")
//     console.log("I'm sorry, Dave. I'm afraid I can't do that.")
//   } else if (stringofnumber.includes("2") === true) {
//     // $("#string").append("beep")
//     console.log("boop")
//   } else if (stringofnumber.includes("1") === true) {
//     console.log("beep")
//   } else
//   // $("#string").append(userNumber)
//   console.log(stringofnumber)
// }


var beepboop = function(userNumber) {
  var array = []
  for (var i = 0; i <= userNumber; i++) {
    var stringofnumber = i.toString();
    if (stringofnumber.includes("3") === true) {
      array.push("I'm sorry, Dave. I'm afraid I can't do that.")
    } else if (stringofnumber.includes("2") === true) {
      array.push("beep");
    } else if (stringofnumber.includes("1") === true) {
      array.push("boop");
    } else {
      array.push(i);
    }
  }
  console.log(array)
}

$(document).ready(function() {
  $("#numbers").submit(function(event) {
    event.preventDefault()
    var outputdata = parseInt($("#userNumber").val());
    beepboop(outputdata);
    $("#outputdata").show();
  });
});

// how to add things to an array

// Take the Beeps, Boops, Sorry, and i, and PUT THEM into an ARRAY
// Do this instead of the jQuery in the beepboop functions
// Put array inside the beepboop function, directly under the var beepboop
// And return array at the end of the function
