/**
 * @author Arman Yeghiazaryan
 * @copyright LinguaCode 2016
 * @license GPLv3
 */

var Router = require('express').Router;
module.exports = function (app, translations) {
  var translationRouter = new Router();
  //TODO: Arman: Add translation routes.

  app.use('/translations', translationRouter);
};
