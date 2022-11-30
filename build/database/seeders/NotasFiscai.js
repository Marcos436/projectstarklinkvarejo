"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const NotasFiscai_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/NotasFiscai"));
class default_1 extends Seeder_1.default {
    async run() {
        await NotasFiscai_1.default.createMany([
            { dt_nota: new Date(2022, 10, 10),
                cliente_id: 1,
                tipo_pagamento_id: 1 }
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=NotasFiscai.js.map