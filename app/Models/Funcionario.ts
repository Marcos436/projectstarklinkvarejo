import { BaseModel, BelongsTo, belongsTo, column} from '@ioc:Adonis/Lucid/Orm'
import Cargo from './cargo'
import Endereco from './endereco'
import Setore from './setore'

export default class Funcionario extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public nome: String
   @column()
  public cpf: String
   @column()
  public matricula: number
  @column()
  public telefone: number
  @column()
  public email: String
  @column()
  public estado_civil: String
  @column()
  public genero: String
  @column()
  public dt_nascimento: string
  @column()
  public enderecoId: number
  @column()
  public cargoId: number
  @column()
  public setorId: number
  @belongsTo (() => Setore)
  public setores: BelongsTo<typeof Setore>

  @belongsTo (() => Cargo)
  public cargos: BelongsTo<typeof Cargo>

  @belongsTo (() => Endereco)
  public enderecos: BelongsTo<typeof Endereco>


}
