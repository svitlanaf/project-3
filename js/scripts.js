// Business logic
words = ["Beep!", "Boop!", "I'm sorry, Dave. I'm afraid I can't do that"]
var hasDigit = function(number, digit) {
  return number.toString().includes(digit.toString())
}


// UI logic
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#userInput").val());
    if (($("input#userInput").val() === "")) {
      alert("Please enter a number");
    } else {
      var numbers = []
      for (var i = 0; i<=number; i = i + 1) {
        if (hasDigit(i, 3)) {
          numbers.push(words[2])
        } else if (hasDigit(i, 2)) {
          numbers.push(words[1])
        } else if (hasDigit(i, 1)) {
          numbers.push(words[0])
        } else {
          numbers.push(i)
        }
      }
    }
    console.log(numbers)


    // $("#result").text(output);
    // $("#result").show();
  });
});
