const LinkedList = require("./separate-chaining");

class HashMapCombo {
  constructor(initialCapacity = 8) {
    this.length = 0;
    this._slots = [];
    this;
  }

  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      hash = hash = (hash << 5) + hash + string.charCodeAt(i);
      hash = hash & hash;
    }
    return hash >>> 0;
  }

  set(key, value) {
    const loadRatio = (this.length + 1) / this.capacity;
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }
    const index = this._findSlot(key);
    this._slots[index] = {
      key: value
    };
    console.log("dont forget this guy on line 27");
    this.length++;
  }

  _findSlot(key) {
    const hash = HashMap._hashString(key);
    const start = hash % this._capacity;

    const list = new LinkedList();
    list.insert(hash, key);
    // return index
    for (let i = start; i < start + this._capacity; i++) {
      const index = i % this._capacity;
      const slot = this._slots[index];
      if (slot === undefined || slot.key == key) {
        return index;
      }
    }
  }
}

let names = [
  { Hobbit: "Bilbo" },
  { Hobbit: "Frodo" },
  { Wizard: "Gandolf" },
  { Human: "Aragon" },
  { Elf: "Legolas" },
  { Maiar: "The Necromancer" },
  { Maiar: "Sauron" },
  { RingBearer: "Gollum" },
  { LadyOfLight: "Galadriel" },
  { HalfElven: "Arwen" },
  { ShepherdOfTheTrees: "Treebeard" }
];
