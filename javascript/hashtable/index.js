class HashTable {
    constructor(size) {
      this.size = size;
      this.table = new Array(size).fill(null).map(() => []);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i)) % this.size;
      }
      return hash;
    }
  
    addItem(key, value) {
      const index = this._hash(key);
      const keyValuePair = this.table[index].find(entry => entry.key === key);
      if (keyValuePair) {
        keyValuePair.value = value;
      } else {
        this.table[index].push({ key, value });
      }
    }
  
    getItem(key) {
      const index = this._hash(key);
      const keyValuePair = this.table[index].find(entry => entry.key === key);
      return keyValuePair ? keyValuePair.value : undefined;
    }
  
    hasItem(key) {
      const index = this._hash(key);
      return this.table[index].some(entry => entry.key === key);
    }
  
    getKeys() {
      const keys = [];
      for (const bucket of this.table) {
        for (const entry of bucket) {
          keys.push(entry.key);
        }
      }
      return keys;
    }
  
    getIndex(key) {
      const index = this._hash(key);
      return index;
    }
  }
  

  
  module.exports=HashTable