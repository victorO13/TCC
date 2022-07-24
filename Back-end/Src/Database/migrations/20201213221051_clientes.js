
exports.up = function (knex) {
    return knex.schema.createTable('clientes', tb => {
      tb.increments('cliente_codigo')
      tb.string('cliente_nome',255)
      tb.string('cliente_email',50)
      tb.string('cliente_cpf',14)
      tb.string('cliente_telefone',15)
      tb.string('cliente_sexo',15)
      tb.string('cliente_regiao',30)
    }) 
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('clientes')
}
