"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Marca_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Marca"));
class default_1 extends Seeder_1.default {
    async run() {
        await Marca_1.default.createMany([
            { dsc_produto: 'Celular',
                marca: 'Xiaomi',
                departamento: 'Eletrônico',
                preco: 1800,
                quantidade: 100 }
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=Marca.js.map