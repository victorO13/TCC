exports.up = function (knex) {
    return knex.schema.createTable('mesas', tb => {
        tb.increments('mesa_codigo')
        tb.datetime('mesa_data_hora')
        tb.integer('mesa_quant_mesas')
        tb.integer('mesa_quant_pessoas')
        tb.integer('mesa_restaurante_codigo').unsigned()
        tb.boolean('mesa_status').defaultTo(true)
  
        tb.foreign('mesa_restaurante_codigo').references('restaurante_codigo').inTable('restaurantes')
      })
  }
  
  exports.down = function (knex) {
    return  knex.schema.dropTableIfExists('mesas')
  }
  
  