/**
 * @deleteIf an array method similar to ruby delete_if
 */
(Array.prototype as Record<string, any>).deleteIf = function deleteIf(
  conditionCB: (v: unknown) => boolean,
) {
  this.forEach((v: unknown, i: number) => {
    if (conditionCB(v)) this.splice(i, 1);
  });

  return this;
};

const a = [1, 2, 3, 4, 5, 4, 5, 10];

a.deleteIf((v: number) => v < 4);

console.log(a);
