import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'produtos_vendas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').unique().unsigned().notNullable()
      table.string('dt_venda').notNullable()
      table.integer('nota_fiscal_id').notNullable().unsigned().references('id').inTable('notas_fiscais.id').onDelete('CASCADE')
      table.integer('cliente_id').notNullable().unsigned().references('clientes.id').onDelete('CASCADE')
      table.integer('produto_id').notNullable().unsigned().references('produto.id').onDelete('CASCADE')
      

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
