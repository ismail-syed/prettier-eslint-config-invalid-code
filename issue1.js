module.exports = {
  create: function(context) {
    function isPotentiallyProblematicLeft(left) {
      return left.type === 'Identifier' ||
        (
          left.type === 'ObjectPattern' && left.properties.some(function(prop) {
            return prop.type === 'SpreadProperty' || prop.type === 'ExperimentalRestProperty';
          })
        ) ||
        (
          left.type === 'ArrayPattern' && left.elements.some(function(element) {
            return element.type === 'RestElement';
          })
        );
    }
  }
};
