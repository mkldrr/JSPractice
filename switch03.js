

//prompt ("Enter a number"); // this is asking a input

//Alert, it is giving a warning;

//alert("Warning");
//alert("Warning");



var num1 , num2 , result, operator;



num1 = prompt("Enter the first number: ");
num1 = parseInt(num1);

num2 = prompt("Enter the second number");
num2 = parseInt(num2);

operator = prompt("Enter an operator you want");
switch(operator){
    case "+":
        result = num1+num2;
        console.log(result);
        break;

    case "-":

        result = num1-num2;
        console.log(result);
        break;
        
    case "/":
        result = num1/num2;
        console.log(result);
        break;
        
    case "*":
        result = num1*num2;
        console.log(result);
        break   
        
    default:
        console.log("Please enter valid number");    
}