/**
 * @toArray converts an object to an array of [key,value]
 */
Object.prototype.toArray = function toA() {
  return Object.entries(this).reduce((acc, [key, value]) => {
    acc.push([key, value]);

    return acc;
  }, [] as Array<Array<[string, any]>>);
};

const obj = {
  name: 'Emmanue Onah',
  age: 23,
};

console.log(obj.toArray());
