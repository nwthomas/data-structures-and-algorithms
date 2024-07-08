const BloomFilter = require('./bloomFilter');

describe(BloomFilter.name, () => {
    test('stores a value in the bloom filter', () => {
        const bloomFilter = new BloomFilter(1000);
        bloomFilter.add('test value');

        const foundResult = bloomFilter.contains('test value');
        const notFoundResult = bloomFilter.contains('another test value');

        expect(foundResult).toBeTrue();
        expect(notFoundResult).toBeFalse();
    });

    test('stores multiple values and accurately retrieves them', () => {
        const bloomFilter = new BloomFilter(1000);
        bloomFilter.add('value one');
        bloomFilter.add('value two');
        bloomFilter.add('value three');

        const firstValue = bloomFilter.contains('value one');
        const secondValue = bloomFilter.contains('value two');
        const thirdValue = bloomFilter.contains('value three');
        const notFoundResult = bloomFilter.contains('value four');

        expect(firstValue).toBeTrue();
        expect(secondValue).toBeTrue();
        expect(thirdValue).toBeTrue();
        expect(notFoundResult).toBeFalse();
    });
});
