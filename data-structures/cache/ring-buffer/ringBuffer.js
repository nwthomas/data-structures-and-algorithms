class RingBuffer {
  constructor(capacity) {
    if (typeof capacity !== 'number') return {};
    this.capacity = capacity;
    this.current = 0;
    this.buffer = [...Array(capacity)].fill(null);
  }

  append(value) {
    this.buffer[this.current] = value;
    this.current++;
    if (this.current === this.capacity) this.current = 0;
  }

  findItem(value) {
    for (let i = 0; i < this.buffer.length; i++) {
      if (this.buffer[i] && this.buffer[i] == value) return true;
    }
    return false;
  }

  getBuffer() {
    const final = [];
    for (let i = 0; i < this.buffer.length; i++) {
      if (this.buffer[i]) final.push(this.buffer[i]);
    }
    return final;
  }
}

module.exports = RingBuffer;
