"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const cargo_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/cargo"));
class default_1 extends Seeder_1.default {
    async run() {
        await cargo_1.default.createMany([
            { dsc_cargo: "Desenvolvedor" },
            { dsc_cargo: "Marketing" },
            { dsc_cargo: "Publicitários" },
            { dsc_cargo: "Analista" },
            { dsc_cargo: "Gerente" }
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=Cargo.js.map