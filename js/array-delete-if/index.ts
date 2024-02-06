/**
 * @deleteIf an Array prototype method that deletes an iterated value if the condition is true
 */
interface AugmentedArrayPrototype extends Array<unknown> {
  deleteIf(cb: (v: any) => boolean): Array<unknown>;
}

(Array.prototype as AugmentedArrayPrototype).deleteIf = function deleteIf(
  conditionCB: (v: unknown) => boolean,
) {
  if ((Array.prototype as AugmentedArrayPrototype).deleteIf) return;

  this.forEach((v: unknown, i: number) => {
    if (conditionCB(v)) this.splice(i, 1);
  });

  return this;
};

const a = [1, 2, 3, 4, 5, 4, 5, 10];

(a as AugmentedArrayPrototype).deleteIf((v: number) => v < 4);

console.log(a);
