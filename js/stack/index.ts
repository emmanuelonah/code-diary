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
 * @Stack LIFO
 * @push adds to the top of the data-structure
 * @pop removes from the top of the data-structure
 * @peek returns the top data BUT DOESN'T REMOVE IT LIKE `pop`
 */
class Stack<V = unknown> {
  private head: NodeType<V> | null;
  public size: number = 0;

  constructor(value: V) {
    this.head = new $Node(value);
    this.size++;
  }

  public get data(): NodeType<V> {
    return this.head!;
  }

  public push(v: V) {
    this.head = new $Node(v, this.head);
    this.size++;
  }

  public pop() {
    if (this.head) {
      this.head = this.head.next;
      this.size--;
    }
  }

  public peek() {
    return this.head?.value;
  }
}

const s = new Stack(10);
//push
s.push(20);
console.log('PUSH:: ', s);

//pop
s.pop();
console.log('POP:: ', s);

//peek
console.log('PEEK::', s.peek());
