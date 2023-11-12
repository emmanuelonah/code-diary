//Stack
type NodeType<ValueType> = {
  value: ValueType;
  next: NodeType<ValueType> | null;
};
class $Node<V> {
  value: V;
  next: NodeType<V> | null;

  constructor(value: V, next: NodeType<V> | null = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * @Queue FIFO
 * @enqueue adds to the back of the data-structure
 * @dequeue removes from the back of the data-structure
 * @peek returns the to-pest data BUT DOESN'T REMOVE IT LIKE `dequeue`
 */
class Queue<V = unknown> {
  private head: NodeType<V>;
  public size: number = 0;

  constructor(value: V) {
    this.head = new $Node<V>(value);
    this.size++;
  }

  public get data() {
    return this.head;
  }

  public enqueue(value: V) {
    this.head.next = new $Node<V>(value);
    this.size++;
  }

  public dequeue() {
    if (!this.head) return;

    if (this.head.next) this.head.next = this.head.next?.next || null;
    else this.head = null!;
    this.size--;
  }

  public peek() {
    return this.head?.value;
  }
}

const q = new Queue(10);

//enqueue
q.enqueue(20);
console.log('ENQUEUE:: ', q.data);

//dequeue
q.dequeue();
console.log('DEQUEUE:: ', q.data);

//peek
console.log('PEEK:: ', q.peek());
