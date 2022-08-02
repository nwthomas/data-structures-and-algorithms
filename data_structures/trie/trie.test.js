const Trie = require('./trie.js');

describe('Trie', () => {
    describe('instantiates', () => {
        it('instantiates a new Trie', () => {
            const trie = new Trie();
            expect(trie instanceof Trie).toBe(true);
        });
    });

    describe('insert', () => {
        it('adds a new word to the Trie class', () => {
            const trie = new Trie();
            trie.insert('testing');
            trie.insert('test');

            let hasWord = trie.search('test');
            expect(hasWord).toBe(true);

            hasWord = trie.search('nathan');
            expect(hasWord).toBe(false);

            hasWord = trie.search('testing');
            expect(hasWord).toBe(true);

            trie.insert('nathan');
            hasWord = trie.search('nathan');
            expect(hasWord).toBe(true);
        });

        it('can add multiple of the same word and increment word totals value', () => {
            const trie = new Trie();
            trie.insert('nate');
            trie.insert('nate');

            expect(
                trie.root.children.n.children.a.children.t.children.e.wordTotals
            ).toBe(2);
        });

        it('assigns a word total + 1 to the last character node in a word', () => {
            const trie = new Trie();
            trie.insert('add');

            expect(trie.root.children.a.wordTotals).toBe(0);
            expect(trie.root.children.a.children.d.wordTotals).toBe(0);
            expect(trie.root.children.a.children.d.children.d.wordTotals).toBe(
                1
            );
        });
    });

    describe('search', () => {
        it('can store a large word correctly', () => {
            const trie = new Trie();
            trie.insert('supercalifragilisticexpialidocious');

            const hasWord = trie.search('supercalifragilisticexpialidocious');
            expect(hasWord).toBe(true);
        });

        it('returns false if the only difference in stored word is case sensitivity', () => {
            const trie = new Trie();
            trie.insert('Nathan');

            const hasWord = trie.search('nathan');
            expect(hasWord).toBe(false);
        });
    });

    describe('startsWith', () => {
        it('returns true if any word with a prefix exists', () => {
            const trie = new Trie();
            trie.insert('testing');
            trie.insert('testify');

            let hasAnyWord = trie.startsWith('test');
            expect(hasAnyWord).toBe(true);

            hasAnyWord = trie.startsWith('tent');
            expect(hasAnyWord).toBe(false);
        });

        it('returns false if a long prefix does not have any words that exist in the Trie', () => {
            const trie = new Trie();
            trie.insert('test');
            trie.insert('testing');
            trie.insert('tesla');
            trie.insert('correlated');

            const hasAnyWord = trie.startsWith('total');
            expect(hasAnyWord).toBe(false);
        });

        it('returns false if a prefix search is done and no words are in Trie', () => {
            const trie = new Trie();
            const hasAnyWord = trie.startsWith('test');
            expect(hasAnyWord).toBe(false);
        });
    });

    describe('update', () => {
        // finish
    });

    describe('delete', () => {
        // finish
    });
});
