const hash = require('string-hash'); // I could use  this but with symbols we get 0 collisions.

class DumbMap {
    constructor() {
        this.entries = [];
    }
    get(x) {
        const val = hash(x);
        if (!this.entries[val]) {
            return undefined;
        }

        let result;
        this.entries[val].forEach(pair => {
            if (pair[0] === val) {
                result = pair[1];
            }
        });

        return result;
        // return this.entries[Symbol.for(x)]; // With symbols
    }

    set(x, y) {
        const val = hash
        if (!this.entries[val]) {
            this.entries[val] = [];
        }

        let result;
        this.entries[val].push([x, y]);
    //    return this.entries[Symbol(x)] = y; // With symbols
    }
}

let m = new DumbMap()
m.set('x', 1)
m.set('y', 2)

console.time('with very few records in the map')
m.get('I_DONT_EXIST')
console.timeEnd('with very few records in the map')

m = new DumbMap()

for (x = 0; x < 1000000; x++) {
  m.set(`element${x}`, x)
}

console.time('with lots of records in the map')
m.get('I_DONT_EXIST')
console.timeEnd('with lots of records in the map')

