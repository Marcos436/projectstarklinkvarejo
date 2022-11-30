import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Fornecedore from './fornecedore'
import Marca from './marca'
import ProdutosVenda from './produtosVenda'



export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  public id: number
   @column()
  public dsc_produto: String
  @column()
  public departamento: String
  @column()
  public preco: number
  @column()
  public quantidade: number
  @column()
  public marcaId: number
  @column()
  public fornecedorId: number
  @column()
  public produtosVendaId: number
 
  @belongsTo (() => Fornecedore)
  public fornecedores: BelongsTo<typeof Fornecedore>
  
  @belongsTo (() => Marca)
  public marcas: BelongsTo<typeof Marca>

  @belongsTo (() => ProdutosVenda)
  public produtovendas: BelongsTo<typeof ProdutosVenda>
  
}