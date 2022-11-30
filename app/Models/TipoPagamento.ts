import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import NotasFiscai from './notasFiscai'

export default class TipoPagamento extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public dsc_tipo_pagamento: String
  @hasMany(() => NotasFiscai)
  public notas_fiscais: HasMany<typeof NotasFiscai>
}
