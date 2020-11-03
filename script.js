// Character Arrays
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Starting Variables
var length = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUppercase;
var confirmLowercase;

function generatePassword() {
  var length = parseInt(prompt("How many characters would you like your password to contain? Choose between 8 and 128 characters"));
  
  console.log(length);

    if (length < 8 || length > 128) {
      alert("Password length must be between 8-128 characters. Try again!");
      var length = parseInt(prompt("How many characters would you like your password to contain? Choose between 8 and 128 characters"));
      } 

    var confirmSpecialCharacter = confirm("Do you want your password to include special characters?");
    var confirmNumericCharacter = confirm("Do you want your password to include numbers?");    
    var confirmLowercase = confirm("Do you want your password to include lowercase letters?");
    var confirmUppercase = confirm("Do you want your password to include uppercase letters?");
      
    while (confirmUppercase === false && confirmLowercase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmSpecialCharacter = confirm("Do you want your password to include special characters?");
        var confirmNumericCharacter = confirm("Do you want your password to include numbers?");    
        var confirmLowercase = confirm("Do you want your password to include lowercase letters?");
        var confirmUppercase = confirm("Do you want your password to include uppercase letters?");
    } 

    //Ultimately, we are making an array that will include all of the arrays that the user has decided to include.   
    var finalArr = []
      
    if (confirmSpecialCharacter) {
      finalArr = finalArr.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      finalArr = finalArr.concat(numbers)
    }
      
    if (confirmLowercase) {
      finalArr = finalArr.concat(lowercase)
    }

    if (confirmUppercase) {
      finalArr = finalArr.concat(uppercase)
    }

      var password = ""
      
      for (var i = 0; i < length; i++) {
        password += finalArr[Math.floor(Math.random() * finalArr.length)];
      }
      return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;
  alert("Thank you for using my app!")
}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});
function copyPassword() {
  document.getElementById("password").select();
  document.execCommand("Copy");
}

document.querySelector("#generate").addEventListener("click", writePassword);