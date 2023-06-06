function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

reveal();

var submitButton = document.getElementById('submit');
submitButton.addEventListener('click', checkAnswers);

// Function to check the selected answers
function checkAnswers() {
  // Question 1
  var q1Options = document.getElementsByName('radio-1');
  var q1CorrectOption = document.getElementById('radio-1-1');
  markOption(q1Options, q1CorrectOption);

  // Question 2
  var q2Options = document.getElementsByName('radio-2');
  var q2CorrectOption = document.getElementById('radio-2-2');
  markOption(q2Options, q2CorrectOption);

  // Question 3
  var q3Options = document.getElementsByName('radio-3');
  var q3CorrectOption = document.getElementById('radio-3-2');
  markOption(q3Options, q3CorrectOption);

  // Question 4
  var q4Options = document.getElementsByName('radio-4');
  var q4CorrectOption = document.getElementById('radio-4-1');
  markOption(q4Options, q4CorrectOption);
}

// Function to mark the selected option as correct or incorrect
function markOption(options, correctOption) {
  for (var i = 0; i < options.length; i++) {
    var option = options[i];

    if (option.checked && option === correctOption) {
      option.parentElement.classList.add('correct');
    } else if (option.checked) {
      option.parentElement.classList.add('incorrect');
    }
  }
}