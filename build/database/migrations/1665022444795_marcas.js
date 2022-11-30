"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'marcas';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').unique().notNullable().unsigned();
            table.string('dsc_produto', 30).notNullable();
            table.string('marca', 30).notNullable();
            table.string('departamento', 30).notNullable();
            table.double('preco').notNullable();
            table.integer('quantidade').notNullable();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1665022444795_marcas.js.map