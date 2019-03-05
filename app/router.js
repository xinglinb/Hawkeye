'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // views
  router.get('/', controller.views.index);

  // users

  // performance
  router.get('/getMoniterData', controller.performance.moniter);
};
