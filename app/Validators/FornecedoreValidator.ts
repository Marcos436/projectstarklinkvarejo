import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FornecedoreValidator {
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

    nome_comercial:schema.string([       
            rules.required(),
            rules.maxLength(20),
            rules.alphaNum({allow: ['space', 'underscore', 'dash']} )
            ]),
    cnpj: schema.string([
      rules.required(),
      rules.maxLength(18),
      rules.minLength(18),
      rules.unique({ table: 'fornecedores', column: 'cnpj' })

    ]),
    telefone  : schema.number(),
    enderecoId   : schema.number()
   


  })

  
  public messages: CustomMessages = {

    'maxLength': 'O campo pode conter no máximo {{ options.maxLength }} comprimento do caractere',
    'minLength': 'O campo pode conter no mínimo {{ options.minLength }} comprimento do caractere',
    'required': 'Campo {{ options.required }} obrigatorio',
    'unique': 'dados de usuario  já cadastrado! ',
    'alpha':'O campo inserido não permitir numeral '
  }
}
