const AnimalShelter = require('../index'); 

describe('AnimalShelter', () => {
  test('Enqueueing animals', () => {
    const shelter = new AnimalShelter();

    shelter.enqueue({ species: 'cat', name: 'cat1' });
    shelter.enqueue({ species: 'cat', name: 'cat2' });
    shelter.enqueue({ species: 'dog', name: 'dog1' });

    expect(shelter.size).toBe(3);
    expect(shelter.front.species).toBe('cat');
    expect(shelter.back.species).toBe('dog');
  });

  test('Dequeueing a specific species', () => {
    const shelter = new AnimalShelter();

    const cat1 = { species: 'cat', name: 'cat1' };
    const cat2 = { species: 'cat', name: 'cat2' };
    const dog1 = { species: 'dog', name: 'dog1' };

    shelter.enqueue(cat1);
    shelter.enqueue(dog1);
    shelter.enqueue(cat2);

    const dequeuedCat = shelter.dequeue('cat');
    expect(dequeuedCat).toEqual(cat1);
    expect(shelter.size).toBe(2);
    expect(shelter.front.species).toBe('dog');
    expect(shelter.back.species).toBe('cat');
  });

  test('Dequeueing an animal not in the shelter', () => {
    const shelter = new AnimalShelter();

    shelter.enqueue({ species: 'cat', name: 'cat1' });

    const dequeuedAnimal = shelter.dequeue('dog');
    expect(dequeuedAnimal).toBeNull();
    expect(shelter.size).toBe(1);
  });

  test('Dequeueing from an empty shelter', () => {
    const shelter = new AnimalShelter();

    const dequeuedAnimal = shelter.dequeue('cat');
    expect(dequeuedAnimal).toBeNull();
    expect(shelter.size).toBe(0);
  });
});
