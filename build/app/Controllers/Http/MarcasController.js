"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const marca_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/marca"));
class FuncionariosController {
    async index({ response }) {
        const body = response.getBody();
        const marca = await marca_1.default.all(body);
        response.status(201);
        return {
            message: `Listagem de dados dos marca: `,
            data: marca,
        };
    }
    async store({ request, response }) {
        const body = request.body();
        const marca = await marca_1.default.create(body);
        response.status(201);
        return {
            message: `A descrição do novo Cargo foi inserido com sucesso !!`,
            Date: marca,
        };
    }
    show({ request }) {
        const id = request.param("id");
        return marca_1.default.findOrFail(`${id}`);
    }
    async update({ params, request, response }) {
        const marca = await marca_1.default.find(params.id);
        if (marca) {
            marca.merge(request.only(['dsc_cargo']));
            marca.save();
        }
        response.status(201);
        return {
            message: `Update do campo realizado com sucesso`,
            data: marca,
        };
    }
    async destroy({ params, response }) {
        const fornecedore = await marca_1.default.findOrFail(params.id);
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
//# sourceMappingURL=MarcasController.js.map