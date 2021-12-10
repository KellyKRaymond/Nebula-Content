class Toddlers {
    constructor(names,games, schedule, eats, says){
        this.names = names
        this.games = games
        this.schedule = schedule
        this.eats = eats
        this.says = says
    }
    toddlerNames(){
        console.log(`hi, my name is ${this.names}`)
    }
    toddlerGames(){
        console.log(`I love to play with ${this.games}`)
    }
    toddlerSchedule(){
        console.log(`it's time for ${this.schedule}`)
    }
    toddlerEats(){
        console.log(`my favorite food is ${this.eats}`)
    }
    toddlerSays(){
        console.log(`my favorite color is ${this.says}`)
    }
}

const Chase = new Toddlers('Chase' , 'trucks' , 'nap time', 'strawberries', 'mama, up me!')
console.log(Chase)

class Mom extends Toddlers {
    constructor(name, games, schedule, eats, says)
    super(name,games,schedules,eats,){
    this.yelling = this.yelling
    }
}
class Disipline {
    constructor(says){
        this.says = says;
        this.comment = "go to bed"
    
    this.comment.push({comment, Toddlers})
    }
}

class Listening {
    constructor(says){
    this.says = says
    this.comment = "yes mama, goodnight"

    this.comment.push({comment, Mom})
    }   
}

// use methods for listening / disipline