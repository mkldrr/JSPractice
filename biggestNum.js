




 function largestNum (num1,num2,num3){

    if(num1>num2 && num1> num3){
        return "largest num is: " + num1;
    }else if(num2>num1 && num2>num3){
        return "largest num is: " + num2;
    }else if(num3>num1 && num3 > num2) {
    return "largest num is: " + num3;
    }else{
        return "every number is equal";
    }
    
    }
    
    console.log(largestNum(23,34,676));
    