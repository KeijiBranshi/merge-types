import v1 from "./v1";
import v2 from "./v2";
import v3 from "./v3";
import v4 from "./v4";
import v5 from "./v5";

type MergedType = typeof v1 | typeof v2 | typeof v3 | typeof v4 | typeof v5;

const merged: MergedType = v1;

export default merged;
