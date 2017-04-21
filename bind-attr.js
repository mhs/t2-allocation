let isBoundAttr = e => {
  return (
    e.type === 'ElementModifierStatement' && e.path.original === 'bind-attr'
  );
};

let createMustache = val => {
  return {
    type: 'MustacheStatement',
    params: [],
    path: { type: 'PathExpression', original: val }
  };
};
module.exports = class {
  transform(ast) {
    this.syntax.traverse(ast, {
      ElementNode(node) {
        let bindAttrs = node.modifiers.filter(isBoundAttr);

        bindAttrs.forEach(b => {
          let attrName = b.hash.pairs[0].key;
          let originalValue = b.hash.pairs[0].value.original;
          let attrValue;
          let mustache = {
            type: 'MustacheStatement',
            params: [],
            path: { type: 'PathExpression', original: originalValue }
          };

          if (attrName === 'class') {
            let parts = originalValue.split();
            attrValue = {
              type: 'ConcatStatement',
              parts: [createMustache(originalValue)]
            };
          } else {
            attrValue = createMustache(originalValue);
          }
          node.attributes.push({
            type: 'AttrNode',
            name: attrName,
            value: attrValue
          });
        });
        node.modifiers = node.modifiers.filter(e => !isBoundAttr(e));
      }
    });

    return ast;
  }
};
