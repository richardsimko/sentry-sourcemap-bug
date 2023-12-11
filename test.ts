console.log("test");

console.log("test2");

switch (process.env.TEST) {
  case "test":
    throw new Error("test");
  default:
    throw new Error("default");
}
