import MyImportedClass, { hello } from "./module-export.js";
import * as allImports from "./module-export.js";

console.log(hello());
const myClass = new MyImportedClass();
console.log(myClass.goodbye());

console.log(allImports.hello());
const myClass2 = new allImports.default();
console.log(myClass2.goodbye());
