'use strict';

const Koa = require('koa');
const supertest = require('supertest');
const test = require('ava');

const middleware = require('../lib/preventCaching');

const createApp = () => {
    const app = new Koa();
    app.use(middleware);
    return app.callback();
};

test('sets cache-control headers', async (t) => {
    const app = createApp();

    const response = await supertest(app).get('/');

    t.is(response.headers['cache-control'], 'private, no-cache, no-store, must-revalidate');
    t.is(response.headers.pragma, 'No-Cache');
    t.is(response.headers.expires, '-1');
});
