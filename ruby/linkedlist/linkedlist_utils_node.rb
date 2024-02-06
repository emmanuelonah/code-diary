module LinkedListUtils
  class Node
    attr_reader :value, :next

    # @initialize
    # @value can be anything
    # @next can either be `Node` or `nil`
    def initialize(value, next_node = nil)
      @value = value
      @next = next_node
    end
  end
end