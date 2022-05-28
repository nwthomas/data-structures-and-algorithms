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
    });
});
