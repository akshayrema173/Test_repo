// npm - defualt avialble with node

// npm --version

// npm i <packageName>  -- local dependency

// npm install -g <packageName> --- global dependency

// package.json -- manifest file { stores important information aboutproject/package}
// manual approach - create package.json in the root, create properties etc)
// Alternative approach
// npm init ( step by step approach .... > press Enter to skip)
// npm init-y ( everything by default )



//Comments
/**
 *  Example of the lodash utility llibrary to check
 * out how to use methods from installed packages.
 */

const _ = require('lodash');

const items = [1,[2,[3],[4]]];
const newItems = _.flattenDeep(items);

console.log(newItems);