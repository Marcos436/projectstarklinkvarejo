import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SetoreValidator {
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

    dsc_setor: schema.string([
      rules.required(),
      rules.alpha({allow: ['space']}),
      rules.unique({ table: 'setores', column: 'dsc_setor' }),
      rules.maxLength(45)
    ])







  })
  public messages: CustomMessages = {

    'required': 'O Campo e obrigatorio',
    'alpha':'O campo inserido não permitir numeral ',
    'unique': 'O valor do campo  inserido já existe.',
    'maxLength': 'O campo não pode ultrapassar  {{ options.maxLength }} caracteres ',
  }
}
