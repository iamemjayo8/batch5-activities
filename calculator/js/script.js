class calculator {
  constructor(displayValue, operator, firstOperand, secondOperand){
    this.displayValue = displayValue;    
    isSecondOperandEnter = false;
    this.currentValue = null;
    this.firstOperand = firstOperand;
    this.secondOperand = secondOperand;
    this.operator = null;
    this.previousOperator = operator; 
  }        
};

function inputNum(num){
  let calcDisplay = document.querySelector('#display')
  if(calculator.isSecondOperandEnter === true){
      calculator.displayValue = num;
      calculator.isSecondOperandEnter = false;
  }else{
      if(calcDisplay.value === '0'){
        calculator.displayValue = num;        
      }else{
        calculator.displayValue = calculator.displayValue + num;
      }
  }
}
function handleOperator(operator) {
  if(calculator.firstOperand == null){
    let calcDisplay = document.querySelector('#display')
    calcDisplay.value = '0';     
      calculator.firstOperand = parseInt(calculator.displayValue);      
      if(operator === '+'){
        calculator.isSecondOperandEnter = true;
        calculator.previousOperator = operator;
        //console.log(true);      
    }else if(operator === '-'){
      calculator.isSecondOperandEnter = true;
      calculator.previousOperator = operator;
    }else if(operator === '*'){
      calculator.isSecondOperandEnter = true;
      calculator.previousOperator = operator;
    }else if(operator === '/'){
      calculator.isSecondOperandEnter = true;
      calculator.previousOperator = operator;
    }
  }else{
    if(calculator.firstOperand !== null && calculator.secondOperand == null){
      calculator.secondOperand = parseInt(calculator.displayValue);
      if(operator){
        switch(operator){
          case '+':
            calcAdd(calculator.firstOperand, calculator.secondOperand, operator);
            calculator.firstOperand = null;
            calculator.secondOperand = null;
            calculator.operator = operator;
            break;
          case '-':
            calcMinus(calculator.firstOperand, calculator.secondOperand, calculator.previousOperator);
            calculator.firstOperand = null;
            calculator.secondOperand = null;
            calculator.operator = null;
            calculator.previousOperator = null;
            break;
          case '*':
            calcTimes(calculator.firstOperand, calculator.secondOperand, calculator.previousOperator);
            calculator.firstOperand = null;
            calculator.secondOperand = null;
            calculator.operator = null;
            calculator.previousOperator = null;
            break;
          case '/':
            calcDivide(calculator.firstOperand, calculator.secondOperand, calculator.previousOperator);
            calculator.firstOperand = null;
            calculator.secondOperand = null;
            calculator.operator = null;
            calculator.previousOperator = null;
            break;
        }
      }
    }
  }
}     
function calcAdd(firstOperand, secondOperand, operator){
  var result = 0;
  if(operator === '='){
    result = firstOperand + secondOperand;
  }else{
    if(operator === '+'){
        result = firstOperand += secondOperand;
    }
  }
  calculator.displayValue = result;
}
function calcMinus(firstOperand, secondOperand, operator){
  var result = 0;
  if(operator === '='){
    result = firstOperand - secondOperand;
    calculator.displayValue = result;
  }else{
    if(operator === '-'){
      result = firstOperand -= secondOperand;
      calculator.displayValue = result;
    }
  }
}
function calcTimes(firstOperand, secondOperand, operator){
  var result = 0;
  if(operator === '='){
    result = firstOperand * secondOperand;
    calculator.displayValue = result;
  }else{
    if(operator === '*'){
      result = firstOperand *= secondOperand;
      calculator.displayValue = result;
    }
  }
}
function calcDivide(firstOperand, secondOperand, operator){
  var result = 0;
  if(operator === '='){
    result = firstOperand / secondOperand;
    calculator.displayValue = result;
  }else{
    if(operator === '/'){
      result = firstOperand /= secondOperand;
      calculator.displayValue = result;
    }
  }
}

function updateDisplay(){
  const display = document.querySelector('#display');
  display.value = calculator.displayValue;
}

function clearCalc(){
calculator.displayValue = '0';
calculator.firstOperand = null;
calculator.secondOperand = null;
calculator.isSecondOperandEnter = false;
calculator.operator = null;
calculator.previousOperator = null;
}

window.onload = function(){  
  const pageTitle = document.querySelector('#header-title');
  pageTitle.innerHTML = "CALCULATOR USING JAVASCRIPT";
  const reminder = document.querySelector('#reminder');
  reminder.innerHTML = "Alwasy use = (equal sign) after 2nd operand.";
  const keys = document.querySelector('.calc_keys');
  keys.addEventListener('click', event => {
    const {target} = event;
    const {value} = target;
    if(!target.matches ('button')){
        return;
    }
    switch (value) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
          handleOperator(value);
          break;
        case '.':
          isDecimal(value);
          break;
        case 'clear':
          clearCalc();
          break;
        default:
          if (Number.isInteger(parseFloat(value))) {
            inputNum(value);
          }
      }
updateDisplay();    
  });
}