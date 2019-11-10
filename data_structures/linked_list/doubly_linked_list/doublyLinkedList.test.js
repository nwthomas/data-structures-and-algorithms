const { Node, DoublyLinkedList } = require('./doublyLinkedList.js');

describe('DoublyLinkedList', () => {
  describe('Node class', () => {
    describe('should instantiate a new Node class object', () => {
      it('tests that a Node has been instantiated', () => {
        const node = new Node(3);
        expect(node instanceof Node).toBeTruthy();
      });
    });

    describe('should add a new Node before it', () => {
      it('tests that a Node can add another Node before it', () => {
        const currentNode = new Node(1);
        currentNode.insertBefore(3);
        expect(currentNode.prev.value).toBe(3);
      });
    });

    describe('should add a new Node after it', () => {
      it('tests that a Node can add another Node after it', () => {
        const currentNode = new Node(1);
        currentNode.insertAfter(10000);
        expect(currentNode.next.value).toBe(10000);
      });
    });

    describe('should delete a middle Node when the method is called', () => {
      it('tests that a Node can delete itself', () => {
        const currentNode = new Node('Nathan');
        currentNode.insertAfter('Billy');
        currentNode.insertBefore('Bobby');
        const previousNode = currentNode.prev;
        currentNode.delete();
        expect(previousNode.next.value).toBe('Billy');
      });
    });
  });

  describe('DoublyLinkedList class', () => {
    describe('should instantiate a new DoublyLinkedList class', () => {
      it('tests that a DoublyLinkedList has been instantiated', () => {
        const dll = new DoublyLinkedList();
        expect(dll instanceof DoublyLinkedList).toBeTruthy();
      });
    });

    describe('should return the correct length of the Doubly Linked List', () => {
      it('tests that the correct length of the Doubly Linked List is returned', () => {
        const dll = new DoublyLinkedList();
        dll.addToHead(1);
        dll.addToHead(2);
        dll.addToHead(47);
        dll.addToHead(4);
        dll.addToHead(5);
        const len = dll.getLength();
        expect(len).toBe(5);
      });
    });

    describe('should add a new Node to the head of the list', () => {
      it('tests that a Node has been added to the head', () => {
        const dll = new DoublyLinkedList();
        dll.addToHead(1);
        expect(dll.head.value).toBe(1);
        expect(dll.tail.value).toBe(1);
        dll.addToHead(567);
        expect(dll.head.value).toBe(567);
      });
    });

    describe('should add a new Node to the tail of the list', () => {
      it('tests that a Node has been added to the tail', () => {
        const dll = new DoublyLinkedList();
        dll.addToTail(1);
        expect(dll.tail.value).toBe(1);
        expect(dll.head.value).toBe(1);
        dll.addToTail(2);
        expect(dll.tail.value).toBe(2);
      });
    });

    describe('should move a Node to the head of the list', () => {
      it('tests if a Node has been moved to the head of the list', () => {
        const dll = new DoublyLinkedList();
        dll.addToHead(1);
        const oneNode = dll.head;
        dll.addToHead(2);
        dll.addToHead(3);
        dll.addToHead(4);
        dll.addToHead(5);
        dll.moveToFront(oneNode);
        expect(dll.head.value).toBe(1);
      });
    });

    describe('should remove a Node from the head of the list', () => {
      it('tests if a Node has been removed from the head of the list', () => {
        const dll = new DoublyLinkedList();
        dll.addToHead(1);
        dll.addToHead(2);
        dll.addToHead(3);
        dll.addToHead(4);
        dll.addToHead(5);
        dll.removeFromHead();
        expect(dll.head.value).toBe(4);
      });
    });

    describe('should move a Node to the tail of the list', () => {
      it('tests if a Node has been moved to the tail of the list', () => {
        const dll = new DoublyLinkedList();
        dll.addToHead(1);
        dll.addToHead(2);
        dll.addToHead(3);
        dll.addToHead(4);
        dll.addToHead(5);
        dll.moveToEnd(dll.head);
        expect(dll.tail.value).toBe(5);
      });
    });

    describe('should remove a Node from the tail of the list', () => {
      it('tests if a Node has been removed from the tail of the list', () => {
        const dll = new DoublyLinkedList();
        dll.addToHead(1);
        dll.addToHead(2);
        dll.addToHead(3);
        dll.addToHead(4);
        dll.addToHead(5);
        dll.removeFromTail();
        expect(dll.tail.value).toBe(2);
      });
    });

    describe('should successfully delete a Node from the Doubly Linked List', () => {
      it('tests that a Node has been successfully deleted from the Doubly Linked List', () => {
        const dll = new DoublyLinkedList();
        dll.addToHead(1);
        dll.addToHead(2);
        dll.addToHead(3);
        const threeHead = dll.head;
        dll.addToHead(4);
        dll.addToHead(5);
        dll.delete(threeHead);
        expect(dll.getLength()).toBe(4);
      });
    });

    describe('should return the highest value currently stored in the list', () => {
      it('tests if the highest value in the list is returned successfully', () => {
        const dll = new DoublyLinkedList();
        dll.addToHead(1);
        dll.addToHead(2);
        dll.addToHead(47);
        dll.addToHead(4);
        dll.addToHead(5);
        const val = dll.getMax();
        expect(val).toBe(47);
      });
    });
  });
});
