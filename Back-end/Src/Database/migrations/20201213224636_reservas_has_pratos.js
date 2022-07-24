
exports.up = function (knex) {

    return knex.schema.createTable('reservas_has_pratos', tb => {
        tb.increments('reserva_has_prato_codigo')
        tb.integer('reserva_has_prato_quant_prato')
        tb.integer('reserva_has_prato_reserva_codigo').unsigned()
        tb.integer('reserva_has_prato_prato_codigo').unsigned()

        tb.foreign('reserva_has_prato_reserva_codigo').references('reserva_codigo').inTable('reservas')
        tb.foreign('reserva_has_prato_prato_codigo').references('prato_codigo').inTable('pratos')
    })
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('reservas_has_pratos') 
}
