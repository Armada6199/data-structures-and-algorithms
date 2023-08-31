const HashTable = require('./index');  

describe('HashTable', () => {
  let hashtable;

  beforeEach(() => {
    hashtable = new HashTable(10);
  });

  it('should set a key/value pair', () => {
    hashtable.addItem('name', 'John');
    expect(hashtable.getItem('name')).toBe('John');
  });

  it('should return null for non-existent key', () => {
    expect(hashtable.getItem('nonexistent')).toBe(undefined);
  });

  it('should return a list of unique keys', () => {
    hashtable.addItem('name', 'John');
    hashtable.addItem('age', 30);
    hashtable.addItem('country', 'USA');
    
    const keys = hashtable.getKeys();
    expect(keys).toContain('name');
    expect(keys).toContain('age');
    expect(keys).toContain('country');
    expect(keys.length).toBe(3);
  });

  it('should handle collisions', () => {
    const hashValue = hashtable._hash('name');
    hashtable.table[hashValue] = [{ key: 'name', value: 'John' }, { key: 'age', value: 30 }];
    hashtable.addItem('age', 31); 
    
    expect(hashtable.getItem('name')).toBe('John');
    expect(hashtable.getItem('age')).toBe(31);
  });

  it('should retrieve value from a collided bucket', () => {
    const hashValue = hashtable._hash('name');
    hashtable.table[hashValue] = [{ key: 'name', value: 'John' }, { key: 'age', value: 30 }];
    
    expect(hashtable.getItem('age')).toBe(30);
  });

  it('should hash a key to an in-range value', () => {
    const key = 'mykey';
    const hashValue = hashtable._hash(key);
    
    expect(hashValue).toBeGreaterThanOrEqual(0);
    expect(hashValue).toBeLessThan(hashtable.size);
  });
});
