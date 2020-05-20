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
  return array;
}

$(document).ready(function() {
  $("#numbers").submit(function(event) {
    event.preventDefault();
    var outputdata = parseInt($("#userNumber").val());
    var outputArray = beepboop(outputdata);   // this becomes array
    for (var i = 0; i <= outputArray.length; i++) {
      console.log(outputArray[i]);
    }
    // You now need write a for loop using outputArray
    // * write a loop that will display the content of the array to the user
    // inside the loop you will need to  do something with jquesry like .append() .
    // so each array element will get added to the HTML


    $("#outputdata").show();    // this line shows the HTML element with the class "outputdata"
  });
});
