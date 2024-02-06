module DesignPatterns
    class Singleton
        attr_accessor :name, :age

        private_class_method :new

      def self.instance
        @instance ||= new
      end

        def initialize
          return  if defined?(@initialized)

            @name = nil
            @age = nil
            @initialized = true
        end
    end
end

s1 = DesignPatterns::Singleton.instance
s1.name='Emmanuel'

s2 = DesignPatterns::Singleton.instance
s1.name='Joseph'

p({s1:s1.name, s2:s2.name})