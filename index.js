/**
 * Creator: Tang Xiaoji
 * Time: 2018-02-27
 */

/**
 * @param obj 操作对象
 * @param rule 默认值
 * @returns {{}}
 */
module.exports = function(obj, rule){
  obj = obj || {};
  return Object.keys(rule).reduce(function(ret, key){
    if((obj[key] === undefined) || (obj[key] === null)) {
      ret[key] = rule[key];
      return ret;
    }

    ret[key] = obj[key];
    return ret;
  }, {});
};
