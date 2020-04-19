
//export class mean, can be used other places
// var name;
// var job;
// var dateOfBrith;


//import data from "./testData.json";

class Person{  // extend can be also done.

constructor(name, job, dateOfBrith){  // no need to mention class name to have a constructor
    this.name = name;
    this.job=job;
    this.dateOfBrith= dateOfBrith;
    
}
// to create a method inside of the class

info(){

    console.log("Name is: "+ this.name);
    console.log("Job Title is: "+this.job);
    console.log("DOB is: "+this.dateOfBrith);
    

}
calculateAge(){

   var age= new Date().getFullYear() - this.dateOfBrith;
    console.log("age is: "+age);
    
}

}

var person1 = new Person("Michael", "SDET", 1993);

person1.calculateAge ();
person1.info();

//console.log(data);

