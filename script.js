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
  const length = +lengthEl.value;
  // Check to see if user has input within range
  if (length < 8 || length > 128){
    alert("Length of password needs to be between 8-128")
  }
else{
  const length = +lengthEl.value;
  const hasUpper = upperEl.checked;
  const hasLower = lowerEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;
  
  answerEl.textContent = generatePassword(hasUpper, hasLower, hasNumber,hasSymbol, length);
  }
})
// password generator function
function generatePassword(upper, lower, number, symbol, length){
  let generatedPassword = "";
  console.log("length " + length);
  console.log("upper " + upper);
  console.log("lower " + lower);
  console.log("number " + number);
  console.log("symbol " + symbol);
  
  const typesCount = upper + lower + number + symbol;
  
  const typesArray = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);
  
  console.log(typesArray);
  
  if (typesCount === 0){
    return '';
  }
  for (let i = 0; i < length; i += typesCount){
    typesArray.forEach(type => {
      const functionName = Object.keys(type)[0];
      generatedPassword += randomFunction[functionName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}




