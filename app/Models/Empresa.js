"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Empresa extends Model {
  static get primaryKey() {
    return "idEmpresa";
  }
}

module.exports = Empresa;
