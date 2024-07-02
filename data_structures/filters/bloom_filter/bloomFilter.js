/*

*/

class BloomFilter {
    constructor(size = 100) {
        this.size = size;
        this.bitArray = new Array(size).fill(0);
        this.hashFunctions = [
            (str) => this.hash(str, 17),
            (str) => this.hash(str, 31),
            (str) => this.hash(str, 37),
        ];
    }

    hash(str, seed) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = hash * seed + str.charCodeAt(i);
            hash = hash % this.size;
        }
        return hash;
    }

    add(item) {
        this.hashFunctions.forEach((fn) => {
            const index = fn(item);
            this.bitArray[index] = 1;
        });
    }

    contains(item) {
        return this.hashFunctions.every((fn) => {
            const index = fn(item);
            return this.bitArray[index] === 1;
        });
    }
}

module.exports = BloomFilter;
