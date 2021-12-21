// Assignment Code
var generateBtn = document.querySelector("#generate");

// var lowerType =
// var upperType =
// var numericType =
// var specialType =


// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How many characters would you like your password to contain?");
if (isNaN(passwordLength)) {
  alert("Password length must be provided as a number");
  writePassword();
} else if (passwordLength < 8 || passwordLength > 128) {
  alert("Please enter a number between 8 and 128!");
  writePassword();
} else {
  var lowerType = confirm("Click OK to confirm including the SPECIAL CHARACTER(S).");
  var upperType = confirm("Click OK to confirm including the UPPERCASE(S).");
  var lowerType = confirm("Click OK to confirm including the LOWERCASE(S).");
  var numericType = confirm("Click OK to confirm including the NUMERIC CHARACTER(S).");
}

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





////////////////////////////////
 //function writePassword() {
 // var passwordLength = prompt("How many characters would you like your password to contain?");
//if (passwordLength >= 8 && passwordLength <= 128) {
//  var lowertype = confirm("Click OK to confirm including special characters.")
//} else {
//  alert("Password length must be provided as a NUMBER between 8 and 128.");
//  writePassword();
//}

//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");
  

//  passwordText.value = password;

//}