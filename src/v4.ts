import { IteratesOn } from "./type-helper";
import { MyModule as V3 } from "./v3";

/**
 * Sample of Version inheritance
 */
export type MyModule = IteratesOn<
  V3,
  "4",
  {
    foo(a: number): void;
    bar(): string;
  }
>;

const myModule: MyModule = {
  version: "4",
  foo: (a: number) => console.log(a),
  bar: () => "hello",
};

export default myModule;
