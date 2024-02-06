interface ArrayType<T> extends Array<T> {
  count(
    cb: (iterated: T, index?: number, elements?: Array<T>) => boolean,
  ): number;
}

(Array.prototype as ArrayType<any> as unknown as any).count = function count<
  T = any,
>(cb: (iterated: T, index: number, elements: Array<T>) => boolean) {
  let counter = 0;

  for (let i = 0, size = this.length; i < size; i++) {
    if (cb(this[i], i, this)) counter++;
  }

  return counter;
};

const languages = ['Java', 'JavaScript', 'Kotlin', 'Ruby'];
const jIncludedLanguage = (languages as ArrayType<string>).count(
  (lan: string) => lan.includes('J'),
);

console.log('GBE', jIncludedLanguage);
