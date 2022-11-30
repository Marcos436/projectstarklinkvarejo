import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProdutosVendaValidator {
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

    dt_venda : schema.string([

      rules.required()  ///// campo e obrigatorio
    ]),
    nota_fiscalId: schema.number([

     
      rules.required()
 
     ]),
     clienteId: schema.number([

     
      rules.required()
 
     ]),
     produtoId : schema.number([

      
      rules.required()
 
     ]),

  })

  
  public messages: CustomMessages = {


    'required': 'Campo  obrigatorio ! ',






  }
}
