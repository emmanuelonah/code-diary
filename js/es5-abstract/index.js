const USER_ABSTRACT_ARG_RUNTIME_CHECK = {
  find(attribute) {
    if (typeof attribute != 'string')
      throw new Error(
        `Expected ${JSON.stringify(
          attribute,
        )} to be a string but its a ${typeof attribute}`,
      );
  },
};

function throwAbstractError({ name, message, callee }) {
  const error = new Error();
  error.name = name ?? 'AbstractError';
  error.message = message ?? 'abstract error occurred, check your code.';
  Error.captureStackTrace(error, callee);

  throw error;
}

/**
 * @implement is used to implement inheritance between two classes in JavaScript.
 * @param superClass - The superClass parameter is the class that you want to inherit from. It is the
 * class that will serve as the base or parent class for the subClass.
 * @param subClass - The subClass parameter is the class that you want to implement. It will inherit
 * the properties and methods from the superClass.
 */
function implement(superClass, subClass) {
  subClass.prototype = Object.assign(superClass.prototype, subClass.prototype);
}

function UserAbstract() {
  //prevent instantiation
  throwAbstractError({
    name: 'UserAbstractError',
    message:
      'UserAbstractError is an abstract constructor and cannot be instantiated.',
    callee: UserAbstract,
  });
}

UserAbstract.prototype.find = function find(_attribute) {
  throwAbstractError({
    name: 'AbstractFindError',
    message: `AbstractFindError is an abstract method and must be implemented by ${arguments?.callee}`,
    callee: arguments?.callee,
  });
};

//***********************Test Case 1*********************** */
//you can not instantiate an abstract constructor
//so, try uncommenting the line below and see what happens.
//const u = new UserAbstract();
//***********************End of Test Case 1*********************** */

//***********************Test Case 2*********************** */
function Emmanuel() {}
implement(UserAbstract, Emmanuel);

const emmanuel = new Emmanuel();
//Emmanuel constructor didn't implement the abstract find and
//that should cause an error. So, try uncommenting the line below and see what happens.
//emmanuel.find('1');
//***********************End of Test Case 2*********************** */

//***********************Test Case 2*********************** */
function Onah() {
  this.name = 'Emmanuel Onah';
}
Onah.prototype.find = function find(attribute) {
  USER_ABSTRACT_ARG_RUNTIME_CHECK.find(attribute);
  return this[attribute];
};
implement(UserAbstract, Onah);

const onah = new Onah();
console.log(`ONAH find::: ${onah.find('name')}`);
//***********************End of Test Case 3*********************** */
