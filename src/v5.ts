import { IteratesOn } from "./type-helper";
import { MyModule as V4 } from "./v4";

/**
 * Sample of Version inheritance
 */
export type MyModule = IteratesOn<
  V4,
  "5",
  {
    fizz(): void;
  }
>;

const myModule: MyModule = {
  version: "5",
  fizz: () => console.log("soda pop"),
};

export default myModule;
