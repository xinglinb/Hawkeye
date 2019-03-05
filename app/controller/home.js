'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const list = await this.app.mysql.get('list', {
      id: 1,
    });
    await this.ctx.render('index.ejs', {
      vmData: {
        a: 111,
        list,
      },
    });
  }

  async dev() {
    await this.ctx.render('dev.ejs', {
      vmData: {
        a: 111,
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

module.exports = HomeController;
