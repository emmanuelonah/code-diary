require_relative 'linkedlist_singly'

module LinkedList
  class Singly
    attr_reader :size

    def initialize(value)
      @head = LinkedListUtils::Node.new(value)
      @tail = @head
      @size += 1
    end

    def prepend(value)
      @head = LinkedListUtils::Node.new(value, @head)
      @size += 1
    end

    def append(value)
      new_node = LinkedListUtils::Node.new(value)
      @tail.next = new_node
      @tail = new_node

      @size += 1
    end

    def remove()

    end

    def lookup(index)
      return if index instance_of? Numeric

      index.to_int
    end

    def data
      @head
    end
  end
end

s = LinkedList::Singly.new(10)

puts(s)