class Animal {
    constructor (type, noise, eats, lives){
        this.type = type
        this.noise = noise
        this.eats = eats
        this.lives = lives
    }
    animalNoise(){
        console.log(`${this.noise}`)
    }
    animalType(){
        console.log(`${this.type}`)
    }
    animalEats(){
        console.log(`${this.eats}`)
    }
    animalLives(){
        console.log(`${this.lives}`)
    }

}
const newAnimal = new Animal("Lion" , "ROAR" , "Pudding" , "Zoo")
const newAnimal2 = new Animal ("Fish" , "Bubbles" , "FishFood" , "Tank")
const newAnimal3 = new Animal("Owl" , "Hoot" , "Small animals" , "tree")

//console.log(`I am an ${type}, and I say ${noise} and I really enjoy eatting ${eats}, my current home is a ${lives} but I may be moving soon.`)

console.log(newAnimal)
console.log(newAnimal2)
console.log(newAnimal3)

class Shoes {
    constructor(size, color, type, age){
        this.size = size
        this.color = color
        this.type = type
        this.age = age
    }
    shoeSize(){
        console.log(`${this.size}`)
    }
    shoeColor(){
        console.log(`${this.color}`)
    }
    shoeType(){
        console.log(`${this.type}`)
    }
    shoeAge(){
        console.log(`${this.age}`)
    }
}
    const newShoes = new Shoes (7, 'white' , 'sneakers', '2 months')
    const newShoes2 = new Shoes (8, 'pink', 'wedges' , '4 years')
    const newShoes3 = new Shoes (22, 'red', 'clown', 'brand new')

console.log(newShoes)
console.log(newShoes2)
console.log(newShoes3)


class Shape {
    constructor(height){
        this.height = height
        this.diameter = this.diameter
    }
}
class Rectangle extends Shape{
constructor(height, width){
    super(height)
    this.wifth = width
    }
    arera(){
        console.log(this.height * this.width)
    }
}
const block = new Rectangle (5, 8)
block.arera()

class Triangle extends Shape {
    constructor(height, width){
    super(height)
    this.width = width
    }
    area(){
        console.log((this.height * this.width)/2)
    }
}
const tri = new Triangle(3, 9)
tri.area()

class Circle extends Shape{
    constructor(height){
        super(height)
    }
    area(){
        console.log(Math.PI * Math.pow(this.height/2,2))
    }
}
const roundShape = new Circle(7)
roundShape.area()

class Trapezoid extends Shape{
    constructor(height,widthA, widthB){
        super(height)
        this.widthA = widthA
        this.widthB = widthB
    }
    area(){
        console.log((this.height/2) * (this.widthA + this.widthB))
    }
}
 const trap = new Trapezoid(3, 9, 8)
 trap.area()
