'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UnidadeMedida extends Model {
    static getCamposCadastro(){
        return['descricao','sigla']
}
}

module.exports = UnidadeMedida
