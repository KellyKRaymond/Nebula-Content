// east vs west coast


// const createPlaceObj = (coast, state, landscape, weather)=> {
//     const state = {
//         coast = West,
//         state = Arizona,
//         landscape = desert, 
//         weather = hot,
//         slogan: () =>{
//             console.log(`visit ${state} , it's really fricken hot here!`)
//         }
//     }
// }

class Coast {
    constructor(state, landscape, weather) {
        this.state = state
        this.landscape = landscape
        this.weather = weather
    }
    slogan() {
        console.log(`visit ${this.state} , it's really fricken hot here!`)
    }
}

class Arizona extends Coast {
    constructor(state, landscape, weather, nationalParks){ 
    super(state, landscape, weather)
    this.nationalParks = nationalParks
    }
    
}

