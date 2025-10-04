'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  // write your code here
  const res = {};
  const lines = sourceString.split('\n');

  let currentProperty = null;

  for (let line of lines) {
    line = line.trim();
    if (line === '') continue;

    if (line.includes(':')) {
      const [property, value] = line.split(':');
      currentProperty = property.trim();
      res[currentProperty] = value.trim();
    } else {
      res[currentProperty] += ` ${line.trim()}`;
    }
  }

  return res;

}

module.exports = convertToObject;
