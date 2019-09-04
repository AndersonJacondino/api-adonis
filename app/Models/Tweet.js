'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tweet extends Model {
  // trazer usuario em tweet
  // user() {
  //   return this.belongsTo("App/Models/User");
  // }
}

module.exports = Tweet
