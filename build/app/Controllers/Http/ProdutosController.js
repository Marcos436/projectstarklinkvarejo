"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const produto_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/produto"));
class NotasController {
    async index({ response }) {
        const body = response.getBody();
        const produto = await produto_1.default.all(body);
        response.status(201);
        return {
            message: `Listagem de dados dos produto: `,
            data: produto,
        };
    }
    async store({ request, response }) {
        const body = request.body();
        const produto = await produto_1.default.create(body);
        response.status(201);
        return {
            message: `A descrição do novo Cargo foi inserido com sucesso !!`,
            Date: produto,
        };
    }
    show({ request }) {
        const id = request.param("id");
        return produto_1.default.findOrFail(`${id}`);
    }
    async update({ params, request, response }) {
        const produto = await produto_1.default.find(params.id);
        if (produto) {
            produto.merge(request.only(['dsc_cargo']));
            produto.save();
        }
        response.status(201);
        return {
            message: `Update do campo realizado com sucesso`,
            data: produto,
        };
    }
    async destroy({ params, response }) {
        const produto = await produto_1.default.findOrFail(params.id);
        if (produto.id != produto.id) {
            return response.status(401);
        }
        await produto.delete();
        return {
            message: `Cargo Excluído com sucesso!`,
            descrição: produto
        };
    }
}
exports.default = NotasController;
//# sourceMappingURL=ProdutosController.js.map