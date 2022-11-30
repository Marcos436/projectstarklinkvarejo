import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'marcas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').unique().notNullable().unsigned()
      table.string('dsc_produto', 30).notNullable()
      table.string('marca', 30).notNullable()
      table.string('departamento', 30).notNullable()
      table.double('preco').notNullable()
      table.integer('quantidade').notNullable()

      /*
       *    Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
      */
      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
