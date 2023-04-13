const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  const temp = [];
    if (Array.isArray(arr)) {
        if (arr.length === 0) {
        } else {
            arr.forEach(elem => {
                if (elem !== undefined && typeof elem === 'string') {
                    temp.push(elem);
                } else {
                  return false;
                }
            })
            return temp.map(elem => elem.replace(/ /g,'')[0].toUpperCase()).sort().join('');
        }
    } else {
      return false;
    }
}

module.exports = {
  createDreamTeam
};
