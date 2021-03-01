/**
 * Adds a new method from the old interface
 */
export type MyModule = {
  version: "2";
  foo(): void;
  bar(): string;
};

const myModule: MyModule = {
  version: "2",
  foo: () => undefined,
  bar: () => "hello",
};

export default myModule;
