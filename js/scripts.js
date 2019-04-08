// Business logic
var phrase1 = "\"Beep!\""
var phrase2 = "\"Boop!\""
var phrase3 = "\"I'm sorry, Dave. I'm afraid I can't do that.\""
var phrase4 = "\"I'm sorry, "
var phrase5 = "I'm afraid I can't do that.\""

var hasDigit = function(number, digit) {
  return number.toString().includes(digit.toString())
}

var rangeOfNumbers = function(number, userName) {
  var numbers = []
  for (var i = 0; i <= number; i = i + 1) {
    if ((i % 3 === 0) && i > 0) {
      numbers.push(phrase4 + userName + ". " + phrase5)
    } else if (hasDigit(i, 3)) {
      numbers.push(phrase3)
    } else if (hasDigit(i, 2)) {
      numbers.push(phrase2)
    } else if (hasDigit(i, 1)) {
      numbers.push(phrase1)
    } else {
      numbers.push(i)
    }
  }
  return numbers
}

var joinNumbers = function(numbers) {
  var numbersToString = numbers.join(", ")
  return numbersToString
}

var reverseNumbers = function(numbers) {
  var reversedNumbers = numbers.reverse()
  return reversedNumbers
}


// UI logic
$(document).ready(function() {
  $("#cat").hide()
  $("form#formOne").submit(function(event) {
    event.preventDefault()
    $("#cat").hide()
    $(".output1").hide()
    var userName = $("input#userName").val()
    $(".userName").text(userName)
    var number = parseInt($("input#userInput").val())
    if (userName === "" && (number === "") || (number === "") || number < 0) {
      alert('Please enter your name and a number')
    } else if (number > 100) {
      $("#cat").show()
      $(".output2").text(reversedOutput).hide()
    } else {
      var modifiedRange = rangeOfNumbers(number, userName)
      var userOutputString = joinNumbers(modifiedRange)
      $(".output1").text(userOutputString).show()
    }

    $("#reversedOutput").click(function(event) {
      var modifiedRange = rangeOfNumbers(number, userName)
      var reversedOutput = reverseNumbers(modifiedRange)
      $(".output2").text(reversedOutput).show()
    })
  })
})
