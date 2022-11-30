"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'produtos';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').unique().unsigned().notNullable();
            table.string('dsc_produto', 50).notNullable();
            table.string('departamento', 30).notNullable();
            table.double('preco').notNullable();
            table.integer('quantidade').notNullable();
            table.integer('marca_id').notNullable().unsigned().references('id').inTable('marcas.id').onDelete('CASCADE');
            table.integer('fornecedor_id').notNullable().unsigned().references('id').inTable('fornecedores.id').onDelete('CASCADE');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1665022451246_produtos.js.map