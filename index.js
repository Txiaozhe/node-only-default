/**
 * Creator: Tang Xiaoji
 * Time: 2018-02-27
 */

module.exports = function(obj, rule){
  obj = obj || {};
  keys = Object.keys(rule);
  return keys.reduce(function(ret, key){
    ret[key] = obj[key] || rule[key];
    return ret;
  }, {});
};
