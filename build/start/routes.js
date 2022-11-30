"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.resource("/cargos", "CargosController").apiOnly();
    Route_1.default.resource('/clientes', 'ClientesController').apiOnly();
    Route_1.default.resource('/enderecos', 'EnderecosController').apiOnly();
    Route_1.default.resource('/fornecedores', 'FornecedoresController').apiOnly();
    Route_1.default.resource('/funcionarios', 'FuncionariosController').apiOnly();
    Route_1.default.resource('/marcas', 'MarcasController').apiOnly();
    Route_1.default.resource('/notaFiscais', 'NotasFiscaisController').apiOnly();
    Route_1.default.resource('/produtos', 'ProdutosController').apiOnly();
    Route_1.default.resource('/setores', 'SetoresController').apiOnly();
    Route_1.default.resource('/tipoPagamentos', 'TipoPagamentosController').apiOnly();
}).prefix('/api');
//# sourceMappingURL=routes.js.map