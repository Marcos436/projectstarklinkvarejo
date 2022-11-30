import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'produtos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').unique().unsigned().notNullable()
      table.string('dsc_produto', 50).notNullable()
      table.string('departamento', 30).notNullable()
      table.double('preco').notNullable()
      table.integer('quantidade').notNullable()
      table.integer('marca_id').notNullable().unsigned().references('marcas.id').onDelete('CASCADE')
      table.integer('fornecedor_id').notNullable().unsigned().references('fornecedores.id').onDelete('CASCADE')
      table.integer('produtos_venda_id').notNullable().unsigned().references('produtos_vendas.id').onDelete('CASCADE')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
