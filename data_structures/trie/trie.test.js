const Trie = require('./trie.js');

describe('Trie', () => {
    let trie;

    beforeEach(() => {
        trie = new Trie();
    });

    describe('instantiates', () => {
        it('instantiates a new Trie', () => {
            expect(trie instanceof Trie).toBe(true);
        });
    });

    describe('insert', () => {
        it('adds a new word to the Trie class', () => {
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
            trie.insert('nate');
            trie.insert('nate');

            expect(
                trie.root.children.n.children.a.children.t.children.e.wordTotals
            ).toBe(2);
        });

        it('assigns a word total + 1 to the last character node in a word', () => {
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
            trie.insert('supercalifragilisticexpialidocious');

            const hasWord = trie.search('supercalifragilisticexpialidocious');
            expect(hasWord).toBe(true);
        });

        it('returns false if the only difference in stored word is case sensitivity', () => {
            trie.insert('Nathan');

            const hasWord = trie.search('nathan');
            expect(hasWord).toBe(false);
        });
    });

    describe('searchWithWildcard', () => {
        it('returns true if a word exists when searched for with wildcards', () => {
            trie.insert('nathan');
            trie.insert('nathaniel');
            trie.insert('nate');

            const hasWord = trie.searchWithWildcard('n..ha...l');
            expect(hasWord).toBe(true);
        });

        it('returns false if a word does not exist when searched with wildcards', () => {
            trie.insert('nathan');
            trie.insert('nathaniel');
            trie.insert('nate');

            const hasWord = trie.searchWithWildcard('n.....n');
            expect(hasWord).toBe(false);
        });
    });

    describe('startsWith', () => {
        it('returns true if any word with a prefix exists', () => {
            trie.insert('testing');
            trie.insert('testify');

            let hasAnyWord = trie.startsWith('test');
            expect(hasAnyWord).toBe(true);

            hasAnyWord = trie.startsWith('tent');
            expect(hasAnyWord).toBe(false);
        });

        it('returns false if a long prefix does not have any words that exist in the Trie', () => {
            trie.insert('test');
            trie.insert('testing');
            trie.insert('tesla');
            trie.insert('correlated');

            const hasAnyWord = trie.startsWith('total');
            expect(hasAnyWord).toBe(false);
        });

        it('returns false if a prefix search is done and no words are in Trie', () => {
            const hasAnyWord = trie.startsWith('test');
            expect(hasAnyWord).toBe(false);
        });
    });

    describe('update', () => {
        it('takes in old and new words and removes old + adds new', () => {
            trie.insert('testing');
            trie.update('testing', 'testify');

            let hasWord = trie.search('testing');
            expect(hasWord).toBe(false);

            hasWord = trie.search('testify');
            expect(hasWord).toBe(true);
        });

        it('returns and does not modify Trie if old word is not found', () => {
            trie.insert('test');

            trie.update('telling', 'testing');

            let hasWord = trie.search('telling');
            expect(hasWord).toBe(false);

            hasWord = trie.search('testing');
            expect(hasWord).toBe(false);

            hasWord = trie.search('test');
            expect(hasWord).toBe(true);
        });
    });

    describe('delete', () => {
        it('deletes nodes no longer needed while keeping needed ones', () => {
            trie.insert('test');
            trie.insert('testing');
            trie.insert('tesla');

            let hasWord = trie.search('tesla');
            expect(hasWord).toBe(true);

            trie.delete('tesla');

            hasWord = trie.search('tesla');
            expect(hasWord).toBe(false);

            hasWord = trie.search('test');
            expect(hasWord).toBe(true);

            hasWord = trie.search('testing');
            expect(hasWord).toBe(true);
        });

        it('deletes nodes no longer needed up-to-and-including root', () => {
            trie.insert('remembrance');

            const hasWord = trie.search('remembrance');
            expect(hasWord).toBe(true);

            trie.delete('remembrance');
            expect(trie.root.children).toEqual({});
        });

        it('deletes node from children at root', () => {
            trie.insert('testing');
            trie.insert('nathan');
            trie.delete('testing');

            const hasWord = trie.search('nathan');
            expect(hasWord).toBe(true);
            expect(Object.keys(trie.root.children).length).toBe(1);
            expect(trie.root.children['n']).toBeTruthy();
        });

        it('stops deleting nodes if another word total encountered', () => {
            trie.insert('Test');
            trie.insert('Testing');
            trie.delete('Testing');

            let hasWord = trie.search('Test');
            expect(hasWord).toBe(true);

            hasWord = trie.search('Testing');
            expect(hasWord).toBe(false);
        });
    });
});
