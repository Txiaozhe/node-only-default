/**
 * Creator: Tang Xiaoji
 * Time: 2018-02-27
 */

module.exports = function(obj, rule){
  obj = obj || {};
  return Object.keys(rule).reduce(function(ret, key){
    ret[key] = obj[key] || rule[key];
    return ret;
  }, {});
};
