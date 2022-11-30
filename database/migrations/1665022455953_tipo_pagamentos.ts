import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'tipo_pagamentos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').unique().notNullable().unsigned()
      table.string('dsc_tipo_pagamento', 20).notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
