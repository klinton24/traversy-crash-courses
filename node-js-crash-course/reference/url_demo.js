const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root domain)
console.log(myUrl.host);

//Host Name - won't include the port
console.log(myUrl.hostname);

//Pathname
console.log(myUrl.pathname);

//serialized query
console.log(myUrl.search);

//Params Object
console.log(myUrl.searchParams);

//Append Params
myUrl.searchParams.append('abc', '123');

//Loop Through
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));