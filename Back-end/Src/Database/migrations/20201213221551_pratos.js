
exports.up = function (knex) {
    return knex.schema.createTable('pratos', tb => {
        tb.increments('prato_codigo')
        tb.string('prato_nome',50)
        tb.string('prato_categoria',50)
        tb.integer('prato_quantidade')
        tb.text('prato_descricao')
        tb.double('prato_preco')
        tb.integer('prato_restaurante_codigo').unsigned()
        tb.boolean('prato_status').defaultTo(true)
        tb.foreign('prato_restaurante_codigo').references('restaurante_codigo').inTable('restaurantes')
    })
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('pratos')
}
