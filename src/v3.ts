/**
 * Changes signature of a method
 */
export type MyModule = {
  version: "3";
  foo(a: number): void;
  bar(): string;
};

const myModule: MyModule = {
  version: "3",
  foo: (a: number) => console.log(a),
  bar: () => "hello",
};

export default myModule;
