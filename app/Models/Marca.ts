import { BaseModel, column, HasMany, hasMany} from '@ioc:Adonis/Lucid/Orm'
import Produto from './produto'

export default class Marca extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public dsc_produto: String
  @column()
  public marca: String
  @column()
  public departamento: String
  @column()
  public preco: Number
  @column()
  public quantidade: number

  @hasMany (() => Produto)
  public produtos: HasMany<typeof Produto>
  
  
}
