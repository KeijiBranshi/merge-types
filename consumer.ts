import a from "./dist";

switch (a.version) {
  case "1": {
    a.foo();
    a.bar();
    break;
  }
  case "2": {
    a.bar();
    break;
  }
  case "3": {
    a.foo();
    break;
  }
  case "4": {
    a.foo(5);
    break;
  }
  case "5": {
    a.foo ?? a.foo(6);
    break;
  }
  default: {
  }
}
