class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name ;
    this.age = age;
  }

  getGreeting() {
  //  return 'Hi! I am ' + this.name + ' !!';
  //or use template strings to inject data in string, using backtick key
      return `Hello there, this is ${this.name}!`;
  }

  getDescription(){
      return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person{
  constructor(name, age, major = 'undecided') {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription(){
    let description = super.getDescription();
    
    if(this.hasMajor()){
      description += `Thier major is ${this.major}`;
    }
    return description;
  }
}

//Traveler class
//override getGreeting

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation() {
    return this.homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if(this.hasHomeLocation()){
      greeting += `I'm visiting from ${this.homeLocation}`;
    }
    return greeting;
  }
}

const me = new Traveler('Simranpal Singh',27, 'Vancouver');
console.log(me.getGreeting());

/* const me = new Student('Simranpal Singh',27, 'Computer Science');
console.log(me);
console.log(me.getDescription());

const other = new Student();
console.log(other);
console.log(other.getDescription()); */