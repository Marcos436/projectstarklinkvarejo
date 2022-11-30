"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'produtos_vendas';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').unique().unsigned().notNullable();
            table.date('dt_venda').notNullable();
            table.integer('nota_fiscal_id').notNullable().unsigned().references('id').inTable('notas_fiscais.id').onDelete('CASCADE');
            table.integer('cliente_id').notNullable().unsigned().references('id').inTable('clientes.id').onDelete('CASCADE');
            table.integer('produto_id').notNullable().unsigned().references('id').inTable('produtos.id').onDelete('CASCADE');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1665022479267_produtos_vendas.js.map