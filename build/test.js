!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8c07893c-8ac0-5e5d-b2b7-24994aaf4b4a")}catch(e){}}()
console.log("test");
console.log("test2");
switch (process.env.TEST) {
    case "test":
        throw new Error("test");
    default:
        throw new Error("default");
}
//# debugId=8c07893c-8ac0-5e5d-b2b7-24994aaf4b4a
//# sourceMappingURL=test.js.map
