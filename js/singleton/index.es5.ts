type ConstructorInstantiationError = {
  name: string;
  message: string;
};
const ConstructorInstantiationError = function ConstructorInstantiationError(
  this: ConstructorInstantiationError,
  message: string,
) {
  //Extension
  Object.assign(ConstructorInstantiationError.prototype, Error.prototype);

  this.name = 'ConstructorInstantiationError';
  this.message = message;
} as any as { new (message: string): ConstructorInstantiationError };

type SingletonEs5 = {
  name?: string;
};

const SingletonEs5 = function SingletonEs5(this: SingletonEs5): void {
  (() => {
    // if we don't want to force instantiation, another solution
    // is if (!new.target) return new SingletonEs5();
    if (!new.target)
      throw new ConstructorInstantiationError(
        'SingletonEs5 can not be invoked without the `new` keyword',
      );
  })();

  if ((SingletonEs5 as any).instance) return (SingletonEs5 as any).instance;
  (SingletonEs5 as any).instance = this;

  this.name;
} as any as { new (): SingletonEs5 };

const sin1 = new SingletonEs5();
sin1.name = 'Emmanuel Onah';

const sin2 = new SingletonEs5();
sin2.name = 'Jeremiah Joseph';

console.log({ sing1: sin1.name, sin2: sin2.name });
