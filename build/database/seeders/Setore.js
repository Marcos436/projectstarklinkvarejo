"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Setore_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Setore"));
class default_1 extends Seeder_1.default {
    async run() {
        await Setore_1.default.createMany([
            { dsc_setor: 'Setor principal' }
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=Setore.js.map