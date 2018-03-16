import { apiKey,
url,
sayHi,
age,
pizza,
stripeKey as apiKey2
} from './src/config';
// remember pizza used to be named 'food ' but was changed with an 'export as' statement in config.js
//might be more readable if you import each variable in a diff line -though uglier imho.
console.log(apiKey, apiKey2)

sayHi('Jason');

