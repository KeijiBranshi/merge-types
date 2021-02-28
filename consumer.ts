import a from "./dist";

if (a.version === "1") {
  a.foo();
  a.bar();
}

if (a.version === "2") {
  a.bar();
}

if (a.version === "3") {
  a.foo();
}