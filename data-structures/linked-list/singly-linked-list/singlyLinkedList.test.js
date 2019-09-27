const { Node, SinglyLinkedList } = require('./singlyLinkedList.js');

describe('SinglyLinkedList', () => {
  describe('Node class', () => {
    describe('should instantiate a Node', () => {
      it('tests if a Node class object has been instantiated', () => {
        const node = new Node('test');
        expect(node instanceof Node).toBeTruthy();
      });
    });

    describe('should insert a new Node after it', () => {
      it('tests if a new Node has been inserted after the first Node', () => {
        const node = new Node('test1');
        node.insertAfter('test2');
        expect(node.next.value).toBe('test2');
      });
    });

    describe('should delete a reference to the next Node', () => {
      it('tests if a referenec to a next Node has been removed', () => {
        const node = new Node('testing');
        node.insertAfter('temp value');
        expect(node.next.value).toBe('temp value');
        node.delete();
        expect(node.next).toBeNull();
      });
    });
  });

  describe('SinglyLinkedList class', () => {
    describe('should instantiate a SinglyLinkedList', () => {
      it('tests if a SinglyLinkedList class object has been instantiated', () => {
        const sll = new SinglyLinkedList();
        expect(sll instanceof SinglyLinkedList).toBeTruthy();
      });
    });

    describe('should return the correct length of the list', () => {
      it('tests that the length of the list is returned', () => {
        const sll = new SinglyLinkedList();
        sll.addToHead(1);
        sll.addToHead(2);
        sll.addToHead(3);
        expect(sll.head.value).toBe(3);
        expect(sll.getLength()).toBe(3);
        sll.removeFromHead(1);
        expect(sll.getLength()).toBe(2);
      });
    });

    describe('should add a value to the head of the list', () => {
      it('tests that a value has been added to the head of the list', () => {
        const sll = new SinglyLinkedList();
        sll.addToHead(1);
        sll.addToHead(2);
        sll.addToHead(3);
        expect(sll.head.value).toBe(3);
      });
    });

    describe('should remove a value from the head of the list', () => {
      it('tests that a value is removed from the head of the list', () => {
        const sll = new SinglyLinkedList();
        sll.addToHead(1);
        sll.addToHead(2);
        sll.addToHead(300);
        sll.addToHead(9);
        sll.removeFromHead();
        expect(sll.head.value).toBe(300);
        expect(sll.getLength()).toBe(3);
      });
    });

    describe('should add a value to the tail of the list', () => {
      it('tests that a value is added to the tail of the list', () => {
        const sll = new SinglyLinkedList();
        sll.addToTail(300);
        sll.addToTail(50);
        sll.addToTail('testing');
        sll.addToTail(40);
        let currentNode = sll.head;
        while (currentNode.next) {
          currentNode = currentNode.next;
        }
        expect(currentNode.value).toBe(40);
        expect(sll.getLength()).toBe(4);
      });
    });

    describe('should remove a value from the tail of the list', () => {
      it('tests that a value has been removed from the tail of the list', () => {
        const getEnd = list => {
          let currentNode = list.head;
          while (currentNode.next) {
            currentNode = currentNode.next;
          }
          return currentNode.value;
        };
        const sll = new SinglyLinkedList();
        sll.addToTail(300);
        sll.addToTail(50);
        sll.addToTail('testing');
        sll.addToTail(40);
        expect(getEnd(sll)).toBe(40);
        sll.removeFromTail();
        expect(getEnd(sll)).toBe('testing');
        expect(sll.getLength()).toBe(3);
      });
    });

    describe('should move a Node to the front of the list', () => {
      it('tests that a Node has been moved to the front of the list', () => {
        const sll = new SinglyLinkedList();
        sll.addToHead(300);
        sll.addToHead(50);
        const node = sll.head;
        sll.addToHead('testing');
        sll.addToHead(40);
        sll.moveToFront(node);
        expect(sll.head.value).toBe(50);
        expect(sll.getLength()).toBe(4);
      });
    });

    describe('should move a Node to the end of the list', () => {
      it('tests that a Node has been moved to the end of the list', () => {
        const sll = new SinglyLinkedList();
        sll.addToHead(300);
        sll.addToHead(50);
        const node = sll.head;
        sll.addToHead('testing');
        sll.addToHead(40);
        sll.moveToEnd(node);
        let currentNode = sll.head;
        while (currentNode.next) {
          currentNode = currentNode.next;
        }
        expect(currentNode.value).toBe(50);
        expect(sll.getLength()).toBe(4);
      });
    });

    describe('should delete a Node from the list', () => {
      it('tests that a node has been deleted from the list', () => {
        const findNode = (list, value) => {
          let currentNode = list.head;
          while (currentNode.next) {
            if (currentNode.value === value) {
              return value;
            } else {
              currentNode = currentNode.next;
            }
          }
          return null;
        };
        const sll = new SinglyLinkedList();
        sll.addToHead(13244);
        sll.addToHead('Nathan');
        const node = sll.head;
        sll.addToHead('Thomas');
        sll.addToHead(5);
        sll.delete(node);
        expect(findNode(sll, node)).toBeNull();
        expect(sll.getLength()).toBe(3);
      });

      it('should handle a list with one Node and delete it', () => {
        const sll = new SinglyLinkedList();
        sll.addToHead(1);
        sll.delete(sll.head);
        expect(sll.getLength()).toBe(0);
      });
    });

    describe('should return the maximum value inside a list', () => {
      it('tests that a maximum value is returned from the list', () => {
        const sll = new SinglyLinkedList();
        sll.addToHead(300);
        sll.addToHead(50);
        sll.addToHead(516723);
        sll.addToHead(6);
        sll.addToHead(44);
        expect(sll.getMax()).toBe(516723);
      });
    });
  });
});
