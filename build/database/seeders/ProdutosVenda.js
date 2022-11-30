"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const ProdutosVenda_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ProdutosVenda"));
class default_1 extends Seeder_1.default {
    async run() {
        await ProdutosVenda_1.default.createMany([
            { dt_venda: new Date(2022, 10, 10),
                nota_fiscal_id: 1,
                cliente_id: 1,
                produto_id: 1 }
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=ProdutosVenda.js.map