"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tipoPagamento_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/tipoPagamento"));
class NotasController {
    async index({ response }) {
        const body = response.getBody();
        const tipopagamento = await tipoPagamento_1.default.all(body);
        response.status(201);
        return {
            message: `Listagem de dados dos tipopagamento: `,
            data: tipopagamento,
        };
    }
    async store({ request, response }) {
        const body = request.body();
        const tipopagamento = await tipoPagamento_1.default.create(body);
        response.status(201);
        return {
            message: `A descrição do novo Cargo foi inserido com sucesso !!`,
            Date: tipopagamento,
        };
    }
    show({ request }) {
        const id = request.param("id");
        return tipoPagamento_1.default.findOrFail(`${id}`);
    }
    async update({ params, request, response }) {
        const tipopagamento = await tipoPagamento_1.default.find(params.id);
        if (tipopagamento) {
            tipopagamento.merge(request.only(['dsc_cargo']));
            tipopagamento.save();
        }
        response.status(201);
        return {
            message: `Update do campo realizado com sucesso`,
            data: tipopagamento,
        };
    }
    async destroy({ params, response }) {
        const tipopagamento = await tipoPagamento_1.default.findOrFail(params.id);
        if (tipopagamento.id != tipopagamento.id) {
            return response.status(401);
        }
        await tipopagamento.delete();
        return {
            message: `Cargo Excluído com sucesso!`,
            descrição: tipopagamento
        };
    }
}
exports.default = NotasController;
//# sourceMappingURL=TipoPagamentosController.js.map