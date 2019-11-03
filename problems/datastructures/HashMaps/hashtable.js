class HashTable {
  constructor(arraySize = 7) {
    // make it a large prime to reduce collisions
    this.keyMap = Array(arraySize);
  }

  // hashing function
  hash(key) {
    const PRIME = 31;
    let index = 0; // hash

    // loop over the key and apply a function to each char to add to the hash's value
    for (let i = 0; i < key.length; i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      index = Math.abs(index * PRIME + value);  // abs value ensures that UPPER CASE doesnt give us -ve index
    }
    return index % this.keyMap.length; // modulo ensures that the value is < divisor (length of the keymap) index is never out of bounds
  }

  set(key, value) {
    let index = this.hash(key);

    // implementing through separate chaining, so each element is an array of arrays with k/v pairs [[k,v]]
    if (!this.keyMap[index]) {
      this.keyMap[index] = []; // initialise
    }

    // if key exists, update value
    let existingData = this.keyMap[index].find(data => data[0] === key);
    if (existingData) {
      // update value
      existingData[1] = value;
    } else {
      // push new data in
      this.keyMap[index].push([key, value]);
    }
    return index;
  }

  get(key) {
    let index = this.hash(key);
    let pairs = this.keyMap[index];
    let res;

    if (pairs) {
      // find the kv pair array in pairs that has matchin key
      for (let i = 0; i < pairs.length; i++) {
        // check if key matches k in each k/v pair
        if (pairs[i][0] === key) {
          res =  pairs[i]; // update res
        }
      }
    }

    // res could still be undefined
    return res ? res[1]: undefined

  }

  keys(){
    let data = this.keyMap
    let keys =[]
    
    // loop over data
    for(let i=0; i< data.length; i++){
      // loop if the cell contains data
      if(data[i]) {
        for(let j = 0; j < data[i].length; j++){
          let key = data[i][j][0]
          // ensure no duplicates in result (should not happen since set() updates existing keys)
          if (!keys.includes(key)) {
            keys.push(key)
          } 
        }
      }
    }

    return keys
  }

  values(){
    let data = this.keyMap
    let values =[]
    
    // loop over data
    for(let i=0; i< data.length; i++){
      // loop if the cell contains data
      if(data[i]) {
        for(let j = 0; j < data[i].length; j++){
          let value = data[i][j][1]
          // ensure no duplicates in result list of values
          if (!values.includes(value)) {
            values.push(value)
          } 
        }
      }
    }

    return values
  }
}

let ht = new HashTable();
// console.log(ht.hash('firstName'));
ht.set('firstName', 'Zubin');
ht.set('firstName', 'ZUBIN');
ht.set('lastName', 'PRATAP');
ht.set('lastName', 'Pratap');
ht.set('age', '999');
ht.set('AGE', '38');
ht.set('duplicate', 'Pratap');


// console.log(ht.keyMap);
// console.log(ht.get("AGE"));
console.log(ht.values()); 

