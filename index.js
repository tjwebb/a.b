var _ = require('lodash');

/**
 * @param object  The object to query
 * @param dotpath The dot path as a string e.g. 'a.b.c'
 */
exports.dot = function (_object, _dotpath) {
  //var dotpath = (_.isArray(_dotpath) ? _dotpath.join('.') : _dotpath) || '';
  var object = _object || { };
  var dotpath = (_.isString(_dotpath) && _dotpath) || '';

  if (_.isArray(_dotpath)) {
    dotpath = _dotpath.join('.');
  }

  return dotpath.split('.').reduce(_.result, object);
};
