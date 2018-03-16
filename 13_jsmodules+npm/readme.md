Config.js is a great place to put files like all RESTful endpoints.Variables in modules are not global they are scoped to the function , block or module.

There are no global variables.

To import in one end you must export on the other end.Default exports are for "the main thing the module does if there is one" a named export is for methods and variables.

To make something export as default you use the syntax "export default ******;" where the stars equal the name of what you are exporting.

To import something you just type import thing from './folder/filename' i.e import it from the path in a string.

every module can only have one default export but can have multiple named exports

syntax looks like export const apiKey = 'cheese'

if the export is named the import has to use the same name.

if you are importing a named export you must use curly braces {}.

checkout exports on MDN

you can also export variables using the same syntax as importing i.e

const age = 50
const food = pizza

export {age , food}

you can also import a variable as another name so try import {food as pizza}

or export using the same methodology and syntax.

of course when you export as something , then you use the same name when you import it.