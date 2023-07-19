class Animal{
    constructor(species,name,next=null){
        this.species=species;
        this.name=name;
        this.next=next;
    }
};
const animalImg=require('../assets/animalshelter.png')
class AnimalShelter{
    constructor(){
        this.front=null;
        this.back=null;
        this.size=0;
    }
    enqueue(animal){
        if(this.size===0) {
            const newAnimal=new Animal(animal.species,animal.name);
            this.front=newAnimal;
            this.back=newAnimal;
            this.size++;
        }else {
            const newAnimal=new Animal(animal.species,animal.name);
            this.back.next=newAnimal;
            this.back=newAnimal;
            this.size++;
        }
    }
    dequeue(pref){
     const current=this.front;
     while(current){
        if(pref=current.species) {
            this.front=current.next;
            return current;
        }
        else current=current.next;
     }       
     return null;
    }
}
const shelter=new AnimalShelter();
shelter.enqueue({species:'cat',name:'cat1'});
shelter.enqueue({species:'cat',name:'cat2'});
shelter.enqueue({species:'dog',name:'dog1'});
shelter.enqueue({species:'dog',name:'dog2'});
shelter.enqueue({species:'dog',name:'dog2'});
shelter.enqueue({species:'cat',name:'cat3'});
shelter.enqueue({species:'cat',name:'cat4'});
console.log(shelter.dequeue('cat'));
console.log(shelter.dequeue('cat'));
