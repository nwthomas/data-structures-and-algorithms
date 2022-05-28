const { LRUCache, Node } = require('./lruCache.js');

describe('LRU Cache', () => {
    describe('Node', () => {
        it('instantiates a new version of Node', () => {
            const node = new Node();
            expect(node instanceof Node).toBe(true);
        });

        it('instantiates with null as default value', () => {
            const node = new Node();
            expect(node.value).toBe(null);
        });

        it('instantiates with a value stored in the node', () => {
            const node = new Node('10', 10);
            expect(node.value).toBe(10);
        });

        it('takes in a key and stores the key', () => {
            const node = new Node('10', 10);
            expect(node.key).toBe('10');
        });

        it('instantiates with null for next and prev nodes', () => {
            const node = new Node();

            const prevNode = node.prev;
            const nextNode = node.next;
            expect(prevNode).toBe(null);
            expect(nextNode).toBe(null);
        });

        it('instantiates with next node if provided', () => {
            const nextNode = new Node();
            const node = new Node('10', 10, nextNode);

            expect(node.next).toEqual(nextNode);
        });

        it('instantiates with prev node if provided', () => {
            const prevNode = new Node();
            const node = new Node('100', 100, new Node(), prevNode);

            expect(node.prev).toEqual(prevNode);
        });
    });

    describe('LRUCache', () => {
        it('instantiates a new version of LRUCache', () => {
            const cache = new LRUCache(100);
            expect(cache instanceof LRUCache).toBe(true);
        });

        it('instantiates with max size', () => {
            const cache = new LRUCache(123);
            expect(cache.capacity).toBe(123);
        });

        it('instantiates with null as head default', () => {
            const cache = new LRUCache(100);
            expect(cache.head).toBe(null);
        });

        it('instantiates with null as tail default', () => {
            const cache = new LRUCache(100);
            expect(cache.tail).toBe(null);
        });

        it('intantiates with length of 0', () => {
            const cache = new LRUCache(100);
            expect(cache.length).toBe(0);
        });

        it('returns correct length when values have been added', () => {
            const cache = new LRUCache(10);
            cache.put('10', 10);
            cache.put('8', 8);
            cache.put('5', 5);

            expect(cache.length).toBe(3);
        });

        it('adds new value to head of cache', () => {
            const cache = new LRUCache(100);
            cache.put('3', 3);
            expect(cache.head.value).toBe(3);

            cache.put('10101', 10101);
            expect(cache.head.value).toBe(10101);
        });

        it('removes a value at tail of cache if over capacity', () => {
            const cache = new LRUCache(3);

            for (let i = 1; i < 5; i++) {
                cache.put(`${i}`, i);
            }

            expect(cache.tail.value).toBe(2);
        });

        it('gets value and moves that value to head of cache', () => {
            const cache = new LRUCache(100000000);
            cache.put('10', 10);
            cache.put('5', 5);
            cache.put('4', 4);

            const accessedValue = cache.get('10');
            expect(accessedValue).toBe(10);
            expect(cache.head.value).toBe(10);
        });

        it('returns -1 if value is not found', () => {
            const cache = new LRUCache(123);

            const accessedValue = cache.get('4');
            expect(accessedValue).toBe(-1);
        });

        it('deletes a node in the cache and returns the value', () => {
            const cache = new LRUCache(808); // & heartbreaks

            cache.put('57', 57);
            expect(cache.head.value).toBe(57);
            expect(cache.tail.value).toBe(57);

            const deletedValue = cache.delete('57');
            expect(deletedValue).toBe(57);
            expect(cache.head).toBe(null);
            expect(cache.tail).toBe(null);
        });

        it('returns -1 if not deleted', () => {
            const cache = new LRUCache(765);

            const deletedValue = cache.delete('4');
            expect(deletedValue).toBe(-1);
        });

        it('deleting value from cache updates length value', () => {
            const cache = new LRUCache(678);
            cache.put('6', 6);
            cache.put('5', 5);
            cache.put('4', 4);

            expect(cache.length).toBe(3);

            cache.delete(5);
            expect(cache.length).toBe(2);
        });

        it('sets new tail and head correctly if length 1', () => {
            const cache = new LRUCache(4);
            cache.put('1', 1);

            expect(cache.head.value).toBe(1);
            expect(cache.tail.value).toBe(1);

            cache.delete('1');
            expect(cache.head).toBe(null);
            expect(cache.tail).toBe(null);
        });
    });
});
