"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'clientes';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').unique().notNullable().unsigned();
            table.string('nome', 50).notNullable();
            table.string('cpf', 14).notNullable();
            table.integer('telefone').notNullable();
            table.string('genero', 1).notNullable();
            table.date('dt_nascimento').notNullable();
            table.string('image', 200);
            table.integer('endereco_id').notNullable().unsigned().references('id').inTable('enderecos.id').onDelete('CASCADE');
            table.string('email', 50).notNullable();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1665022435513_clientes.js.map