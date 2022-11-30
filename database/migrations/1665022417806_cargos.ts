import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'cargos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').unique().unsigned().notNullable();
      table.string('dsc_cargo', 35).notNullable()
      table.integer('funcionario_id').notNullable().unsigned().references('funcionarios.id')
      
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
