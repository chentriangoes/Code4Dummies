// Assign code as global scope //
var generateBtn = document.querySelector("#generate");
var selectLength = "";
var specialRandom = "#!'()*+,-.%/:;<&=>?@[]^_`{|}~$";
var numericRandom = "0123456789";
var lowerRandom = "abcdefghijklmnopqrstuvwxyz";
var upperRandom = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";


// Write password to the #password input //
 function writePassword() {

  // Assign code as local scope //
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordRandom = "";
  
  // Assign function for generating password after being called as a variable. //
  function generatePassword() {
    return("");
  }
  
  // Call selectLength as a variable to be output from string to an integer. //
  selectLength = parseInt(selectLength);

  // If user entered a number between and including 8 and 128, steps for generating password commence. //
  if (selectLength >= 8 && selectLength <=128) {

    // To confirm boolean for special characters "yes or no". // 
    var selectSpecial  = confirm("Click ok to confirm including special characters.");
    
    // If special characters is confirmed for selection, special characters will be added to password. // 
    if (selectSpecial) {
      passwordRandom += specialRandom;
    }

    // To confirm boolean for numeric characters "yes or no". // 
    var selectNumeric = confirm("Click ok to confirm including numeric characters.");

    // If numeric characters is confirmed for selection, numeric characters will be added to password. // 
    if (selectNumeric) {
      passwordRandom += numericRandom;
    }

     // To confirm boolean for lowercase characters "yes or no". // 
    var selectLower = confirm("Click ok to confirm including lowercase characters.");

    // If lowercase characters is confirmed for selection, lowercase characters will be added to password. // 
    if (selectLower) {
      passwordRandom += lowerRandom;
    }

     // To confirm boolean for uppercase characters "yes or no". // 
    var selectUpper = confirm("Click ok to confirm including uppercase characters.");

    // If upper characters is confirmed for selection, upper characters will be added to password. // 
    if (selectUpper) {
      passwordRandom += upperRandom;
    }

    // Create rondomised selected password composed of confirmed types of characters in chosen length. //
    for (var i=0; i < selectLength; i++) {
      password += passwordRandom[Math.floor(Math.random()*passwordRandom.length)]
    }

    // Password is generated in the chosen textarea //
    passwordText.value = password;

    //When none of types of characters is chosen, an alert shows and followed by a call to return writePassword fuction. //
    while (!selectSpecial && !selectNumeric && !selectLower && !selectUpper) {
      alert("At least one character type must be selected!");
      return writePassword();
    }
  } 

   //If user entered anything other than a number between and including 8 and 128, an elert shows.//
  else {
    alert("Password length must be at least 8 and no more than 128 characters.");
  }
   
}

// Listen for a click event on button for generating password //
generateBtn.addEventListener("click", function() {
    

    //Ask user for the number of characters composing their codes //
    selectLength =  prompt("How many characters would you like you password to contain?");
    
    // call writePassword function above //
    writePassword(); 
});