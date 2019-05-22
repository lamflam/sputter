function traverse(ast, options) {
  options = options || {};
  const enter = options.enter;
  const leave = options.leave;
  const identifierKey = options.identifierKey;

  function visit(node, parent, prop, index) {
    if (
      !node ||
      typeof node !== "object" ||
      typeof node[identifierKey] !== "string"
    ) {
      return;
    }

    if (enter) {
      enter(node, parent, prop, index);
    }

    for (const prop in node) {
      if (node.hasOwnProperty(prop)) {
        const child = node[prop];

        if (Array.isArray(child)) {
          for (let i = 0; i < child.length; i++) {
            visit(child[i], node, prop, i);
          }
        } else {
          visit(child, node, prop);
        }
      }
    }

    if (leave) {
      leave(node, parent, prop, index);
    }
  }

  visit(ast, null);
}

module.exports = traverse;
