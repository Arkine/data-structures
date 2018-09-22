const hash = require('string-hash'); // I could use  this but with symbols we get 0 collisions.

class DumbMap {
    constructor() {
        this.entries = [];
    }
    get(x) {
        // const val = hash(x);
        // if (!this.entries[val]) {
        //     return undefined;
        // }

        // let result;
        // this.entries[val].forEach(pair => {
        //     if (pair[0] === val) {
        //         result = pair[1];
        //     }
        // });

        // return result;
        // console.log({entries: this.entries})
        return this.entries[Symbol.for(x)]; // With symbols
    }

    set(x, y) {
        // const val = hash
        // if (!this.entries[val]) {
        //     this.entries[val] = [];
        // }

        // let result;
        // this.entries[val].push([x, y]);
       return this.entries[Symbol.for(x)] = y; // With symbols
    }
}

// let m = new DumbMap()
// m.set('x', 1)
// m.set('y', 2)

// const myObj1 = {
//     test: 1,
// }
// const myObj2 = {
//     test: 2,
// }
// m.set(myObj1, myObj1)
// m.set(myObj2, myObj2)
// // console.log(m.get(JSON.stringify(myObj1)));
// console.log(m.get(myObj1));
// console.log(m.get(myObj2));



const newMap = new Map();

newMap.set('x', 1)
newMap.set('y', 2)

const myObj1 = {
    test: 1,
}

const myObj2 = {
    test: 2,
}
newMap.set(myObj1, myObj1)
newMap.set(myObj2, myObj2)
// console.log(m.get(JSON.stringify(myObj1)));
console.log(newMap.get(myObj1));
console.log(newMap.get(myObj2));


// let m = new DumbMap()
// m.set('x', 1)
// m.set('y', 2)

// console.time('with very few records in the map')
// m.get('I_DONT_EXIST')
// console.timeEnd('with very few records in the map')

// m = new DumbMap()

// for (x = 0; x < 1000000; x++) {
//   m.set(`element${x}`, x)
// }

// console.time('with lots of records in the map')
// m.get('I_DONT_EXIST')
// console.timeEnd('with lots of records in the map')
