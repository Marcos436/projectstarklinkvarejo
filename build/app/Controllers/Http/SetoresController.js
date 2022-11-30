"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const setore_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/setore"));
class NotasController {
    async index({ response }) {
        const body = response.getBody();
        const setores = await setore_1.default.all(body);
        response.status(201);
        return {
            message: `Listagem de dados dos setores: `,
            data: setores,
        };
    }
    async store({ request, response }) {
        const body = request.body();
        const setores = await setore_1.default.create(body);
        response.status(201);
        return {
            message: `A descrição do novo Cargo foi inserido com sucesso !!`,
            Date: setores,
        };
    }
    show({ request }) {
        const id = request.param("id");
        return setore_1.default.findOrFail(`${id}`);
    }
    async update({ params, request, response }) {
        const setores = await setore_1.default.find(params.id);
        if (setores) {
            setores.merge(request.only(['dsc_cargo']));
            setores.save();
        }
        response.status(201);
        return {
            message: `Update do campo realizado com sucesso`,
            data: setores,
        };
    }
    async destroy({ params, response }) {
        const setores = await setore_1.default.findOrFail(params.id);
        if (setores.id != setores.id) {
            return response.status(401);
        }
        await setores.delete();
        return {
            message: `Cargo Excluído com sucesso!`,
            descrição: setores
        };
    }
}
exports.default = NotasController;
//# sourceMappingURL=SetoresController.js.map