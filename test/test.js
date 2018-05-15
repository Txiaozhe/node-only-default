/**
 * Creator: Tang Xiaoji
 * Time: 2018-02-27
 */

const only = require('../index');

const obj = {
  name: 0,
  age: '20'
};

console.log(only(obj, {name: '', sex: -1}));