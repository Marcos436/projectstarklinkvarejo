import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract  } from '@ioc:Adonis/Core/HttpContext'


export default class ClienteValidator {
  constructor(protected ctx: HttpContextContract){}
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
    
    nome: schema.string([
      rules.required(),
      rules.maxLength(50),
      rules.alpha({allow: ['space']})
    ]),
    cpf: schema.string([
      rules.required(),
      rules.minLength(14),
      rules.maxLength(22),
      rules.unique({ table: 'clientes', column: 'cpf' })
           

    ]),
    telefone: schema.number(
      [
        rules.required(),
        

      ]
    ),
    genero: schema.string([rules.minLength(1)]),
    dt_nascimento: schema.string(),
    enderecoId: schema.number(),
    email: schema.string([
      rules.unique({ table: 'clientes', column: 'email' }),
      rules.email({
        ignoreMaxLength: true,   ////  ignorar comprimento máximo
        allowIpDomain: false,  //// permitir Domínio Ip
        domainSpecificValidation: false, //// validação específica de domínio
      }),
      rules.normalizeEmail({
        allLowercase: true,    //// todas as letras minúsculas
        gmailRemoveDots: true,  //// gmail remover pontos
        gmailRemoveSubaddress: true, //// gmail Remover sub-endereço
      }),
    ]),
    password: schema.string([
  //    rules.confirmed()
    ]),
    
    })


  public messages: CustomMessages = {
    
    
    'confirmed': 'Senha não confere',
    'maxLength': 'O campo não pode ultrapassar  {{ options.maxLength }} caracteres ',
    'minLength': 'O campo pode conter no mínimo {{ options.minLength }} comprimento do caractere',
    'required': 'O Campo e obrigatorio',
    'unique': 'O valor do campo  inserido já existe.',
    'alpha':'O campo inserido não permitir numeral '
    
    
  }
}
