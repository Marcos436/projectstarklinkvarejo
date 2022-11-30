import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'enderecos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').unique().unsigned().notNullable();
      table.integer('cep').unsigned().notNullable();
      table.string('logradouro', 100).notNullable();
      table.string('bairro', 50).notNullable();
      table.string('cidade', 50).notNullable();
      

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
