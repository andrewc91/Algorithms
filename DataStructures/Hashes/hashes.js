function HashTable(size){
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(key, value){
  this.key = key;
  this.value = value;
  this.next = null;
}

HashTable.prototype.hash = function(key){
  var total = 0;
  for (var i = 0; i < key.length; i++){
    total += key.charCodeAt(i);
  }
  var bucket = total % this.numBuckets;
  return bucket;
}

HashTable.prototype.add = function(key, value){
  var idx = this.hash(key);
  if (!this.buckets[idx]){
    this.buckets[idx] = new HashNode(key, value);
  }
  else {
    var current = this.buckets[idx];
    while (current.next){
      current = current.next;
    }
    current.next = new HashNode(key, value);
  }
}

HashTable.prototype.add2 = function(key, value){
  var idx = this.hash(key);
  if (!this.buckets[idx]){
    this.buckets[idx] = new HashNode(key, value);
  }
  else if (this.buckets[idx].key === key){
    this.buckets[idx].value = value;
  }
  else {
    var current = this.buckets[idx];
    while (current.next){
      if (current.key === key){
        current.value = value;
        return;
      }
      current = current.next;
    }
    current.next = new HashNode(key, value);
  }
};

HashTable.prototype.get = function(key){
  var idx = this.hash(key);
  if (!this.buckets[idx]){
    return null;
  }
  else {
    var current = this.buckets[idx];
    while (current){
      if (current.key === key){
        return current.value;
      }
      current = current.next;
    }
    return null;
  }
}

HashTable.prototype.isEmpty = function(){
  for (var i = 0; i < this.buckets.length; i++){
    if (this.buckets[i]){
      return false;
    }
  }
  return true;
}

HashTable.prototype.remove = function(key){
  var idx = this.hash(key);
  console.log(idx)

}

var table = new HashTable(10);
table.add('Andrew', 'Choe')
table.add('Andra', 'Choe')
table.add('Diana', 'Han')
table.add('Didi', 'Ham')
// console.log(table.get('Didi'))
// table.add2('Andrew', 'Choweezy')
// console.log(table);
console.log(table.isEmpty())
