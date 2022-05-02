// The JS Way - Chapter 9
//Practice problem #1: Dogs

class Dog {
  constructor(name, breed, size) {
    this.name = name
    this.breed = breed
    this.size = size
  }
    // Methods -  dog bark
    bark() {
      if (this.size > 60) {
        console.log(`${this.name} let's out a grrrr: "Grrrr...."`)
      } else{
        console.log(`${this.name} let's out a yipp: "Woof Woof!"`)
      }
    }
    info() {
      console.log(`${this.name} is a ${this.breed} dog measuring ${this.size} cm tall.`)
    }
  }


const fang = new Dog ("Fang", 'Big Hound', 100);
const fluffy = new Dog ("Fluffy", 'Tiny little Dog', 30)





//Practice Problem #2
//Character Inventory

class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.gold = 10; // Starting gold is always 10 for new characters.
    this.keys = 1; // Starting keys is always 1 for new characters. 
    this.xp = 0; // XP is always zero for new characters
  }
  // Attack a target
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(
        `${this.name} attacks ${target.name} and causes ${damage} damage points`
      );
      target.health -= damage;
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        console.log(
          `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points and also loots ${target.gold} gold and ${target.keys} keys.`
        );
        this.xp += bonusXP;
        this.gold += target.gold;
        this.keys += target.keys;
        target.gold = 0;
        target.keys = 0;
      }
    } else {
      console.log(`${this.name} can't attack (they've been eliminated)`);
    }
  }
  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this
      .strength} as strength and ${this.xp} XP points. ${this.name} is carrying ${this.gold} pieces and ${this.keys} key.`;
  }
}

//Create characters
const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);
const monster = new Character("Spike", 40, 20);


//Practice Problem #3
// Account List   --
// Was not able to get the accounts into an array like the problem wanted. .

class BankAccount {
  constructor(name) {
    this.name = name;
    this.balance = 0;
  }
  credit(change) {
   return this.balance += change;
  }
  describe(){
    console.log(`Owner: ${this.name}. Balance: ${this.balance}.`)
  }
}

const sean = new BankAccount('Sean')
const brad = new BankAccount('Brad')
const georgia = new BankAccount('Georgia')