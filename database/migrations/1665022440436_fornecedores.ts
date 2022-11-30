import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'fornecedores'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').unique().notNullable().unsigned()
      table.string('nome_comercial',50).notNullable()
      table.string('cnpj', 18).notNullable()
      table.integer('telefone').notNullable()
      table.integer('endereco_id').notNullable().unsigned().references('enderecos.id').onDelete('CASCADE').onUpdate('CASCADE');

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
