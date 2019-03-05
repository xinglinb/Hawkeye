'use strict';

const {
  Controller,
} = require('egg');

class PerformanceController extends Controller {
  async moniter() {
    const {
      ctx,
    } = this;
    const {
      moniterData,
    } = ctx.query;

    console.log('moniterData', moniterData);
    ctx.body = {};
    ctx.status = 201;
  }
}

module.exports = PerformanceController;
