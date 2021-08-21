const toMatch1 = "re, green, red, green, gren, gr, blue, yellow";
const patt1 = /(red|green)/g;
const regex1 = toMatch1.match(patt1);
console.log(regex1);
