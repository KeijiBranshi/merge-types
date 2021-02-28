import a from "./a";
import b from "./b";
import c from "./c";

type MergedType = typeof a | typeof b | typeof c;

const merged: MergedType = a;

export default merged;