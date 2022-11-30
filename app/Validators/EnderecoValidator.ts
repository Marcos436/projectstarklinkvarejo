import { schema, CustomMessages,rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class EnderecoValidator {
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

    cep: schema.number([
      rules.required()
    ]),
    logradouro: schema.string([
      rules.maxLength(100),  // o campo não pode passar o maximo de caracteres
     rules.required(),    // O campo passar a ser obrigatorio
     rules.alphaNum({allow: ['space', 'underscore', 'dash']})  //permitir que a string tenha espaços, traços e caracteres de sublinhado.
    ]),
    bairro: schema.string([
      rules.maxLength(50),  // o campo não pode passar o maximo de caracteres
     rules.required(),    // O campo passar a ser obrigatorio
     rules.alphaNum({allow: ['space', 'underscore', 'dash']})  //permitir que a string tenha espaços, traços e caracteres de sublinhado.
    ]),
    cidade: schema.string([
      rules.maxLength(50),  // o campo não pode passar o maximo de caracteres
     rules.required(),    // O campo passar a ser obrigatorio
     rules.alphaNum({allow: ['space', 'underscore', 'dash']})  //permitir que a string tenha espaços, traços e caracteres de sublinhado.
    ]),
  })

  
  public messages: CustomMessages = {
    'maxLength': 'O campo não pode ultrapassar  {{ options.maxLength }} caracteres ',
    'required': 'O Campo e obrigatorio',
    'unique': 'O valor do campo inserido já existe.',
    'alpha':'O campo inserido não permitir numeral '
  }
}
