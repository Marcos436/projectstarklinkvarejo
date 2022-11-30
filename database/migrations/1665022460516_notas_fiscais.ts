import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'notas_fiscais'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').unique().notNullable().unsigned()
      table.string('dt_nota').notNullable()
      table.integer('cliente_id').notNullable().unsigned().references('id').inTable('clientes.id').onDelete('CASCADE')
      table.integer('tipo_pagamento_id').notNullable().unsigned().references('tipo_pagamentos.id').onDelete('CASCADE')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
     
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
