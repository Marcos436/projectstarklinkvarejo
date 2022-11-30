import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany} from '@ioc:Adonis/Lucid/Orm'
//import { DateTime } from 'luxon'
import Cliente from './cliente'
import Produto from './produto'
//import ProdutosVenda from './produtosVenda'
import TipoPagamento from './tipoPagamento'


export default class NotasFiscai extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public dt_nota: string
  @column()
  public clienteId: number
  @column()
  public tipo_pagamentoId: number
  @column()
  public produtosVendaId: number
  @belongsTo (() => TipoPagamento)
  public tipos_pagamentos: BelongsTo<typeof TipoPagamento>
  @belongsTo (() => Cliente)
  public clientes: BelongsTo<typeof Cliente>
  @manyToMany(() => Produto, {pivotTable: 'ProdutosVenda'})
  public produtos: ManyToMany<typeof Produto>
  /*@belongsTo(() => ProdutosVenda)
  public produtovenda: BelongsTo<typeof ProdutosVenda> */
}