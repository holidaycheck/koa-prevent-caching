# koa-prevent-middleware

A middleware for koa to set appropriate response headers that prevent clients from caching the response.

## Usage

```js
const Koa = require('koa');
const preventCaching = require('koa-prevent-caching');

var app = new Koa();
app.use(preventCaching);
```
