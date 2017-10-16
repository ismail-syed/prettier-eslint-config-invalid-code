module.exports = {
  create: function(context) {
    function isInvalidAssertCallExpression(node) {
      return isAssertExpression(node.callee) && node.arguments.some(function(arg) {
        return isRewritableSinonExpression(arg, SINON_ASSERT);
      });
    }
  },
};
