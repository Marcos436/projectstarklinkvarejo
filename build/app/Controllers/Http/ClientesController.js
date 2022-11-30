"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const cliente_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/cliente"));
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
class ClientesController {
    constructor() {
        this.validationOptions = {
            type: ["image"],
            size: "2mb",
        };
    }
    async index({ response }) {
        const body = response.getBody();
        const cliente = await cliente_1.default.all(body);
        response.status(201);
        return {
            message: `Listagem de dados dos Cliente: `,
            data: cliente,
        };
    }
    async store({ request, response }) {
        const body = request.body();
        const image = request.file('image', this.validationOptions);
        if (image) {
            const imageName = `${(0, uuid_1.v4)()}.${image.extname}`;
            await image.move(Application_1.default.tmpPath('uploads \ image'), {
                name: imageName
            });
            body.image = imageName;
        }
        const cliente = await cliente_1.default.create(body);
        response.status(201);
        return {
            message: `A descrição do novo Cargo foi inserido com sucesso !!`,
            Date: cliente,
        };
    }
    show({ request }) {
        const id = request.param("id");
        return cliente_1.default.findOrFail(`${id}`);
    }
    async update({ params, request }) {
        const body = request.body();
        const cliente = await cliente_1.default.findOrFail(params.id);
        cliente.nome = body.nome;
        cliente.cpf = body.cpf;
        cliente.telefone = body.telefone;
        cliente.genero = body.genero;
        cliente.dt_nascimento = body.dt_nascimento;
        cliente.endereco_id = body.endereco_id;
        cliente.email = body.email;
        if (cliente.image != body.image || !cliente.image) {
            const image = request.file('image', this.validationOptions);
            if (image) {
                const imageName = `${(0, uuid_1.v4)()}.${image.extname}`;
                await image.move(Application_1.default.tmpPath('uploads \ image'), {
                    name: imageName
                });
                cliente.image = imageName;
            }
        }
        await cliente.save();
        return {
            message: `Update do campo realizado com sucesso`,
            data: cliente,
        };
    }
    async destroy({ params, response }) {
        const cliente = await cliente_1.default.findOrFail(params.id);
        if (cliente.id != cliente.id) {
            return response.status(401);
        }
        await cliente.delete();
        return {
            message: `Cargo Excluído com sucesso!`,
            descrição: cliente
        };
    }
}
exports.default = ClientesController;
//# sourceMappingURL=ClientesController.js.map