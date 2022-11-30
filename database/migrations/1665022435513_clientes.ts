import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'clientes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').unique().notNullable()
      table.string('nome', 50).notNullable();
      table.string('cpf', 14).notNullable();
      table.integer('telefone').notNullable();
      table.string('genero', 1).notNullable();
      //table.date('dt_nascimento').notNullable();
      table.string('dt_nascimento').notNullable();
      //table.string('image', 200);
     table.integer('endereco_id').notNullable().unsigned().references('enderecos.id').onDelete('CASCADE').onUpdate('CASCADE');
      table.string('email', 50).notNullable();
      table.string('password', 255).notNullable();
      table.string('token').nullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
