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

    /**
     * A simple hashing function used to generate a value for the inputted string
     *
     * @param {string} str The string to hash based on the seed
     * @param {number} seed The seed to be used for the hashing function
     * @returns  {number} The hashed value for the string
     */
    hash(str, seed) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = hash * seed + str.charCodeAt(i);
            hash = hash % this.size;
        }
        return hash;
    }

    /**
     * Adds a value to the probabilistic bloom filter data structure
     *
     * @param {string} str The string to hash and add to the bloom filter
     */
    add(str) {
        this.hashFunctions.forEach((fn) => {
            const index = fn(str);
            this.bitArray[index] = 1;
        });
    }

    /**
     * Checks if a string value exists in the bloom filter. This function returns a probabilistic
     * 'yes' (maybe it exists) and a firm 'no' (it definitely does not).
     *
     * @param {string} str A string to check for existence in the bloom filter
     * @returns {boolean} Returns a probabilistic 'yes' or a deterministic 'no' that the value is
     * in the filter
     */
    contains(str) {
        return this.hashFunctions.every((fn) => {
            const index = fn(str);
            return this.bitArray[index] === 1;
        });
    }
}

module.exports = BloomFilter;
