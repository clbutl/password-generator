// Assignment Code
var generateBtn = document.querySelector("#generate");



var specialInputCharacters = [" ", "!", "'", '"', "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];
var numberInputCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowerInputCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperInputCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
for(var i = 8; i <= 128; i++){
  var characterChoose = [i];
  var characterChooseString = (characterChoose.toString())
}



function generatePassword() {
  
  var x = []




  var characterInput = window.prompt("Number of Characters?");

  var testInput1 = (characterInput >= 8)
  var testInput2 = (characterInput <= 128)
  // Invalid Response
  if (!testInput1 || !testInput2) {
    window.alert("Invalid Response, Please Input a Number of Characters Between 8 and 128")
    return;
  } 
  // If True or False (Yes or no)
  var specialInput = window.confirm("Do you want any Special Characters? (Press 'OK' if yes)")
  var numberInput = window.confirm("Do you want any Numbers? (Press 'OK' if yes)")
  var lowerInput = window.confirm("Do you want any Lowercase Letters? (Press 'OK' if yes)")
  var upperInput = window.confirm("Do you want any Uppercase Letters? (Press 'OK' if yes)")
  
  // 4 Decisions
  if (specialInput && numberInput && lowerInput && upperInput) {
    var decisionInputs = specialInputCharacters.concat([...numberInputCharacters, ...lowerInputCharacters, ...upperInputCharacters]);
  } 
  // 3 Decisions
    else if (specialInput && numberInput && lowerInput) {
    var decisionInputs = specialInputCharacters.concat([...numberInputCharacters, ...lowerInputCharacters]);
  } else if (specialInput && numberInput && upperInput) {
    var decisionInputs = specialInputCharacters.concat([...numberInputCharacters, ...upperInputCharacters]);
  } else if (specialInput && lowerInput && upperInput) {
    var decisionInputs = specialInputCharacters.concat([...lowerInputCharacters, ...upperInputCharacters]);
  } else if (numberInput && lowerInput && upperInput) {
    var decisionInputs = numberInputCharacters.concat([...lowerInputCharacters, ...upperInputCharacters]);
  } 
  // 2 Decisions
    else if (specialInput && numberInput) {
    var decisionInputs = specialInputCharacters.concat([...numberInputCharacters]);
  } else if (numberInput && lowerInput) {
    var decisionInputs = numberInputCharacters.concat([...lowerInputCharacters]);
  } else if (lowerInput && upperInput) {
    var decisionInputs = lowerInputCharacters.concat([...upperInputCharacters]);
  } else if (numberInput && upperInput) {
    var decisionInputs = numberInputCharacters.concat([...upperInputCharacters]);
  } else if (specialInput && upperInput) {
    var decisionInputs = specialInputCharacters.concat([...upperInputCharacters]);
  } else if (lowerInput && specialInput) {
    var decisionInputs = lowerInputCharacters.concat([...specialInputCharacters]);
  } 
  // 1 Decision
    else if (specialInput) {
    var decisionInputs = specialInputCharacters;
  } else if (numberInput) {
    var decisionInputs = numberInputCharacters;
  } else if (lowerInput) {
    var decisionInputs = lowerInputCharacters;
  } else if (upperInput) {
    var decisionInputs = upperInputCharacters;
  } else {
    window.alert("Invalid Response, Please try Again With at Least one Selected Input")
    return;
  }
// Creating Password
  var passwordTracker = ""
    for(x = 0; x < characterInput; x++){
    var computerInput = (decisionInputs[Math.floor(Math.random() * decisionInputs.length)]);
    var passwordTracker = passwordTracker + [computerInput]
    }
    var password = passwordTracker

    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}


// Write password to the #password input
function writePassword() {
  generatePassword(); 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);