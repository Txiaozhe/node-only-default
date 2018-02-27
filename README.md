# node-only-default

Return whitelisted properties of an object, with default value.

### Quick Start

```bash
$ npm install only-default --save
```

```javascript
const only = require('only-default');

const obj = {
  name: 'aaa',
  age: '20'
};

console.log(only(obj, {name: '', sex: -1}));
```
