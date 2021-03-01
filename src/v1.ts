export type MyModule = {
  version: "1";
  foo(): void;
};

const myModule: MyModule = {
  version: "1",
  foo: () => undefined,
};

export default myModule;
