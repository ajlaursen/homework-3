// global variables
var generateBtn = document.querySelector("#generate");
var lengthEl = document.querySelector('#length');
var upperEl = document.querySelector('#upper');
var lowerEl = document.querySelector('#lower');
var numberEl = document.querySelector('#number');
var symbolEl = document.querySelector('#symbol');
var answerEl = document.querySelector('#password');

// function grabbing characters within parameters
function getRandomLowerCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function getRandomUpperCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
 }
 function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getRandomSymbol(){
  var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
  return symbol[Math.floor(Math.random()*symbol.length)];
}

const randomFunction = {
  lower : getRandomLowerCase,
  upper : getRandomUpperCase,
  number : getRandomNumber,
  symbol : getRandomSymbol,
};

// event listener funtion
generateBtn.addEventListener('click', () => {
  const length = lengthEl;
  const hasUpper = upperEl.checked;
  const hasLower = lowerEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;


  // i believe this line is where the bug exists. I don't think .innertext is the appropriate way to insert text into the field


answerEl.innertext = generatePassword(hasLower, hasUpper, hasSymbol, hasNumber, length);

})
// password generator function
function generatePassword(upper, lower, number, symbol, length){
  let generatedPassword = "";

  const typesCount = upper + lower + number + symbol;

  const typesArray = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);

  if (typesCount === 0){
    return '';
  }
  for (let i = 0; i < length; i + typesCount){
    typesArray.forEach(type => {
      const functionName = Object.keys(type)[0];
      generatedPassword += randomFunction[functionName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

// do i need to add validators to the end of this code?

// I need to add limits to length selector field

