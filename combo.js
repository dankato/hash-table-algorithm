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
    if (loadRatio > HashMapCombo.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMapCombo.SIZE_RATIO);
    }
    const index = this._findSlot(key);
    this._slots[index] = {
      key, value
    };
    console.log(key, 'print key')
    console.log("current slot index", this._slots[index]);
    this.length++;
    console.log(this.length)
  }

  _findSlot(key) {
    const hash = HashMapCombo._hashString(key);
    const start = hash % this._capacity;
    let slot = this._slots[start]

    if (!slot) {
      console.log('!slot', slot)
      return slot = { key }
    }
    else if (slot.key == key) {
      console.log('else if', slot)
      return slot;
    } else {
      while (slot.next !== null) {
        slot = slot.next
        console.log('while loop', slot)
        if (slot.key == key) {
          return slot
        }
      }
      return slot.next = { key }
    }
  }
}

HashMapCombo.MAX_LOAD_RATIO = 0.9;
HashMapCombo.SIZE_RATIO = 3;

const hash = new HashMapCombo()

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


console.log('TEST', hash.set('testKey', 'testValue'))
