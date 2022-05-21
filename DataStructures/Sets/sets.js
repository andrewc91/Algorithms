function Set(){
    let set = {};
    let size = 0;

    this.has = function(val){
        return set.hasOwnProperty(val);     // hasOwnProperty will return true if there is a key that matches the val
    }

    this.add = function(val){
        if (!this.has(val)){
            set[val] = val;
            size++;
            return true;
        }
        return false;
    }

    this.getSet = function(){
        return set;
    }

    this.getSize = function(){
        return size;
    }

    this.delete = function(val){
        if (this.has(val)){
            delete set[val];    // As we are using an object to store the elements, we can simply use 'delete' operator
            size--;
            return true;
        }
        return false;
    }

    this.clear = function(){
        set = {};
    }

    this.getValues = function(){
        let values = [];
        for (i = 0, keys = Object.keys(set); i < keys.length; i++) {
            values.push(set[keys[i]]);
        }
        return values;
    }

    this.getValuesOld = function(){
        let values = [];
        for (let key in set){
            if (set.hasOwnProperty(key)){
                values.push(set[key]);
            }
        }
        return values;
    }

    /*

    The Object class in JavaScript contains a method called keys that returns an array of all properties of a given object.
    let map = {
        "name": 1,
        "gender": 100,
        "age": 300,
        "poo": "yes"
    }
    console.log(Object.keys(map)); -----> ["name", "gender", "age", "poo"];


    hasOwnProperty(value)
    let map = {
        "name": 1,
        "gender": 100,
        "age": 300,
        "doo": "no"
    }
    map.hasOwnProperty("name") -----> true

    */

    this.union = function(otherSet){
        let unionSet = new Set();
        
        // add first set
        let values = this.getValues();
        for (let i = 0; i < values.length; i++){
            unionSet.add(values[i]);
        }
        // add second set
        values = otherSet.getValues();
        for (let i = 0; i < values.length; i++){
            unionSet.add(values[i]);
        }
        return unionSet;
    }

    this.intersection = function(otherSet){
        let intersectSet = new Set();

        let values = this.getValues();
        for (let i = 0; i < values.length; i++){
            if (otherSet.has(values[i])){
                intersectSet.add(values[i]);
            }
        }
        return intersectSet;
    }

    this.difference = function(otherSet){
        let differenceSet = new Set();

        let values = this.getValues();
        for (let i = 0; i < values.length; i++){
            if (!otherSet.has(values[i])){
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    }

    this.subset = function(otherSet){
        if (this.getSize() > otherSet.getSize()){
            return false;
        }
        else {
            let values = this.getValues();
            for (let i = 0; i < values.length; i++){
                if (!otherSet.has(values[i])){
                    return false;
                }
            }
            return true;
        }
    }
}

let poo = new Set();
let doo = new Set();
poo.add(90);
poo.add(30);
console.log(poo.getSet());

doo.add(50);
doo.add(80);
doo.add(90);
doo.add(20);
doo.add(30);
console.log(doo.getSet());


// // UNION
// let onion = poo.union(doo);
// console.log(onion.getSet());
// console.log(onion.getValues());

// // INTERSECTION
// let onion = poo.intersection(doo);
// console.log(onion.getSet());
// console.log(onion.getValues());

// // DIFFERENCE
// let onion = poo.difference(doo);
// console.log(onion.getSet());
// console.log(onion.getValues());

// // IS SUBSET
console.log(poo.subset(doo));




