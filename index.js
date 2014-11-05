var _ = require('lodash');

/**
 * @param object  The object to query
 * @param dotpath The dot path as a string e.g. 'a.b.c'
 */
exports.dot = function (_object, _dotpath) {
  var dotpath = (_.isString(_dotpath) && !_.isEmpty(_dotpath)) ? _dotpath : '';
  var object = _object || { };

  return dotpath.split('.').reduce(_.result, object);
};
