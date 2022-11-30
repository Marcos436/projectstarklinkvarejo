"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Produto_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Produto"));
class default_1 extends Seeder_1.default {
    async run() {
        await Produto_1.default.createMany([
            { dsc_produto: 'Computador',
                departamento: 'Eletrônico',
                preco: 5000,
                quantidade: 50,
                marca_id: 1,
                fornecedor_id: 1 }
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=Produto.js.map