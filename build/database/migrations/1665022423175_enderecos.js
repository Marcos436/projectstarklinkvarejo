"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'enderecos';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').unique().unsigned().notNullable();
            table.integer('cep').unsigned().notNullable();
            table.string('logradouro', 50).notNullable();
            table.string('bairro', 30).notNullable();
            table.string('cidade', 30).notNullable();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1665022423175_enderecos.js.map