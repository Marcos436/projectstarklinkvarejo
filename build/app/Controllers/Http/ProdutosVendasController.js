"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const produtosVenda_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/produtosVenda"));
class ProdutoVendasController {
    async index({ response }) {
        const body = response.getBody();
        const produtoVenda = await produtosVenda_1.default.all(body);
        response.status(201);
        return {
            message: `Listagem de dados dos produtoVenda: `,
            data: produtoVenda,
        };
    }
    async store({ request, response }) {
        const body = request.body();
        const produtoVenda = await produtosVenda_1.default.create(body);
        response.status(201);
        return {
            message: `A descrição do novo Cargo foi inserido com sucesso !!`,
            Date: produtoVenda,
        };
    }
    show({ request }) {
        const id = request.param("id");
        return produtosVenda_1.default.findOrFail(`${id}`);
    }
    async update({ params, request, response }) {
        const produtoVenda = await produtosVenda_1.default.find(params.id);
        if (produtoVenda) {
            produtoVenda.merge(request.only(['dsc_cargo']));
            produtoVenda.save();
        }
        response.status(201);
        return {
            message: `Update do campo realizado com sucesso`,
            data: produtoVenda,
        };
    }
    async destroy({ params, response }) {
        const produtoVenda = await produtosVenda_1.default.findOrFail(params.id);
        if (produtoVenda.id != produtoVenda.id) {
            return response.status(401);
        }
        await produtoVenda.delete();
        return {
            message: `Cargo Excluído com sucesso!`,
            descrição: produtoVenda
        };
    }
}
exports.default = ProdutoVendasController;
//# sourceMappingURL=ProdutosVendasController.js.map