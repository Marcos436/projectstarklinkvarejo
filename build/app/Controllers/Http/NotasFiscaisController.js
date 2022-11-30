"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notasFiscai_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/notasFiscai"));
class NotasController {
    async index({ response }) {
        const body = response.getBody();
        const notafiscal = await notasFiscai_1.default.all(body);
        response.status(201);
        return {
            message: `Listagem de dados dos notafiscal: `,
            data: notafiscal,
        };
    }
    async store({ request, response }) {
        const body = request.body();
        const notafiscal = await notasFiscai_1.default.create(body);
        response.status(201);
        return {
            message: `A descrição do novo Cargo foi inserido com sucesso !!`,
            Date: notafiscal,
        };
    }
    show({ request }) {
        const id = request.param("id");
        return notasFiscai_1.default.findOrFail(`${id}`);
    }
    async update({ params, request, response }) {
        const notafiscal = await notasFiscai_1.default.find(params.id);
        if (notafiscal) {
            notafiscal.merge(request.only(['dsc_cargo']));
            notafiscal.save();
        }
        response.status(201);
        return {
            message: `Update do campo realizado com sucesso`,
            data: notafiscal,
        };
    }
    async destroy({ params, response }) {
        const notafiscal = await notasFiscai_1.default.findOrFail(params.id);
        if (notafiscal.id != notafiscal.id) {
            return response.status(401);
        }
        await notafiscal.delete();
        return {
            message: `Cargo Excluído com sucesso!`,
            descrição: notafiscal
        };
    }
}
exports.default = NotasController;
//# sourceMappingURL=NotasFiscaisController.js.map