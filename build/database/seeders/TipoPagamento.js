"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const TipoPagamento_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/TipoPagamento"));
class default_1 extends Seeder_1.default {
    async run() {
        await TipoPagamento_1.default.createMany([
            { dsc_tipo_pagamento: 'Cartão' }
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=TipoPagamento.js.map