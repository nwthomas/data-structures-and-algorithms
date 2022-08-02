from trie import Trie
import unittest

class TestTrie(unittest.TestCase):
    def test_instantiates_new_trie(self):
        """Instantiates a new version of the Trie class"""
        trie = Trie()
        self.assertIsInstance(trie, Trie)
        self.assertIsNone(trie.root.value)
        self.assertEqual(trie.root.children, {})

    def test_adds_word_to_trie(self):
        """Adds a new word to the Trie class"""
        trie = Trie()
        trie.insert("testing")
        trie.insert("test")

        has_word = trie.search("test")
        self.assertTrue(has_word)

        has_word = trie.search("nathan")
        self.assertFalse(has_word)

        has_word = trie.search("testing")
        self.assertTrue(has_word)

        trie.insert("nathan")
        has_word = trie.search("nathan")
        self.assertTrue(has_word)

    def test_adds_multiple_of_same_word(self):
        """Can add multiple of the same word and increment word totals value"""
        trie = Trie()
        trie.insert("nate")
        trie.insert("nate")

        self.assertEqual(trie.root.children["n"].children["a"].children["t"].children["e"].word_totals, 2)

    def test_can_store_large_word(self):
        """Takes in a large word and stores it correctly"""
        trie = Trie()
        trie.insert("supercalifragilisticexpialidocious")

        has_word = trie.search("supercalifragilisticexpialidocious")
        self.assertTrue(has_word)

    def test_respects_case_sensitivity(self):
        """Returns False if the only difference is case sensitivity"""
        trie = Trie()
        trie.insert("Nathan")

        has_word = trie.search("nathan")
        self.assertFalse(has_word)

    def test_assigns_word_total_for_node_final_word_char(self):
        """Assigns a word_total + 1 to the last character node in a word"""
        trie = Trie()
        trie.insert("add")

        self.assertEqual(trie.root.children["a"].word_totals, 0)
        self.assertEqual(trie.root.children["a"].children["d"].word_totals, 0)
        self.assertEqual(trie.root.children["a"].children["d"].children["d"].word_totals, 1)

    def test_returns_true_if_any_word_with_prefix_exists(self):
        """Returns True if any word with a prefix exists"""
        trie = Trie()
        trie.insert("testing")
        trie.insert("testify")

        has_any_word = trie.startsWith("test")
        self.assertTrue(has_any_word)

        has_any_word = trie.startsWith("tent")
        self.assertFalse(has_any_word)

    def test_returns_false_if_no_word_with_prefix_exists(self):
        """Returns False if a long prefix does not have any words that exist in the Trie"""
        trie = Trie()
        trie.insert("test")
        trie.insert("testing")
        trie.insert("tesla")
        trie.insert("correlated")

        has_any_word = trie.startsWith("total")
        self.assertFalse(has_any_word)

    def test_returns_false_for_prefix_search_with_no_words_added(self):
        """Returns False if a prefix search is done and no words are in Trie"""
        trie = Trie()
        
        has_any_words = trie.startsWith("test")
        self.assertFalse(has_any_words)

    def test_deletes_nodes_while_leaving_needed_ones(self):
        """Deletes nodes no longer needed while keeping needed ones"""
        trie = Trie()
        trie.insert("test")
        trie.insert("testing")
        trie.insert("tesla")

        has_word = trie.search("tesla")
        self.assertTrue(has_word)

        trie.delete("tesla")

        has_word = trie.search("tesla")
        self.assertFalse(has_word)

        has_word = trie.search("test")
        self.assertTrue(has_word)

        has_word = trie.search("testing")
        self.assertTrue(has_word)

    def test_deletes_up_to_root_but_not_including_root(self):
        """Deletes nodes no longer needed up to and including root"""
        trie = Trie()
        trie.insert("remembrance")

        has_word = trie.search("remembrance")
        self.assertTrue(has_word)

        trie.delete("remembrance")

        self.assertEqual(trie.root.children, {})

    def test_deletes_node_from_children_at_root(self):
        """Deletes only necessary node in children at root"""
        trie = Trie()
        trie.insert("testing")
        trie.insert("nathan")
        trie.delete("testing")

        has_word = trie.search("nathan")
        self.assertTrue(has_word)
        self.assertEqual(len(dict.keys(trie.root.children)), 1)
        self.assertTrue("n" in trie.root.children)

    def test_stops_deleting_nodes_if_another_word_total_encountered(self):
        """Deletes nodes up until another word count is encountered"""
        trie = Trie()
        trie.insert("Test")
        trie.insert("Testing")
        trie.delete("Testing")

        has_word = trie.search("Test")
        self.assertTrue(has_word)

        has_word = trie.search("Testing")
        self.assertFalse(has_word)

    def test_removes_old_word_and_adds_new_one(self):
        """Takes in old and new words and removes old + adds new"""
        trie = Trie()
        trie.insert("testing")
        trie.update("testing", "testify")
        
        has_word = trie.search("testing")
        self.assertFalse(has_word)

        has_word = trie.search("testify")
        self.assertTrue(has_word)

    def test_does_not_modify_trie_if_old_word_not_found(self):
        """Returns and does not modify Trie if old word is not found"""
        trie = Trie()
        trie.insert("test")

        trie.update("telling", "testing")

        has_word = trie.search("telling")
        self.assertFalse(has_word)

        has_word = trie.search("testing")
        self.assertFalse(has_word)

        has_word = trie.search("test")
        self.assertTrue(has_word)

if __name__ == "__main__":
    unittest.main()