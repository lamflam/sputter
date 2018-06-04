This is a fork of [ESQuery](https://github.com/estools/esquery) that lets you configure the method used to get keys for a given node, eg:

```js
const customAst = {
  type: "Foo",
  children: [
    {
      type: "Bar",
      value: 5
    }
  ]
};

const esquery = require("esquery").configure({
  getKeys(node) {
    return Object.keys(node);
  }
});

esquery.query(customAst, "Foo > Bar[value=5]"); // [ { type: "Bar", value: 5 } ]
```
