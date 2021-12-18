// Assignment Code
 var generateBtn = document.querySelector("#generate");

var inputRange= document.getElementById('inputRange');
var inputNumber = document.getElementById('inputNumber');
var  addLowercaseElement = document.getElementById('addLowercase');
var addUppercaseElement = document.getElementById('addUppercase');
var addSpecialCharElement = document.getElementById('addSpecialChar');
 var addNumbersElement = document.getElementById('addNumbers');
var form = document.getElementById('passwordGeneratorForm ');
var passwordDisplay = document.getElementById('passwordDisplay');

// /The event listener tells the 'inputRange' and 'inputNumber' to execute the function "insertInputNumber" when a value is inserted into the elements by the user. 
inputRange.addEventListener('input', insertInputRange);
inputNumber.addEventListener('input', insertInputNumber);

// Any time the number with he slider, it will also change input number and vice versa.
function insertInputNumber(e) {
  var value = e.target.value
  inputRange.value = value
  inputNumber.value = value
};



var  lowercaseCodes = arrayLowToHigh(65, 90);
var uppercaseCodes = arrayLowToHigh(97, 122);
var symbolsCodes = arrayLowToHigh(33, 47).concat(
  arrayLowToHigh(58, 64)
  ).concat(
  arrayLowToHigh(91, 96)
).concat(
  arrayLowToHigh(123, 126)
);
var numberCodes = arrayLowToHigh(48, 57);


// / This line of code makes sure that the page does not refresh every time you press the password generator button. This prevents that default setting
form.addEventListener('submit',  e  => {
 e.preventDefault()
  var passwordLength = inputNumber.value;
  var insertLowercase= addLowercaseElement.checked;
  var insertUppercase = addUppercaseElement.checked;  
  var insertSymbols = addSpecialCharElement.checked;
  var insertNumbers= addNumbersElement.checked;

  var password = generatePassword(passwordLength, insertLowercase, insertUppercase, insertSymbols,  insertNumbers);
        password.innerText = password
})

// This is the function that will generate our password
,function generatePassword (inputNumber, _addLowercase, _addUppercase, _addSpecialChar, _addNumbers){
          var charCodes = lowercaseCodes
          if (insertUppercase) charCodes = charCodes.concat(uppercaseCodes)
          if (insertSymbols) charCodes = charCodes.concat(symbolsCodes)
          if (insertNumbers) charCodes = charCodes.concat(numberCodes)
          var passwordChar = []
          for (var i = o ; i < inputNumber; i++) {
            var characterCode = charCodes [Math.floor(math.random() * inputNumber)]
            passwordChar.push(String.fromCharCode(characterCode))
          }
          return passwordCharacters.join(' ')
}
// function used to generate arrays 
,function arrayLowToHigh (low, high){
  var array = [];
  for ( var i = low; i <= high; i++){
        array.push(i);
  }
  return array;
})
