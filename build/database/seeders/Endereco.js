"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Endereco_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Endereco"));
class default_1 extends Seeder_1.default {
    async run() {
        await Endereco_1.default.createMany([
            { cep: 798,
                logradouro: 'casa',
                bairro: 'Cei',
                cidade: 'BSB' },
            { cep: 3241546,
                logradouro: 'apartamento',
                bairro: 'Aguas Claras',
                cidade: 'BSB' }
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=Endereco.js.map