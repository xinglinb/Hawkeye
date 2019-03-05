'use strict';

const { Controller } = require('egg');

class ViewController extends Controller {
  async index() {
    const list = await this.app.mysql.get('user', {
      id: 1,
    });
    await this.ctx.render('index.ejs', {
      vmData: {
        list,
      },
    });
  }

  async moniter() {
    const { ctx } = this;
    const { moniterData } = ctx.query;

    console.log('moniterData', moniterData);
    ctx.body = {};
    ctx.status = 201;
  }
}

module.exports = ViewController;
