

class Vehicle{

constructor (model, year, type, price, color){

    this.model=model;
    this.year=year;
    this.type=type;
    this.price=price
    this.color=color;

}


vehicleInfo(){

    console.log("Vehicle model is: " + this.model);
    console.log("Vehicle year is: " + this.year);
    console.log("Vehicle type is: " + this.type);
    console.log("Vehicle price is: " + this.price);
    console.log("Vehicle color is: " + this.color);
}

}

var vehicle1= new Vehicle("Mercedes",2019,"sport",50000,"white");
vehicle1.vehicleInfo();

//promises, practice;


