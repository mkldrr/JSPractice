//it is a method in JS

function printFullName(){

    console.log("Michael" + " " + "jordon" );
}


//printFullName();


function calculateArea(width, heigth){


    return width * heigth;

}


//console.log(calculateArea(10,20));



function age(year){
    var age= 2020- year;
    return age;
}


//console.log(age(1993));

//another way to create method
var myage= function (year){
    var age= 2020- year;
    console.log(age);
}
//call it 
myage(1993);



 function  retirement(name, birthYear){

  var retirement1 = 65 - myage(birthYear);
console.log(retirement1 + "left to " + name+ " retirement");


 }
 retirement("Mikail " + 1993);
