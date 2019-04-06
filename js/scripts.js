// Business logic
var word1 = "\"Beep!\""
var word2 = "\"Boop!\""
var word3 = "\"I'm sorry, Dave. I'm afraid I can't do that.\""
var word4 = "\"I'm sorry, "
var word5 = "I'm afraid I can't do that.\""

var hasDigit = function(number, digit) {
  return number.toString().includes(digit.toString())
}

var rangeOfnumbers = function(number) {
  var numbers = []
  var number = parseInt($("input#userInput").val());
  var userName = $("input#userName").val();
  $(".userName").text(userName)
  for (var i = 0; i <= number; i = i + 1) {
    if ((i % 3 === 0 ) && i>0) {
      numbers.push(word4 + userName + ". " + word5)
    } else if (hasDigit(i, 3)) {
      numbers.push(word3)
    } else if (hasDigit(i, 2)) {
      numbers.push(word2)
    } else if (hasDigit(i, 1)) {
      numbers.push(word1)
    }  else {
      numbers.push(i)
    }
  }
  return numbers.join(", ")
}

// UI logic
$(document).ready(function() {
      $("form#formOne").submit(function(event) {
          event.preventDefault();
          var userName = $("input#userName").val();
          $(".userName").text(userName);
          console.log (userName)
          if ($('input').val() === "") {
            alert('Please enter your name');

          } else {
            var number = parseInt($("input#userInput").val());
            var input = $("#userInput").val();
            if (($('input').val() === "") || number <0) {
              alert("Please enter a number");
            } else {
              var modifiedrRange = rangeOfnumbers(number)
              console.log(modifiedrRange)
              $(".output").text(modifiedrRange).show();
            }
          }
          });
      });
