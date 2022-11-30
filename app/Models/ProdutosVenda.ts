import { BaseModel, column,hasMany,HasMany } from '@ioc:Adonis/Lucid/Orm'
//import Cliente from './cliente'
//import NotasFiscai from './notasFiscai'
import Produto from './produto'

export default class ProdutosVenda extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public dt_venda: String
  @column()
  public nota_fiscalId: number
  @column()
  public clienteId: number
  @column()
  public produtoId: number

  @hasMany (() => Produto)
  public produtos: HasMany<typeof Produto>
  /*@hasMany (() => NotasFiscai)
  public nota_fiscal: HasMany<typeof NotasFiscai>*/
  /*@hasMany (() => Cliente)
  public clientes: HasMany<typeof Cliente>*/
}
