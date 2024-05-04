
const Utils = {
  calculateNumber(type, a, b) {
    if (type === 'SUM') {
      const roundedA = Math.round(a);
      const roundedB = Math.round(b);
      return roundedA + roundedB;
    } if (type === 'SUBTRACT') {
      const roundedA = Math.round(a);
      const roundedB = Math.round(b);
      return roundedA - roundedB;
    } if (type === 'DIVIDE') {
      const roundedA = Math.round(a);
      const roundedB = Math.round(b);
      if (roundedB === 0) return 'Error';
      return roundedA / roundedB;
    }
    return 0;
  }
};

module.exports = Utils;
