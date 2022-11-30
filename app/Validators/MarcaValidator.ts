import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MarcaValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({

    dsc_produto: schema.string([

      rules.required(),    // o campo e obrigatorio
      rules.maxLength(30)  // maximo X caracteres
     

    ]),
    marca: schema.string([

      rules.required(),     // o campo e obrigatorio
      rules.maxLength(30)  // maximo X caracteres
      

    ]),
    departamento: schema.string([
       
      rules.required(),     // o campo e obrigatorio
      rules.maxLength(30)  // maximo X caracteres

    ]),
    preco:  schema.number([
      rules.required(),     // o campo e obrigatorio

    ]) ,
    quantidade:  schema.number([

      rules.required(),     // o campo e obrigatorio



    ])


  })

  
  public messages: CustomMessages = {

    'file.size': 'O tamanho do arquivo deve estar abaixo {{ options.size }}',
    'file.extname': 'O arquivo deve ter um dos {{ options.extnames }} nomes de extensão',
    'password_confirmation.confirmed': 'Senha não confere',
    'maxLength': 'O campo pode conter no máximo {{ options.maxLength }} comprimento do caractere',
    'minLength': 'O campo pode conter no mínimo {{ options.minLength }} comprimento do caractere',
    'required': 'Campo {{ options.required }} obrigatorio ! ',
    'unique': 'Já existe usuario cadastrado com esse dados  !'


  }
}
