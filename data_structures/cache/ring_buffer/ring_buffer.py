class Ring_Buffer:
    def __init__(self, capacity):
        self.capacity = capacity
        self.current = 0
        self.buffer = [None] * capacity

    def append(self, value):
        self.buffer[self.current] = value
        self.current += 1
        if self.current == self.capacity:
            self.current = 0

    def contains_item(self, value):
        contains_item = False
        for item in self.buffer:
            if item == value:
                contains_item = True
        return contains_item

    def get_buffer(self):
        return [i for i in self.buffer if i is not None]
