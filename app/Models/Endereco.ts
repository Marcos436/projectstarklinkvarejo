import { BaseModel, column, HasMany, hasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Cliente from './cliente'
import Fornecedore from './fornecedore'
import Funcionario from './funcionario'

export default class Endereco extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public cep: number
  @column()
  public logradouro: String
  @column()
  public bairro: String
  @column()
  public cidade: String
  @hasOne(() => Funcionario)
  public funcionarios: HasOne<typeof Funcionario>
  @hasOne(() => Fornecedore)
  public fornecedores: HasOne<typeof Fornecedore>
  @hasMany(() => Cliente)
  public clientes: HasMany<typeof Cliente>
}
