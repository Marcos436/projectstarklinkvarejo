"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const funcionario_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/funcionario"));
class FuncionariosController {
    async index({ response }) {
        const body = response.getBody();
        const funcionario = await funcionario_1.default.all(body);
        response.status(201);
        return {
            message: `Listagem de dados dos funcionario: `,
            data: funcionario,
        };
    }
    async store({ request, response }) {
        const body = request.body();
        const funcionario = await funcionario_1.default.create(body);
        response.status(201);
        return {
            message: `A descrição do novo Cargo foi inserido com sucesso !!`,
            Date: funcionario,
        };
    }
    show({ request }) {
        const id = request.param("id");
        return funcionario_1.default.findOrFail(`${id}`);
    }
    async update({ params, request, response }) {
        const funcionario = await funcionario_1.default.find(params.id);
        if (funcionario) {
            funcionario.merge(request.only(['dsc_cargo']));
            funcionario.save();
        }
        response.status(201);
        return {
            message: `Update do campo realizado com sucesso`,
            data: funcionario,
        };
    }
    async destroy({ params, response }) {
        const fornecedore = await funcionario_1.default.findOrFail(params.id);
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
exports.default = FuncionariosController;
//# sourceMappingURL=FuncionariosController.js.map