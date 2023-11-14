/**
 * @SingletonEs6 The Singleton Pattern is a design pattern
 * that restricts the instantiation of a class to a single
 * instance and provides a global point of access to that
 * instance. In other words, it ensures that a class has
 * only one instance and provides a way to access that
 * instance from any point in the application.
 */
class SingletonEs6 {
  private _name?: string;
  private static instance?: SingletonEs6;

  constructor() {
    if (SingletonEs6.instance) return SingletonEs6.instance;
    SingletonEs6.instance = this;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get name() {
    return this._name!;
  }
}

const s1 = new SingletonEs6();
s1.name = 'Emmanuel Onah';

const s2 = new SingletonEs6();
s2.name = 'Jeremiah Joseph';

console.log({ s1: s1.name, s2: s2.name });
