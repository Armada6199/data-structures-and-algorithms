    const {HashMap,leftJoin} = require('./hashmap-left-join'); 
    describe('leftJoin', () => {
        it('should perform a LEFT JOIN correctly when there are matching keys', () => {
          const leftMap = new HashMap();
          const rightMap = new HashMap();
      
          leftMap.put("a", 1);
          leftMap.put("b", 2);
          leftMap.put("c", 3);
      
          rightMap.put("a", "apple");
          rightMap.put("b", "banana");
      
          const result = leftJoin(leftMap, rightMap);
      
          expect(result.get("a")).toEqual([1, "apple"]);
          expect(result.get("b")).toEqual([2, "banana"]);
          expect(result.get("c")).toEqual([3, null]);
        });
      
        it('should perform a LEFT JOIN correctly when there are no matching keys', () => {
          const leftMap = new HashMap();
          const rightMap = new HashMap();
      
          leftMap.put("x", "cat");
          leftMap.put("y", "dog");
      
          rightMap.put("a", "apple");
          rightMap.put("b", "banana");
      
          const result = leftJoin(leftMap, rightMap);
      
          expect(result.get("x")).toEqual(["cat", null]);
          expect(result.get("y")).toEqual(["dog", null]);
          expect(result.get("a")).toBeUndefined(); // No matching key in leftMap
        });
      
        it('should handle an empty left hashmap', () => {
          const leftMap = new HashMap();
          const rightMap = new HashMap();
      
          rightMap.put("a", "apple");
          rightMap.put("b", "banana");
      
          const result = leftJoin(leftMap, rightMap);
      
          expect(result.get("a")).toEqual([null, "apple"]);
          expect(result.get("b")).toEqual([null, "banana"]);
        });
      
        it('should handle an empty right hashmap', () => {
          const leftMap = new HashMap();
          const rightMap = new HashMap();
      
          leftMap.put("x", "cat");
          leftMap.put("y", "dog");
      
          const result = leftJoin(leftMap, rightMap);
      
          expect(result.get("x")).toEqual(["cat", null]);
          expect(result.get("y")).toEqual(["dog", null]);
        });
      });
      