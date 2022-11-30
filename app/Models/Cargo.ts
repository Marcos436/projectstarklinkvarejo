import { BaseModel, column, HasMany, hasMany,  } from '@ioc:Adonis/Lucid/Orm'
import Funcionario from './funcionario'

export default class Cargo extends BaseModel {
  

  @column({ isPrimary: true })
  public id: number

  @column()
  public dsc_cargo: string

  @column()
  public funcionarioId: number

  @hasMany(() => Funcionario)
  public funcionarios: HasMany<typeof Funcionario>
  
}
