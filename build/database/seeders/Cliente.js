"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Cliente_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Cliente"));
class default_1 extends Seeder_1.default {
    async run() {
        await Cliente_1.default.createMany([
            { nome: 'Jonas',
                cpf: '044',
                telefone: 61,
                genero: 'M',
                dt_nascimento: new Date(2001, 8, 3),
                endereco_id: 12,
                email: 'gmail' },
            { nome: 'Kassia',
                cpf: '033',
                telefone: 61,
                genero: 'F',
                dt_nascimento: new Date(2000, 2, 8),
                endereco_id: 8,
                email: 'hotmail' }
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=Cliente.js.map