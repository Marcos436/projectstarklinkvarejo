import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'funcionarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').unique().notNullable().unsigned()
      table.string('nome', 50).notNullable
      table.string('cpf', 14).notNullable()
      table.integer('matricula').notNullable().unsigned()
      table.integer('telefone').notNullable()
      table.string('email', 50)
      table.string('estado_civil', 1).notNullable()
      table.string('genero', 1).notNullable()
      table.string('dt_nascimento').notNullable()
      table.integer('endereco_id').notNullable().unsigned().references('enderecos.id').onDelete('CASCADE')
      table.integer('cargo_id').notNullable().unsigned().references('cargos.id').onDelete('CASCADE')
      table.integer('setor_id').notNullable().unsigned().references('setores.id').onDelete('CASCADE')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */ 
      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
