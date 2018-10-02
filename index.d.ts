import * as Koa from "koa";

declare function preventCaching(): Koa.Middleware;
export = preventCaching;
