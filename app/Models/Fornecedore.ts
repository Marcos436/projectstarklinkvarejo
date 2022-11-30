import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Endereco from './endereco'
import Produto from './produto'

export default class Fornecedore extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public nome_comercial: String
  @column()
  public cnpj: String
  @column()
  public telefone: number
  @column()
  public enderecoId: number
  @belongsTo (() => Endereco)
  public enderecos: BelongsTo<typeof Endereco>
  @hasMany (() => Produto)
  public produtos: HasMany<typeof Produto>
}
