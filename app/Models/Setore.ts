import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Funcionario from './funcionario'

export default class Setore extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public dsc_setor: string
  @hasMany (() => Funcionario)
  public funcionarios: HasMany<typeof Funcionario>
}
