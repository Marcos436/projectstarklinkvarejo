"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Funcionario_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Funcionario"));
class default_1 extends Seeder_1.default {
    async run() {
        await Funcionario_1.default.createMany([
            { nome: 'Miguel',
                cpf: '777',
                matricula: 2121,
                telefone: 61,
                email: 'gmail',
                estado_civil: 'solteiro',
                genero: 'M',
                dt_nascimento: new Date(2001, 7, 4),
                endereco_id: 1,
                cargo_id: 1,
                setor_id: 1 }
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=Funcionario.js.map