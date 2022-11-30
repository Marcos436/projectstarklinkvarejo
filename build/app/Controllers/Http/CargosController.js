"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cargo_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/cargo"));
class CargosController {
    async index({ response }) {
        const body = response.getBody();
        const cargos = await cargo_1.default.all(body);
        response.status(201);
        return {
            message: `Listagem de dados dos Cargos: `,
            data: cargos,
        };
    }
    async store({ request, response }) {
        const body = request.body();
        const cargos = await cargo_1.default.create(body);
        response.status(201);
        return {
            message: `A descrição do novo Cargo foi inserido com sucesso !!`,
            Date: cargos,
        };
    }
    show({ request }) {
        const id = request.param("id");
        return cargo_1.default.findOrFail(`${id}`);
    }
    async update({ params, request, response }) {
        const cargos = await cargo_1.default.find(params.id);
        if (cargos) {
            cargos.merge(request.only(['dsc_cargo']));
            cargos.save();
        }
        response.status(201);
        return {
            message: `Update do campo realizado com sucesso`,
            data: cargos,
        };
    }
    async destroy({ params, response }) {
        const cargos = await cargo_1.default.findOrFail(params.id);
        if (cargos.id != cargos.id) {
            return response.status(401);
        }
        await cargos.delete();
        return {
            message: `Cargo Excluído com sucesso!`,
            descrição: cargos
        };
    }
}
exports.default = CargosController;
//# sourceMappingURL=CargosController.js.map