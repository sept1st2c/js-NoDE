const ulr = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//hOST (root domain)
console.log(myUrl.hostname);

//hostname (does not get port)
console.log(myUrl.hostname);

//path name
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

//param object
console.log(myUrl.searchParams);

//add parameter
myUrl.searchParams.append("avb", "lolmao");
console.log(myUrl.searchParams);

//loop through
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
