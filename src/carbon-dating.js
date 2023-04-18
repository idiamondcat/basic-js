const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (sampleActivity && typeof sampleActivity === 'string' && sampleActivity < MODERN_ACTIVITY && sampleActivity > 0) {
  const LOG = 0.693;
  const K = LOG/HALF_LIFE_PERIOD;
  let A = Number(sampleActivity);
  let A0 = MODERN_ACTIVITY;
  let t = (Math.log(A0/A))/K;
  return Math.ceil(t);
} else {
  return false;
}
}

module.exports = {
  dateSample
};
