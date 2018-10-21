/* 
const user = {
    name: 'Simranpal Singh',
    cities:['Delhi', 'Vancouver', 'Burnaby'],
    printPlacesLived() {
        console.log(this.name);
        console.log(this.cities);
        this.cities.forEach(city => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};

user.printPlacesLived(); */

//map method

const multiplier ={
    numbers: [1,2,3,4],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((num) => num*this.multiplyBy);
    }
}

console.log(multiplier.multiply());