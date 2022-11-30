"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const endereco_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/endereco"));
class EnderecosController {
    async index({ response }) {
        const body = response.getBody();
        const endereco = await endereco_1.default.all(body);
        response.status(201);
        return {
            message: `Listagem de dados dos endereco: `,
            data: endereco,
        };
    }
    async store({ request, response }) {
        const body = request.body();
        const endereco = await endereco_1.default.create(body);
        response.status(201);
        return {
            message: `A descrição do novo Cargo foi inserido com sucesso !!`,
            Date: endereco,
        };
    }
    show({ request }) {
        const id = request.param("id");
        return endereco_1.default.findOrFail(`${id}`);
    }
    async update({ params, request, response }) {
        const endereco = await endereco_1.default.find(params.id);
        if (endereco) {
            endereco.merge(request.only(['dsc_cargo']));
            endereco.save();
        }
        response.status(201);
        return {
            message: `Update do campo realizado com sucesso`,
            data: endereco,
        };
    }
    async destroy({ params, response }) {
        const endereco = await endereco_1.default.findOrFail(params.id);
        if (endereco.id != endereco.id) {
            return response.status(401);
        }
        await endereco.delete();
        return {
            message: `Cargo Excluído com sucesso!`,
            descrição: endereco
        };
    }
}
exports.default = EnderecosController;
//# sourceMappingURL=EnderecosController.js.map