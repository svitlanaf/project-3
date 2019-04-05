// Business logic




// UI logic
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#userInput").val());
    numbers = []
    if (number<0) {
      alert("Please enter a number");
    } else {
      for  (var i = 0; i<number; i++) {
        numbers.push(1)
        console.log(numbers)
      }

      // $("#result").text(output);
      // $("#result").show();
    };
  });
});
