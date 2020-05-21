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
    var userNumber = parseInt($("#userNumber").val());
    var outputArray = beepboop(userNumber);   // this becomes array
    for (var i = 0; i < outputArray.length; i++) {
      console.log(outputArray[i]);
      $('ul').append("<li>" + outputArray[i] + "</li>")
    }
    $("#outputdata").show();    // this line shows the HTML element with the class "outputdata"

  });
});
