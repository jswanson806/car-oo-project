//Part I
class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return 'Beep';
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

//Part II
class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

//Part III
class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!!!";
    }
}

//Part IV
class Garage{
    constructor(capacity){
        this.vehicles = [];
        this.capacity = 2;
    }
    add(vehicle){
        //check for vehicle to be valid
        if(!(vehicle instanceof Vehicle)){
            //if not valid, return "Only vehicles are allowed in here!"
            return "Only vehicles are allowed in here!";
        }
        //check for capacity limit
        if(this.vehicles.length >= this.capacity){
             //if at capacity, return "Sorry, we're full."
            return "Sorry, we're full."
        } else {
            //if below capacity, push obj to vehicles array
            this.vehicles.push(vehicle);
            //return "Vehicle added!"
            return "Vehicle added!";
        }
    }
}