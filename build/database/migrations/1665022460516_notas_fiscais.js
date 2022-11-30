"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'notas_fiscais';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').unique().notNullable().unsigned();
            table.dateTime('dt_nota').notNullable();
            table.integer('cliente_id').notNullable().unsigned().references('id').inTable('clientes.id').onDelete('CASCADE');
            table.integer('tipo_pagamento_id').notNullable().unsigned().references('id').inTable('tipo_pagamentos.id').onDelete('CASCADE');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1665022460516_notas_fiscais.js.map