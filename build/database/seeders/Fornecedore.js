"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Fornecedore_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Fornecedore"));
class default_1 extends Seeder_1.default {
    async run() {
        await Fornecedore_1.default.createMany([
            { nome_comercial: 'BSBTech',
                cnpj: '000',
                telefone: 62,
                endereco_id: 1 }
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=Fornecedore.js.map