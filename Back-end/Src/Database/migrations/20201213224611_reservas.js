
exports.up = function(knex) {
    return knex.schema.createTable('reservas', tb => {
        tb.increments('reserva_codigo')
        tb.integer('reserva_qtd_pessoas')
        tb.integer('reserva_cliente_codigo').unsigned()
        tb.integer('reserva_mesa_codigo').unsigned()
        tb.integer('reserva_restaurante_codigo').unsigned()
        tb.datetime('reserva_data').defaultTo(knex.fn.now())
        

        tb.foreign('reserva_cliente_codigo').references('cliente_codigo').inTable('clientes')
        tb.foreign('reserva_mesa_codigo').references('mesa_codigo').inTable('mesas')
        tb.foreign('reserva_restaurante_codigo').references('restaurante_codigo').inTable('restaurantes')

      })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('reservas')
}
