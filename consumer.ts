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
    // ideally default cases would be barred by a lint rule
    // this enforces devs to make sure each scenario is handled
  }
}

switch (a.version) {
  case "1":
  case "2":
  case "3":
    throw new Error("TOO OLD. Please Update");
    break;
  case "4": {
    a.foo(1);
    break;
  }
  case "5": {
    a.fizz();
  }
}
