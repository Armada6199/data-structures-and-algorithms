class HashMap {
    constructor() {
      this.map = new Map();
    }
  
    put(key, value) {
      this.map.set(key, value);
    }
  
    get(key) {
      return this.map.get(key);
    }
  
    keys() {
      return Array.from(this.map.keys());
    }
  
    has(key) {
      return this.map.has(key);
    }
  }
  
  function leftJoin(leftHashmap, rightHashmap) {
    const resultHashmap = new HashMap();
  
    leftHashmap.keys().forEach((key) => {
      const leftValue = leftHashmap.get(key);
      const rightValue = rightHashmap.has(key) ? rightHashmap.get(key) : null;
      
      resultHashmap.put(key, [leftValue, rightValue]);
    });
  
    return resultHashmap;
  }
  
  const leftMap = new HashMap();
  const rightMap = new HashMap();
  
  leftMap.put("a", 1);
  leftMap.put("b", 2);
  leftMap.put("c", 3);
  
  rightMap.put("a", "apple");
  rightMap.put("b", "banana");
  
  const result = leftJoin(leftMap, rightMap);
  
  result.keys().forEach((key) => {
    const [leftValue, rightValue] = result.get(key);
    console.log(`Key: ${key}, Left Value: ${leftValue}, Right Value: ${rightValue}`);
  });
  module.exports={HashMap,leftJoin}