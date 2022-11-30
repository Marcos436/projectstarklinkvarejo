import Hash from '@ioc:Adonis/Core/Hash'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany,beforeSave} from '@ioc:Adonis/Lucid/Orm'
import Endereco from './endereco'
import NotasFiscai from './notasFiscai'
//import ProdutosVenda from './produtosVenda'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public nome: String
  @column()
  public cpf: String
  @column()
  public telefone: number
  @column()
  public genero: string
  @column()
  public dt_nascimento: string
 /* @column() 
  //public image: string */
  @column()
  public enderecoId: number
  @column()
  public email: string
  @column()
  public password: string
  @column()
  public token: string
  @column()
  public produtosVendaId: number
  
  @belongsTo(() => Endereco)
  public enderecos: BelongsTo<typeof Endereco>
 /* @belongsTo(() => ProdutosVenda)
  public produtovenda: BelongsTo<typeof ProdutosVenda> */
  @hasMany(() => NotasFiscai)
  public notas_fiscais: HasMany<typeof NotasFiscai>
  @beforeSave()   public static async hashPassword(clientes:Cliente) {     
    if (clientes.$dirty.password)  {       
      clientes.password = await Hash.make(clientes.password)    
     }   

    }
    
  }
