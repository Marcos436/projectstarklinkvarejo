"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
class Funcionario extends Orm_1.BaseModel {
}
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], Funcionario.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Funcionario.prototype, "nome", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Funcionario.prototype, "cpf", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Funcionario.prototype, "matricula", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Funcionario.prototype, "telefone", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Funcionario.prototype, "email", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Funcionario.prototype, "estado_civil", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Funcionario.prototype, "genero", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Date)
], Funcionario.prototype, "dt_nascimento", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Funcionario.prototype, "endereco_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Funcionario.prototype, "cargo_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Funcionario.prototype, "setor_id", void 0);
exports.default = Funcionario;
//# sourceMappingURL=funcionario.js.map