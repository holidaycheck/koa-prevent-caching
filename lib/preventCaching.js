'use strict';

const preventCaching = async (ctx, next) => {
    ctx.set('cache-control', 'private, no-cache, no-store, must-revalidate');
    ctx.set('pragma', 'No-Cache');
    ctx.set('expires', '-1');

    await next();
};

module.exports = preventCaching;
