// create arrays with all the vaules for the values
// create prompts for pw criteria
// create text input field for the pw length
// combine arrays the use for loop to use random number gen to pull random index


//different arrays to be combined
var lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
var upCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
var specChar = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '/', '=', '+'];
var numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
  //local array used to concat the the variables at the top of the document, or the 'master' array for this project
  var customPw = [];
  //the local variable the will be returned at the end
  var finalPw = "";

  var pwLength = prompt("Choose the length of the password", "8-128. Anything outside of this range will generate a password that is of random length.");

  console.log(pwLength);

  //this statement will make sure that it is between 8 and 128 numbers. anything outside of the range will just grab at a random number
  if (pwLength >= 8 && pwLength <= 128) {
    alert("Your password will be " + pwLength + " characters long.")
  // If the user cancels at this point, they will exit the criteria process
  } else if (pwLength == null) {
    return "Your Secure Password";
  } else {
    alert("The password generated will be a random length.");
    pwLength = Math.floor(Math.random() * 121) + 8;
  }

  // used for debugging, makes sure that we are grabbing the right number and that is randomized when needed
  // console.log(pwLength);

  // this is a series of confirms to create the critera of the random password
  // first it will determine whether or not wants to use that critera
  // then if it true, it will concat it into the 'master' array
  alert("The next set of questions will determine what characteristics will be implemented in the generated password. Use 'Ok' to accept the criteria, and 'Cancel' the deny it.");
  var choiceUp = confirm("Would you like to use upper case characters?");
  if (choiceUp) {
    customPw = customPw.concat(upCase);
  }

  var choiceLow = confirm("Would you like to use lower case characters?");
  if (choiceLow) {
    customPw = customPw.concat(lowCase);
  }

  //this condition will for the user to use letters. if they dont allow any, then it will restart the process
  if (!choiceUp && !choiceLow) {
    alert("Letters are required for a password. Please try again.")
    generatePassword();
  } 

  var choiceSpec = confirm("Would you like to use special characters?");
  if (choiceSpec) {
    customPw = customPw.concat(specChar);
  }

  var choiceNum = confirm("Would you like to use numbers?");  
  if (choiceNum) {
    customPw = customPw.concat(numChar);
  }

  // this for loop generates the password. it will run as many times as the length that the user specifies
  // using random number generation, it will pull at a random index from the 'master' array
  for (var i = 0; i < pwLength; i++) {
    finalPw = finalPw + customPw[Math.floor(Math.random()*customPw.length)];
  }
  
  // using for debugging and making sure that the 'master' array is concatting properly
  // console.log(customPw);

  return finalPw;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
