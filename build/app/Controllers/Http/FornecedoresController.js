"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fornecedore_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/fornecedore"));
class FornecedoresController {
    async index({ response }) {
        const body = response.getBody();
        const fornecedore = await fornecedore_1.default.all(body);
        response.status(201);
        return {
            message: `Listagem de dados dos fornecedore: `,
            data: fornecedore,
        };
    }
    async store({ request, response }) {
        const body = request.body();
        const fornecedore = await fornecedore_1.default.create(body);
        response.status(201);
        return {
            message: `A descrição do novo Cargo foi inserido com sucesso !!`,
            Date: fornecedore,
        };
    }
    show({ request }) {
        const id = request.param("id");
        return fornecedore_1.default.findOrFail(`${id}`);
    }
    async update({ params, request, response }) {
        const fornecedore = await fornecedore_1.default.find(params.id);
        if (fornecedore) {
            fornecedore.merge(request.only(['dsc_cargo']));
            fornecedore.save();
        }
        response.status(201);
        return {
            message: `Update do campo realizado com sucesso`,
            data: fornecedore,
        };
    }
    async destroy({ params, response }) {
        const fornecedore = await fornecedore_1.default.findOrFail(params.id);
        if (fornecedore.id != fornecedore.id) {
            return response.status(401);
        }
        await fornecedore.delete();
        return {
            message: `Cargo Excluído com sucesso!`,
            descrição: fornecedore
        };
    }
}
exports.default = FornecedoresController;
//# sourceMappingURL=FornecedoresController.js.map