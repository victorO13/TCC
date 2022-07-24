
exports.up = function (knex) {
    return knex.schema.createTable('restaurantes', tb => {
        tb.increments('restaurante_codigo')
        tb.string('restaurante_nome',255)
        tb.string('restaurante_email',50)
        tb.string('restaurante_cnpj',20)
        tb.string('restaurante_telefone',15)
        tb.string('restaurante_fantasia',100)
        tb.string('restaurante_regiao',45)
        tb.string('restaurante_descricao',255)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('restaurantes')
}
